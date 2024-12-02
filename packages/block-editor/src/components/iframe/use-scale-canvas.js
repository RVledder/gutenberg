/**
 * WordPress dependencies
 */
import { useEffect, useRef, useCallback } from '@wordpress/element';
import { useReducedMotion, useResizeObserver } from '@wordpress/compose';

/**
 * @typedef {Object} TransitionState
 * @property {number} scale        Scale of the canvas.
 * @property {number} frameSize    Size of the frame/offset around the canvas.
 * @property {number} clientHeight ClientHeight of the iframe.
 * @property {number} scrollTop    ScrollTop of the iframe.
 * @property {number} scrollHeight ScrollHeight of the iframe.
 */

/**
 * Calculate the scale of the canvas.
 *
 * @param {Object} options                     Object of options
 * @param {number} options.frameSize           Size of the frame/offset around the canvas
 * @param {number} options.containerWidth      Actual width of the canvas container
 * @param {number} options.maxContainerWidth   Maximum width of the container to use for the scale calculation. This locks the canvas to a maximum width when zooming out.
 * @param {number} options.scaleContainerWidth Width the of the container wrapping the canvas container
 * @return {number} Scale value between 0 and/or equal to 1
 */
function calculateScale( {
	frameSize,
	containerWidth,
	maxContainerWidth,
	scaleContainerWidth,
} ) {
	return (
		( Math.min( containerWidth, maxContainerWidth ) - frameSize * 2 ) /
		scaleContainerWidth
	);
}

/**
 * Compute the next scrollTop position after scaling the iframe content.
 *
 * @param {TransitionState} transitionFrom Starting point of the transition
 * @param {TransitionState} transitionTo   Ending state of the transition
 * @return {number} Next scrollTop position after scaling the iframe content.
 */
function computeScrollTopNext( transitionFrom, transitionTo ) {
	const {
		clientHeight: prevClientHeight,
		frameSize: prevFrameSize,
		scale: prevScale,
		scrollTop,
		scrollHeight,
	} = transitionFrom;
	const { clientHeight, frameSize, scale } = transitionTo;
	// Step 0: Start with the current scrollTop.
	let scrollTopNext = scrollTop;
	// Step 1: Undo the effects of the previous scale and frame around the
	// midpoint of the visible area.
	scrollTopNext =
		( scrollTopNext + prevClientHeight / 2 - prevFrameSize ) / prevScale -
		prevClientHeight / 2;

	// Step 2: Apply the new scale and frame around the midpoint of the
	// visible area.
	scrollTopNext =
		( scrollTopNext + clientHeight / 2 ) * scale +
		frameSize -
		clientHeight / 2;

	// Step 3: Handle an edge case so that you scroll to the top of the
	// iframe if the top of the iframe content is visible in the container.
	// The same edge case for the bottom is skipped because changing content
	// makes calculating it impossible.
	scrollTopNext = scrollTop <= prevFrameSize ? 0 : scrollTopNext;

	// This is the scrollTop value if you are scrolled to the bottom of the
	// iframe. We can't just let the browser handle it because we need to
	// animate the scaling.
	const maxScrollTop =
		scrollHeight * ( scale / prevScale ) + frameSize * 2 - clientHeight;

	// Step 4: Clamp the scrollTopNext between the minimum and maximum
	// possible scrollTop positions. Round the value to avoid subpixel
	// truncation by the browser which sometimes causes a 1px error.
	return Math.round(
		Math.min( Math.max( 0, scrollTopNext ), Math.max( 0, maxScrollTop ) )
	);
}

/**
 * Generate the keyframes to use for the zoom out animation.
 *
 * @param {TransitionState} transitionFrom Starting transition state.
 * @param {TransitionState} transitionTo   Ending transition state.
 * @return {Object[]} An array of keyframes to use for the animation.
 */
function getAnimationKeyframes( transitionFrom, transitionTo ) {
	const {
		scale: prevScale,
		frameSize: prevFrameSize,
		scrollTop: prevScrollTop,
	} = transitionFrom;
	const { scale, frameSize, scrollTop } = transitionTo;

	return [
		{
			translate: `0 0`,
			scale: prevScale,
			paddingTop: `${ prevFrameSize / prevScale }px`,
			paddingBottom: `${ prevFrameSize / prevScale }px`,
		},
		{
			translate: `0 ${ prevScrollTop - scrollTop }px`,
			scale,
			paddingTop: `${ frameSize / scale }px`,
			paddingBottom: `${ frameSize / scale }px`,
		},
	];
}

/**
 * @typedef {Object} ScaleCanvasResult
 * @property {boolean} isZoomedOut             A boolean indicating if the canvas is zoomed out.
 * @property {number}  scaleContainerWidth     The width of the container used to calculate the scale.
 * @property {Object}  contentResizeListener   A resize observer for the content.
 * @property {Object}  containerResizeListener A resize observer for the container.
 */

/**
 * Handles scaling the canvas for the zoom out mode and animating between
 * the states.
 *
 * @param {Object}        options                   Object of options.
 * @param {number}        options.frameSizeProp     Size of the frame around the content.
 * @param {Document}      options.iframeDocument    Document of the iframe.
 * @param {number}        options.maxContainerWidth Max width of the canvas to use as the starting scale point. Defaults to 750.
 * @param {number|string} options.scaleProp         Scale of the canvas. Can be an decimal between 0 and 1, 1, or 'auto-scaled'.
 * @return {ScaleCanvasResult} Properties of the result.
 */
export function useScaleCanvas( {
	frameSizeProp,
	iframeDocument,
	maxContainerWidth = 750,
	scaleProp,
} ) {
	const [ contentResizeListener, { height: contentHeight } ] =
		useResizeObserver();
	const [ containerResizeListener, { width: containerWidth } ] =
		useResizeObserver();
	const prefersReducedMotion = useReducedMotion();

	const initialContainerWidthRef = useRef( 0 );

	// Track if the animation should start when the useEffect runs.
	const startAnimationRef = useRef( false );

	// Track the animation so we know if we have an animation running,
	// and can cancel it, reverse it, call a finish event, etc.
	const animationRef = useRef( null );

	useEffect( () => {
		if ( scaleProp === 1 ) {
			initialContainerWidthRef.current = containerWidth;
		}
	}, [ containerWidth, scaleProp ] );

	const scaleContainerWidth = Math.max(
		initialContainerWidthRef.current,
		containerWidth
	);

	/**
	 * The starting transition state for the zoom out animation.
	 * @type {import('react').RefObject<TransitionState>}
	 */
	const transitionFromRef = useRef( {
		scale: 1,
		frameSize: 0,
		clientHeight: 0,
		scrollTop: 0,
		scrollHeight: 0,
	} );

	/**
	 * The ending transition state for the zoom out animation.
	 * @type {import('react').RefObject<TransitionState>}
	 */
	const transitionToRef = useRef( {
		scale: 1,
		frameSize: 0,
		clientHeight: 0,
		scrollTop: 0,
		scrollHeight: 0,
	} );

	/**
	 * Set the final zoom out state.
	 */
	const setZoomOutFinalState = useCallback( () => {
		const {
			scaleValue: nextScaleValue,
			frameSize: nextFrameSize,
			scrollTop: nextScrollTop,
		} = transitionToRef.current;

		iframeDocument.documentElement.style.setProperty(
			'--wp-block-editor-iframe-zoom-out-scale',
			nextScaleValue
		);
		iframeDocument.documentElement.style.setProperty(
			'--wp-block-editor-iframe-zoom-out-frame-size',
			`${ nextFrameSize }px`
		);

		// Disable reason: Eslint isn't smart enough to know that this is a
		// DOM element. https://github.com/facebook/react/issues/31483
		// eslint-disable-next-line react-compiler/react-compiler
		iframeDocument.documentElement.scrollTop = nextScrollTop;

		// Update previous values.
		transitionFromRef.current = transitionToRef.current;

		// Don't allow a new transition to start again unless it was started by the zoom out mode changing.
		startAnimationRef.current = false;
	}, [ iframeDocument ] );

	/**
	 * Animate to the final zoom out state.
	 */
	const handleZoomOutAnimation = useCallback( () => {
		// If we already have an animation running, reverse it.
		if ( animationRef.current ) {
			animationRef.current.reverse();

			// Swap the transition to/from refs so that we set the correct values when
			// setZoomOutFinalState runs.
			const tempTransitionFrom = transitionFromRef.current;
			const tempTransitionTo = transitionToRef.current;
			transitionFromRef.current = tempTransitionTo;
			transitionToRef.current = tempTransitionFrom;

			setZoomOutFinalState();
			return;
		}

		const { scrollTop } = transitionFromRef.current;
		const { scrollTop: scrollTopNext } = transitionToRef.current;

		iframeDocument.documentElement.style.setProperty(
			'--wp-block-editor-iframe-zoom-out-scroll-top',
			`${ scrollTop }px`
		);

		iframeDocument.documentElement.style.setProperty(
			'--wp-block-editor-iframe-zoom-out-scroll-top-next',
			`${ scrollTopNext }px`
		);

		iframeDocument.documentElement.classList.add( 'zoom-out-animation' );

		animationRef.current = iframeDocument.documentElement.animate(
			getAnimationKeyframes(
				transitionFromRef.current,
				transitionToRef.current
			),
			{
				easing: 'cubic-bezier(0.46, 0.03, 0.52, 0.96)',
				duration: 400,
			}
		);

		animationRef.current.onfinish = () => {
			animationRef.current = null;

			iframeDocument.documentElement.classList.remove(
				'zoom-out-animation'
			);

			iframeDocument.documentElement.style.removeProperty(
				'--wp-block-editor-iframe-zoom-out-scroll-top-next'
			);

			iframeDocument.documentElement.style.removeProperty(
				'--wp-block-editor-iframe-zoom-out-scroll-top'
			);

			setZoomOutFinalState();
		};
	}, [ iframeDocument, setZoomOutFinalState ] );

	useEffect( () => {
		if ( ! iframeDocument ) {
			return;
		}

		if ( scaleProp !== 1 ) {
			iframeDocument.documentElement.classList.add( 'is-zoomed-out' );
		}

		// We _only_ want to animate when the zoom out mode is toggled, not when the scale changes due to the container resizing.
		startAnimationRef.current = true;

		return () => {
			iframeDocument.documentElement.classList.remove( 'is-zoomed-out' );
		};
	}, [ iframeDocument, scaleProp ] );

	/**
	 * This handles:
	 * 1. Setting the correct scale and vars of the canvas when zoomed out
	 * 2. If zoom out mode has been toggled, runs the animation of zooming in/out
	 */
	useEffect( () => {
		if ( ! iframeDocument ) {
			return;
		}

		const frameSize = parseInt( frameSizeProp, 10 );

		const scale =
			scaleProp === 'auto-scaled'
				? calculateScale( {
						frameSize,
						containerWidth,
						maxContainerWidth,
						scaleContainerWidth,
				  } )
				: scaleProp;

		iframeDocument.documentElement.style.setProperty(
			'--wp-block-editor-iframe-zoom-out-content-height',
			`${ contentHeight }px`
		);

		const clientHeight = iframeDocument.documentElement.clientHeight;
		iframeDocument.documentElement.style.setProperty(
			'--wp-block-editor-iframe-zoom-out-inner-height',
			`${ clientHeight }px`
		);

		iframeDocument.documentElement.style.setProperty(
			'--wp-block-editor-iframe-zoom-out-container-width',
			`${ containerWidth }px`
		);
		iframeDocument.documentElement.style.setProperty(
			'--wp-block-editor-iframe-zoom-out-scale-container-width',
			`${ scaleContainerWidth }px`
		);

		// We need to update the appropriate scale to exit from. If sidebars have been opened since setting the
		// original scale, we will snap to a much smaller scale due to the scale container immediately changing sizes when exiting.
		if (
			scaleProp === 'auto-scaled' &&
			transitionFromRef.current.scale !== 1
		) {
			// We use containerWidth as the divisor, as scaleContainerWidth will always match the containerWidth when
			// exiting.
			transitionFromRef.current.scale = calculateScale( {
				frameSize: transitionFromRef.current.frameSize,
				containerWidth,
				maxContainerWidth,
				scaleContainerWidth: containerWidth,
			} );
		}

		/**
		 * Handle the zoom out animation:
		 *
		 * - Get the current scrollTop position.
		 * - Calculate where the same scroll position is after scaling.
		 * - Apply fixed positioning to the canvas with a transform offset
		 *   to keep the canvas centered.
		 * - Animate the scale and padding to the new scale and frame size.
		 * - After the animation is complete, remove the fixed positioning
		 *   and set the scroll position that keeps everything centered.
		 */
		if ( startAnimationRef.current ) {
			// We can't trust the set value from contentHeight, as it was measured
			// before the zoom out mode was changed. After zoom out mode is changed,
			// appenders may appear or disappear, so we need to get the height from
			// the iframe at this point when we're about to animate the zoom out.
			// The iframe scrollTop, scrollHeight, and clientHeight will all be
			// the most accurate.
			transitionFromRef.current.clientHeight =
				transitionFromRef.current.clientHeight ?? clientHeight;
			transitionFromRef.current.scrollTop =
				iframeDocument.documentElement.scrollTop;
			transitionFromRef.current.scrollHeight =
				iframeDocument.documentElement.scrollHeight;

			transitionToRef.current = {
				scaleValue: scale,
				frameSize,
				clientHeight,
			};
			transitionToRef.current.scrollTop = computeScrollTopNext(
				transitionFromRef.current,
				transitionToRef.current
			);

			if ( prefersReducedMotion ) {
				setZoomOutFinalState();
			} else {
				handleZoomOutAnimation();
			}
		} else {
			// If we are not going to animate the transition, set the scale and frame size directly.
			// If we are animating, these values will be set when the animation is finished.
			// Example: Opening sidebars that reduce the scale of the canvas, but we don't want to
			// animate the transition.
			iframeDocument.documentElement.style.setProperty(
				'--wp-block-editor-iframe-zoom-out-scale',
				scale
			);
			iframeDocument.documentElement.style.setProperty(
				'--wp-block-editor-iframe-zoom-out-frame-size',
				`${ frameSize }px`
			);
		}

		return () => {
			iframeDocument.documentElement.style.removeProperty(
				'--wp-block-editor-iframe-zoom-out-scale'
			);
			iframeDocument.documentElement.style.removeProperty(
				'--wp-block-editor-iframe-zoom-out-frame-size'
			);
			iframeDocument.documentElement.style.removeProperty(
				'--wp-block-editor-iframe-zoom-out-content-height'
			);
			iframeDocument.documentElement.style.removeProperty(
				'--wp-block-editor-iframe-zoom-out-inner-height'
			);
			iframeDocument.documentElement.style.removeProperty(
				'--wp-block-editor-iframe-zoom-out-container-width'
			);
			iframeDocument.documentElement.style.removeProperty(
				'--wp-block-editor-iframe-zoom-out-scale-container-width'
			);
		};
	}, [
		scaleProp,
		frameSizeProp,
		handleZoomOutAnimation,
		setZoomOutFinalState,
		prefersReducedMotion,
		iframeDocument,
		contentHeight,
		containerWidth,
		maxContainerWidth,
		scaleContainerWidth,
	] );

	return {
		isZoomedOut: scaleProp !== 1,
		scaleContainerWidth,
		contentResizeListener,
		containerResizeListener,
	};
}
