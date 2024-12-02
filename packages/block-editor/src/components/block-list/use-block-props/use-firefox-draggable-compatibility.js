/**
 * WordPress dependencies
 */
import { useRefEffect } from '@wordpress/compose';

class NodeSet extends Set {
	constructor() {
		super();
		this.documents = new Set();
	}
	add( node ) {
		const { ownerDocument } = node;
		if ( ! this.documents.has( ownerDocument ) ) {
			ownerDocument.addEventListener( 'pointerdown', down );
			this.documents.add( ownerDocument );
		}
		return super.add( node );
	}
	delete( node ) {
		restore( node );
		return super.delete( node );
	}
}

const nodes = new NodeSet();

function restore( node ) {
	const prevDraggable = node.getAttribute( 'data-draggable' );
	if ( prevDraggable ) {
		node.removeAttribute( 'data-draggable' );
		// Only restore if `draggable` is still removed. It could have been
		// changed by React in the meantime.
		if ( prevDraggable === 'true' && ! node.getAttribute( 'draggable' ) ) {
			node.setAttribute( 'draggable', 'true' );
		}
	}
}

function down( event ) {
	if ( event.target.isContentEditable ) {
		// Whenever an editable element is clicked, check which draggable
		// blocks contain this element, and temporarily disable draggability.
		for ( const node of nodes ) {
			if (
				node.getAttribute( 'draggable' ) === 'true' &&
				node.contains( event.target )
			) {
				node.removeAttribute( 'draggable' );
				node.setAttribute( 'data-draggable', 'true' );
			}
		}
	} else {
		// Whenever a non-editable element is clicked, re-enable draggability
		// for any blocks that were previously disabled.
		for ( const node of nodes ) {
			restore( node );
		}
	}
}

/**
 * In Firefox, the `draggable` and `contenteditable` attributes don't play well
 * together. When `contenteditable` is within a `draggable` element, selection
 * doesn't get set in the right place. The only solution is to temporarily
 * remove the `draggable` attribute clicking inside `contenteditable` elements.
 *
 * @return {Function} Cleanup function.
 */
export function useFirefoxDraggableCompatibility() {
	return useRefEffect( ( node ) => {
		nodes.add( node );
		return () => {
			nodes.delete( node );
		};
	}, [] );
}
