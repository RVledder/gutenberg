/**
 * Internal dependencies
 */
import { getValueFromVariable } from '../style-variable-resolution';

describe( 'editor utils', () => {
	const themeJson = {
		version: 1,
		settings: {
			color: {
				palette: {
					theme: [
						{
							slug: 'primary',
							color: '#007cba',
							name: 'Primary',
						},
						{
							slug: 'secondary',
							color: '#006ba1',
							name: 'Secondary',
						},
					],
					custom: [
						{
							slug: 'primary',
							color: '#007cba',
							name: 'Primary',
						},
						{
							slug: 'secondary',
							color: '#a65555',
							name: 'Secondary',
						},
					],
				},
				custom: true,
				customDuotone: true,
				customGradient: true,
				link: true,
			},
			custom: {
				color: {
					primary: 'var(--wp--preset--color--primary)',
					secondary: 'var(--wp--preset--color--secondary)',
				},
			},
		},
		isGlobalStylesUserThemeJSON: true,
	};

	describe( 'getValueFromVariable', () => {
		describe( 'when provided an invalid variable', () => {
			it( 'returns the originally provided value', () => {
				const actual = getValueFromVariable(
					themeJson,
					'root',
					undefined
				);

				expect( actual ).toBe( undefined );
			} );
		} );

		describe( 'when provided a preset variable', () => {
			it( 'retrieves the correct preset value', () => {
				const actual = getValueFromVariable(
					themeJson,
					'root',
					'var:preset|color|primary'
				);

				expect( actual ).toBe( '#007cba' );
			} );
		} );

		describe( 'when provided a custom variable', () => {
			it( 'retrieves the correct custom value', () => {
				const actual = getValueFromVariable(
					themeJson,
					'root',
					'var(--wp--custom--color--secondary)'
				);

				expect( actual ).toBe( '#a65555' );
			} );
		} );

		describe( 'when provided a dynamic reference', () => {
			it( 'retrieves the referenced value', () => {
				const stylesWithRefs = {
					...themeJson,
					styles: {
						color: {
							background: {
								ref: 'styles.color.text',
							},
							text: 'purple-rain',
						},
					},
				};
				const actual = getValueFromVariable( stylesWithRefs, 'root', {
					ref: 'styles.color.text',
				} );

				expect( actual ).toBe( stylesWithRefs.styles.color.text );
			} );

			it( 'returns the originally provided value where value is dynamic reference and reference does not exist', () => {
				const stylesWithRefs = {
					...themeJson,
					styles: {
						color: {
							text: {
								ref: 'styles.background.text',
							},
						},
					},
				};
				const actual = getValueFromVariable( stylesWithRefs, 'root', {
					ref: 'styles.color.text',
				} );

				expect( actual ).toBe( stylesWithRefs.styles.color.text );
			} );

			it( 'returns the originally provided value where value is dynamic reference', () => {
				const stylesWithRefs = {
					...themeJson,
					styles: {
						color: {
							background: {
								ref: 'styles.color.text',
							},
							text: {
								ref: 'styles.background.text',
							},
						},
					},
				};
				const actual = getValueFromVariable( stylesWithRefs, 'root', {
					ref: 'styles.color.text',
				} );

				expect( actual ).toBe( stylesWithRefs.styles.color.text );
			} );
		} );
	} );
} );
