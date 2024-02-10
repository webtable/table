import { css } from 'lit';

export default css`
	:host {
		display: contents;
	}

	tr {
		border-color: var(--wt-border-color);
		border-width: var(--wt-border-width) 0;

		::slotted(:nth-child(even)) {
			--wt-bg-column: var(--wt-bg-striped-columns);
			--wt-color-column: var(--wt-color-striped-columns);
		}
	}
`;
