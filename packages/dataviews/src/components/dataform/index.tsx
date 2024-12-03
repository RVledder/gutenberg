/**
 * WordPress dependencies
 */
import { useMemo } from '@wordpress/element';

/**
 * Internal dependencies
 */
import type { DataFormProps } from '../../types';
import { DataFormProvider } from '../dataform-context';
import { normalizeFields } from '../../normalize-fields';
import { DataFormLayout } from '../../dataforms-layouts/data-form-layout';
import { MIXED_VALUE } from '../../constants';

/**
 * Loops through the list of data items and returns an object with the intersecting ( same ) key and values.
 * Skips keys that start with an underscore.
 *
 * @param data list of items.
 */
function getIntersectingValues< Item extends object >( data: Item[] ): Item {
	const intersectingValues = {} as Item;
	const keys = Object.keys( data[ 0 ] ) as Array< keyof Item >;
	for ( const key of keys ) {
		// Skip keys that start with underscore.
		if ( key.toString().startsWith( '_' ) ) {
			continue;
		}
		const [ firstRecord, ...remainingRecords ] = data;

		if ( typeof firstRecord[ key ] === 'object' ) {
			// Traverse through nested objects.
			intersectingValues[ key ] = getIntersectingValues(
				data.map( ( item ) => item[ key ] as object )
			) as Item[ keyof Item ];
		} else {
			const intersects = remainingRecords.every( ( item ) => {
				return item[ key ] === firstRecord[ key ];
			} );
			if ( intersects ) {
				intersectingValues[ key ] = firstRecord[ key ];
			} else {
				intersectingValues[ key ] = MIXED_VALUE as Item[ keyof Item ];
			}
		}
	}
	return intersectingValues;
}

export default function DataForm< Item extends object >( {
	data,
	form,
	fields,
	onChange,
}: DataFormProps< Item > ) {
	const normalizedFields = useMemo(
		() => normalizeFields( fields ),
		[ fields ]
	);

	const flattenedData = useMemo( () => {
		if ( Array.isArray( data ) ) {
			return getIntersectingValues< Item >( data );
		}
		return data;
	}, [ data ] );

	if ( ! form.fields ) {
		return null;
	}

	const isBulkEditing = Array.isArray( data );

	return (
		<DataFormProvider fields={ normalizedFields }>
			<DataFormLayout
				data={ flattenedData }
				form={ form }
				onChange={ onChange }
				isBulkEditing={ isBulkEditing }
			/>
		</DataFormProvider>
	);
}
