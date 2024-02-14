import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import reboot from './style/reboot.css';
import style from './style/TableRow.css';
import activeVariant from './style/activeVariant.css';

@customElement('wt-row')
export default class TableRow extends LitElement {
	static readonly styles = [reboot, style, activeVariant];

	render() {
		return html`<tr part="row"></tr>`;
	}

	firstUpdated() {
		const tr = this.renderRoot.firstElementChild as HTMLTableRowElement;
		const slot = document.createElement('slot');

		tr.append(slot);
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'wt-row': TableRow;
	}
}
