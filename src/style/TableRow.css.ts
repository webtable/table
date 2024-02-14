import { css } from 'lit';

export default css`
	:host {
		display: contents;
	}

	tr ::slotted(:nth-child(even)) {
		--wt-bg-column: var(--wt-bg-striped-columns);
		--wt-color-column: var(--wt-color-striped-columns);
	}
`;
