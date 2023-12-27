import { customElement } from 'lit/decorators.js';
import TableRow from './TableRow';

@customElement('t-header-row')
export default class TableHeaderRow extends TableRow {
	connectedCallback(): void {
		// eslint-disable-next-line wc/guard-super-call
		super.connectedCallback();
		this.setAttribute('slot', 'head');
	}
}

declare global {
	interface HTMLElementTagNameMap {
		't-header-row': TableHeaderRow;
	}
}
