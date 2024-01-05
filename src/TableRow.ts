import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import reboot from './style/reboot.css';
import style from './style/TableRow.css';
import activeVariant from './style/activeVariant.css';

@customElement('t-row')
export default class TableRow extends LitElement {
	static readonly styles = [reboot, style, activeVariant];

	render() {
		return html`<tr part="row"></tr>`;
	}

	firstUpdated() {
		const tr = this.renderRoot.firstElementChild as HTMLTableRowElement;
		const start = document.createElement('slot');
		const slot = document.createElement('slot');
		const end = document.createElement('slot');

		start.name = 'start';
		end.name = 'end';

		tr.append(start, slot, end);
	}
}

declare global {
	interface HTMLElementTagNameMap {
		't-row': TableRow;
	}
}
