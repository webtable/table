import { html, LitElement } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { customElement, property } from 'lit/decorators.js';

import reboot from './style/reboot.css';
import style from './style/TableCell.css';

@customElement('wt-cell')
export default class TableCell extends LitElement {
	static readonly styles = [reboot, style];

	@property({ type: Number })
	accessor colspan: number | undefined = undefined;

	render() {
		return html`<td part="cell" colspan="${ ifDefined(this.colspan) }"><slot></slot></td>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'wt-cell': TableCell;
	}
}
