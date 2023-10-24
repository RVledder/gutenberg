/**
 * Internal dependencies
 */
import lazyLoad from '../utils/lazy-load';
import initBlock from '../utils/init-block';

import metadata from './block.json';
import save from './save';
import transforms from './transforms';

const { name } = metadata;

export { metadata, name };

export const settings = {
	transforms,
	getEditWrapperProps( attributes ) {
		const { width } = attributes;
		if ( 'wide' === width || 'full' === width ) {
			return { 'data-align': width };
		}
	},
	edit: lazyLoad( () =>
		import( /* webpackChunkName: "text-columns/editor" */ './edit' )
	),
	save,
};

export const init = () => initBlock( { name, metadata, settings } );
