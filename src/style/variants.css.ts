import { css } from 'lit';

/**
 * Bordered variant: Adds borders to all cells in the table.
 */
export const bordered = css`
	:host {
		--wt-bordered-border-width: 1px;
	}

	:host([bordered]) {
		--wt-border-width: var(--wt-bordered-border-width);
		--wt-cell-border-right-width: var(--wt-bordered-border-width);
	}
`;

/**
 * Borderless variant: Removes all borders from the table.
 */
export const borderless = css`
	:host {
		--wt-borderless-border-width: 0;
		--wt-borderless-cell-border-width: 0;
	}

	:host([borderless]) {
		--wt-border-width: var(--wt-borderless-border-width);
		--wt-cell-border-bottom-width: var(--wt-borderless-cell-border-width);
		--wt-cell-border-right-width: var(--wt-borderless-cell-border-width);
	}
`;

/**
 * Comptact variant: Reduces the top and bottom padding of all the cells in the table.
 */
export const compact = css`
	:host {
		--wt-compact-cell-padding-x: .25rem;
		--wt-compact-cell-padding-y: .25rem;
	}

	:host([compact]) {
		--wt-cell-padding-x: var(--wt-compact-cell-padding-x);
		--wt-cell-padding-y: var(--wt-compact-cell-padding-y);
	}
`;

/**
 * Hover variant: Adds a background color to the tbody rows when the mouse hovers over them.
 */
export const hover = css`
	:host {
		--wt-hover-bg-factor: .075;
		--wt-hover-bg: rgba(var(--wt-emphasis-color-rbg), var(--wt-hover-bg-factor));
	}

	:host([hover]) > table > tbody > ::slotted(*:hover) {
		--wt-bg-state: var(--wt-hover-bg);
		--wt-color-state: var(--wt-hover-color);
	}
`;

/**
 * Striped variant: Adds a background color to even "slotted" rows in the table.
 */
export const striped = css`
	:host {
		--wt-striped-bg-factor: .05;
		--wt-striped-bg: rgba(var(--wt-emphasis-color-rbg), var(--wt-striped-bg-factor));
	}

	:host([striped]) > table > tbody > ::slotted(*:nth-child(even)) {
		--wt-bg-type: var(--wt-striped-bg);
		--wt-color-type: var(--wt-striped-color);
	}
`;

/**
 * Striped columns variant: Adds a background color to even "slotted" columns in the table.
 */
export const stripedColumns = css`
	:host {
		--wt-striped-columns-bg-factor: .05;
		--wt-striped-columns-bg: rgba(var(--wt-emphasis-color-rbg), var(--wt-striped-columns-bg-factor));
	}

	:host([striped-columns]) > table > :not(caption) > ::slotted(*) {
		--wt-bg-striped-columns: var(--wt-striped-columns-bg);
		--wt-color-striped-columns: var(--wt-striped-columns-color);
	}
`;

export default [bordered, borderless, compact, hover, striped, stripedColumns];
