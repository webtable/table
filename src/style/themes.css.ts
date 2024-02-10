import { css } from 'lit';

/**
 * Light (default) theme.
 */
export const light = css`
	:host {
		color-scheme: light;

		--wt-bg-color: hsl(0, 0%, 100%); /* --sl-color-neutral-0 */
		--wt-border-color: hsl(240 5.9% 90%); /* --sl-color-neutral-200 */
		--wt-color: hsl(240 5.9% 10%); /* --sl-color-neutral-900 */
		--wt-caption-color: hsl(240 3.8% 46.1%); /* --sl-color-neutral-600 */
		--wt-emphasis-color-rbg: 0, 0, 0; /* Black */
	}
`;

/**
 * Dark theme. This theme can be enabled by adding the attribute theme="dark" to the <t-table> element.
 */
export const dark = css`
	:host {
		--wt-dark-bg-color: hsl(240 5.7% 18.2%); /* --sl-color-neutral-100 */
		--wt-dark-border-color: hsl(240 5% 35.5%); /* --sl-color-neutral-400 */
		--wt-dark-color: hsl(240 9.1% 91.8%); /* --sl-color-neutral-900 */
		--wt-dark-caption-color: hsl(240 5.3% 58%); /* --sl-color-neutral-600 */
		--wt-dark-emphasis-color-rbg: 255, 255, 255; /* White */
	}

	:host([theme="dark"]) {
		color-scheme: dark;

		--wt-bg-color: var(--wt-dark-bg-color);
		--wt-border-color: var(--wt-dark-border-color);
		--wt-color: var(--wt-dark-color);
		--wt-caption-color: var(--wt-dark-caption-color);
		--wt-emphasis-color-rbg: var(--wt-dark-emphasis-color-rbg);
	}
`;

export default [light, dark];
