import { css } from 'lit';

export default css`
	:host {
		--wt-border-collapse: separate;
		--wt-border-spacing: 0;
		--wt-border-style: solid;
		--wt-border-width: 0;
		--wt-cell-border-bottom-width: 1px;
		--wt-cell-padding-x: .5rem;
		--wt-cell-padding-y: .5rem;
		--wt-divider: calc(var(--wt-border-width) * 2) solid currentcolor;
		--wt-table-width: 100%;
		--wt-vertical-align: top;

		--wt-color-column: var(--wt-color);
		--wt-color-type: initial;
		--wt-color-state: initial;
		--wt-color-striped-columns: var(--wt-color-column);

		--wt-active-color: var(--wt-color);
		--wt-hover-color: var(--wt-color);
		--wt-striped-color: var(--wt-color);

		--wt-bg-column: transparent;
		--wt-bg-type: initial;
		--wt-bg-state: initial;
		--wt-bg-striped-columns: var(--wt-bg-column);
	}
`;
