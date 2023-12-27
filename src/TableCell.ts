import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import reboot from './style/reboot.css';
import style from './style/TableCell.css';

@customElement('t-cell')
export default class TableCell extends LitElement {
	static readonly styles = [reboot, style];

	render() {
		return html`<td><slot></slot></td>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		't-cell': TableCell;
	}
}
