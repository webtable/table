import { css } from 'lit';

export default css`
	:host {
		display: contents;
	}

	tr {
		border-color: var(--t-border-color);
		border-width: var(--t-border-width) 0;

		::slotted(:nth-child(even)) {
			--t-bg-column: var(--t-bg-striped-columns);
			--t-color-column: var(--t-color-striped-columns);
		}
	}
`;
