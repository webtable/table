import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import reboot from './style/reboot.css';
import variables from './style/variables.css';
import style from './style/Table.css';
import themes from './style/themes.css';
import variants from './style/variants.css';

@customElement('t-table')
export default class Table extends LitElement {
	static readonly styles = [reboot, variables, style, ...themes, ...variants];

	render() {
		return html`
			<table>
				<caption><slot name="caption"></slot></caption>
				<thead></thead>
				<tbody></tbody>
				<tfoot></tfoot>
			</table>
		`;
	}

	firstUpdated() {
		const thead = this.renderRoot?.querySelector('thead');
		const tbody = this.renderRoot?.querySelector('tbody');
		const tfoot = this.renderRoot?.querySelector('tfoot');
		const headSlot = document.createElement('slot');
		const bodySlot = document.createElement('slot');
		const footSlot = document.createElement('slot');

		headSlot.name = 'head';
		footSlot.name = 'foot';

		thead?.appendChild(headSlot);
		tbody?.appendChild(bodySlot);
		tfoot?.appendChild(footSlot);
	}
}

declare global {
	interface HTMLElementTagNameMap {
		't-table': Table;
	}
}
