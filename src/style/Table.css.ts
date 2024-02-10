import { css } from 'lit';

export default css`
	table {
		width: var(--wt-table-width);
		border: var(--wt-border-width) var(--wt-border-style) var(--wt-border-color);
		border-collapse: var(--wt-border-collapse);
		border-spacing: var(--wt-border-spacing);
		
		&, & > tbody {
			vertical-align: var(--wt-vertical-align);
		}

		& > thead {
			vertical-align: bottom;
		}

		:host([sticky-header]) > & > thead {
			top: 0;
			position: sticky;
		}

		:host([dividers]) > & > tbody {
			border-top: var(--wt-divider);
			border-bottom: var(--wt-divider);
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
