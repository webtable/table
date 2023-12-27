import { css } from 'lit';

/**
 * Light (default) theme.
 */
export const light = css`
	:host {
		color-scheme: light;

		--t-bg-color: hsl(0, 0%, 100%); /* --sl-color-neutral-0 */
		--t-border-color: hsl(240 5.9% 90%); /* --sl-color-neutral-200 */
		--t-color: hsl(240 5.9% 10%); /* --sl-color-neutral-900 */
		--t-caption-color: hsl(240 3.8% 46.1%); /* --sl-color-neutral-600 */
		--t-emphasis-color-rbg: 0, 0, 0; /* Black */
	}
`;

/**
 * Dark theme. This theme can be enabled by adding the attribute theme="dark" to the <t-able> element.
 */
export const dark = css`
	:host {
		--t-dark-bg-color: hsl(240 5.7% 18.2%); /* --sl-color-neutral-100 */
		--t-dark-border-color: hsl(240 5% 35.5%); /* --sl-color-neutral-400 */
		--t-dark-color: hsl(240 9.1% 91.8%); /* --sl-color-neutral-900 */
		--t-dark-caption-color: hsl(240 5.3% 58%); /* --sl-color-neutral-600 */
		--t-dark-emphasis-color-rbg: 255, 255, 255; /* White */
	}

	:host([theme="dark"]) {
		color-scheme: dark;

		--t-bg-color: var(--t-dark-bg-color);
		--t-border-color: var(--t-dark-border-color);
		--t-color: var(--t-dark-color);
		--t-caption-color: var(--t-dark-caption-color);
		--t-emphasis-color-rbg: var(--t-dark-emphasis-color-rbg);
	}
`;

export default [light, dark];
