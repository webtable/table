import { css } from 'lit';

/**
 * Active variant: Adds a background color to rows or cells that have the "active" attribute.
 */
export default css`
	:host {
		--t-active-bg-factor: .1;
		--t-active-bg: rgba(var(--t-emphasis-color-rbg), var(--t-active-bg-factor));
	}

	:host([active]), ::slotted([active]) {
		--t-bg-state: var(--t-active-bg);
		--t-color-state: var(--t-active-color);
	}
`;
