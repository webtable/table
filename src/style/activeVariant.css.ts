import { css } from 'lit';

/**
 * Active variant: Adds a background color to rows or cells that have the "active" attribute.
 */
export default css`
	:host {
		--wt-active-bg-factor: .1;
		--wt-active-bg: rgba(var(--wt-emphasis-color-rbg), var(--wt-active-bg-factor));
	}

	:host([active]), ::slotted([active]) {
		--wt-bg-state: var(--wt-active-bg);
		--wt-color-state: var(--wt-active-color);
	}
`;
