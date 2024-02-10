import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import TableCell from './TableCell';

@customElement('wt-header-cell')
export default class TableHeaderCell extends TableCell {
	render() {
		return html`<th part="cell" colspan="${ ifDefined(this.colspan) }"><slot></slot></th>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'wt-header-cell': TableHeaderCell;
	}
}
