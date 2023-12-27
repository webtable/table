import { css } from 'lit';

/**
 * Bordered variant: Adds borders to all cells in the table.
 */
export const bordered = css`
	:host {
		--t-bordered-border-width: 1px;
		--t-bordered-cell-border-bottom-width: 0;
	}

	:host([bordered]) {
		--t-border-width: var(--t-bordered-border-width);
		--t-cell-border-bottom-width: var(--t-bordered-cell-border-bottom-width);
	}
`;

/**
 * Borderless variant: Removes all borders from the table.
 */
export const borderless = css`
	:host {
		--t-borderless-border-width: 0;
		--t-borderless-cell-border-bottom-width: 0;
	}

	:host([borderless]) {
		--t-border-width: var(--t-borderless-border-width);
		--t-cell-border-bottom-width: var(--t-borderless-cell-border-bottom-width);
	}
`;

/**
 * Comptact variant: Reduces the top and bottom padding of all the cells in the table.
 */
export const compact = css`
	:host {
		--t-compact-cell-padding-x: .25rem;
		--t-compact-cell-padding-y: .25rem;
	}

	:host([compact]) {
		--t-cell-padding-x: var(--t-compact-cell-padding-x);
		--t-cell-padding-y: var(--t-compact-cell-padding-y);
	}
`;

/**
 * Hover variant: Adds a background color to the tbody rows when the mouse hovers over them.
 */
export const hover = css`
	:host {
		--t-hover-bg-factor: .075;
		--t-hover-bg: rgba(var(--t-emphasis-color-rbg), var(--t-hover-bg-factor));
	}

	:host([hover]) > table > tbody > ::slotted(*:hover) {
		--t-bg-state: var(--t-hover-bg);
		--t-color-state: var(--t-hover-color);
	}
`;

/**
 * Striped variant: Adds a background color to even "slotted" rows in the table.
 */
export const striped = css`
	:host {
		--t-striped-bg-factor: .05;
		--t-striped-bg: rgba(var(--t-emphasis-color-rbg), var(--t-striped-bg-factor));
	}

	:host([striped]) > table > tbody > ::slotted(*:nth-child(even)) {
		--t-bg-type: var(--t-striped-bg);
		--t-color-type: var(--t-striped-color);
	}
`;

/**
 * Striped columns variant: Adds a background color to even "slotted" columns in the table.
 */
export const stripedColumns = css`
	:host {
		--t-striped-columns-bg-factor: .05;
		--t-striped-columns-bg: rgba(var(--t-emphasis-color-rbg), var(--t-striped-columns-bg-factor));
	}

	:host([striped-columns]) > table > :not(caption) > ::slotted(*) {
		--t-bg-striped-columns: var(--t-striped-columns-bg);
		--t-color-striped-columns: var(--t-striped-columns-color);
	}
`;

export default [bordered, borderless, compact, hover, striped, stripedColumns];
