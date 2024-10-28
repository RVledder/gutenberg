/**
 * WordPress dependencies
 */
import { useEffect, useRef } from '@wordpress/element';

/**
 * Internal dependencies
 */
import type { BasePost } from '../../types';

const SlugView = ( { item }: { item: BasePost } ) => {
	const slug = item.slug;
	const originalSlugRef = useRef( slug );

	useEffect( () => {
		if ( slug && originalSlugRef.current === undefined ) {
			originalSlugRef.current = slug;
		}
	}, [ slug ] );

	const slugToDisplay = slug || originalSlugRef.current;

	return `/${ slugToDisplay ?? '' }`;
};

export default SlugView;
