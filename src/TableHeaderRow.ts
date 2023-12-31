import { customElement, property } from 'lit/decorators.js';
import TableRow from './TableRow';

@customElement('t-header-row')
export default class TableHeaderRow extends TableRow {
	// eslint-disable-next-line lit/no-native-attributes
	@property({ reflect: true }) slot = 'header';
}

declare global {
	interface HTMLElementTagNameMap {
		't-header-row': TableHeaderRow;
	}
}
