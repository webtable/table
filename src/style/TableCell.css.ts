import { css } from 'lit';

export default css`
	:host {
		display: contents;
	}

	td, th {
		padding: var(--wt-cell-padding-y) var(--wt-cell-padding-x);
		border-color: var(--wt-border-color);
		border-width: 0 var(--wt-border-width) var(--wt-cell-border-bottom-width) var(--wt-border-width);

		background-color: var(--wt-bg-color);
		box-shadow: inset 0 0 0 9999px var(--wt-bg-state, var(--wt-bg-type, var(--wt-bg-column)));
		color: var(--wt-color-state, var(--wt-color-type, var(--wt-color-column)));
	}
`;
