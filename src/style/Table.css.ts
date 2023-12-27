import { css } from 'lit';

export default css`
	table {
		width: var(--t-table-width);
		margin-bottom: var(--t-spacer);
		border: var(--t-border-width) var(--t-border-style) var(--t-border-color);
		
		&, & > tbody {
			vertical-align: var(--t-vertical-align);
		}

		& > thead {
			vertical-align: bottom;
		}

		:host([dividers]) > & > tbody {
			border-top: var(--t-divider);
			border-bottom: var(--t-divider);
		}

		:host([caption="top"]) > & {
			caption-side: top;
		}
	}
`;
