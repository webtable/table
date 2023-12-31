import { customElement, property } from 'lit/decorators.js';
import TableRow from './TableRow';

@customElement('t-footer-row')
export default class TableFooterRow extends TableRow {
	@property({ reflect: true })
	slot = 'footer';
}

declare global {
	interface HTMLElementTagNameMap {
		't-footer-row': TableFooterRow;
	}
}
