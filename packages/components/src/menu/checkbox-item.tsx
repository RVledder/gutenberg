/**
 * External dependencies
 */
import * as Ariakit from '@ariakit/react';

/**
 * WordPress dependencies
 */
import { forwardRef, useContext } from '@wordpress/element';
import { Icon, check } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import type { WordPressComponentProps } from '../context';
import { MenuContext } from './context';
import type { MenuCheckboxItemProps } from './types';
import * as Styled from './styles';

export const MenuCheckboxItem = forwardRef<
	HTMLDivElement,
	WordPressComponentProps< MenuCheckboxItemProps, 'div', false >
>( function MenuCheckboxItem(
	{ suffix, children, hideOnClick = false, ...props },
	ref
) {
	const menuContext = useContext( MenuContext );

	return (
		<Styled.MenuCheckboxItem
			ref={ ref }
			{ ...props }
			accessibleWhenDisabled
			hideOnClick={ hideOnClick }
			store={ menuContext?.store }
		>
			<Ariakit.MenuItemCheck
				store={ menuContext?.store }
				render={ <Styled.ItemPrefixWrapper /> }
				// Override some ariakit inline styles
				style={ { width: 'auto', height: 'auto' } }
			>
				<Icon icon={ check } size={ 24 } />
			</Ariakit.MenuItemCheck>

			<Styled.MenuItemContentWrapper>
				<Styled.MenuItemChildrenWrapper>
					{ children }
				</Styled.MenuItemChildrenWrapper>

				{ suffix && (
					<Styled.ItemSuffixWrapper>
						{ suffix }
					</Styled.ItemSuffixWrapper>
				) }
			</Styled.MenuItemContentWrapper>
		</Styled.MenuCheckboxItem>
	);
} );
