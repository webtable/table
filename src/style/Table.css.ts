import { css } from 'lit';

export default css`
	table {
		width: var(--t-table-width);
		border: var(--t-border-width) var(--t-border-style) var(--t-border-color);
		border-collapse: var(--t-border-collapse);
		border-spacing: var(--t-border-spacing);
		
		&, & > tbody {
			vertical-align: var(--t-vertical-align);
		}

		& > thead {
			vertical-align: bottom;
		}

		:host([sticky-header]) > & > thead {
			top: 0;
			position: sticky;
		}

		:host([dividers]) > & > tbody {
			border-top: var(--t-divider);
			border-bottom: var(--t-divider);
		}

		:host([sticky-footer]) > & > tfoot {
			bottom: 0;
			position: sticky;
		}

		:host([caption="top"]) > & {
			caption-side: top;
		}
	}
`;
