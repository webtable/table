import { customElement } from 'lit/decorators.js';
import TableRow from './TableRow';

@customElement('wt-header-row')
export default class TableHeaderRow extends TableRow {
	connectedCallback(): void {
		super.connectedCallback();
		this.setAttribute('slot', 'header');
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'wt-header-row': TableHeaderRow;
	}
}
