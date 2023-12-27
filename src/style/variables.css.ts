import { css } from 'lit';

export default css`
	:host {
		--t-able-width: 100%;
		--t-border-style: solid;
		--t-border-width: 0;
		--t-cell-border-bottom-width: 1px;
		--t-cell-padding-x: .5rem;
		--t-cell-padding-y: .5rem;
		--t-divider: calc(var(--t-border-width) * 2) solid currentcolor;
		--t-spacer: 1rem;
		--t-vertical-align: top;

		--t-color-column: var(--t-color);
		--t-color-type: initial;
		--t-color-state: initial;
		--t-color-striped-columns: var(--t-color-column);

		--t-active-color: var(--t-color);
		--t-hover-color: var(--t-color);
		--t-striped-color: var(--t-color);

		--t-bg-column: transparent;
		--t-bg-type: initial;
		--t-bg-state: initial;
		--t-bg-striped-columns: var(--t-bg-column);
	}
`;
