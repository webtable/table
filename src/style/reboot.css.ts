import { css } from 'lit';

export default css`
	:host {
		box-sizing: border-box;
	}

	:host *,
	:host *::before,
	:host *::after {
		box-sizing: inherit;
	}

	table {
		caption-side: bottom;
		border-collapse: collapse;
	}

	caption {
		color: var(--t-caption-color);
		text-align: left;
	}

	th {
		text-align: inherit;
		text-align: -webkit-match-parent;
	}

	thead,
	tbody,
	tfoot,
	tr,
	td,
	th {
		border-color: inherit;
		border-style: solid;
		border-width: 0;
	}

	[hidden] {
		display: none !important;
	}
`;
