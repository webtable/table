import { html } from 'lit';
import { customElement } from 'lit/decorators.js';

import TableCell from './TableCell';

@customElement('t-header-cell')
export default class TableHeaderCell extends TableCell {
	render() {
		return html`<th><slot></slot></th>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		't-header-cell': TableHeaderCell;
	}
}
