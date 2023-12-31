import { customElement } from 'lit/decorators.js';
import TableRow from './TableRow';

@customElement('t-footer-row')
export default class TableFooterRow extends TableRow {
	connectedCallback(): void {
		// eslint-disable-next-line wc/guard-super-call
		super.connectedCallback();
		this.setAttribute('slot', 'footer');
	}
}

declare global {
	interface HTMLElementTagNameMap {
		't-footer-row': TableFooterRow;
	}
}
