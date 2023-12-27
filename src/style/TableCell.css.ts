import { css } from 'lit';

export default css`
	:host {
		display: contents;
	}

	td, th {
		padding: var(--t-cell-padding-y) var(--t-cell-padding-x);
		border-color: var(--t-border-color);
		border-width: 0 var(--t-border-width) var(--t-cell-border-bottom-width) var(--t-border-width);

		background-color: var(--t-bg-color);
		box-shadow: inset 0 0 0 9999px var(--t-bg-state, var(--t-bg-type, var(--t-bg-column)));
		color: var(--t-color-state, var(--t-color-type, var(--t-color-column)));
	}
`;
