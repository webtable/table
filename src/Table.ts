import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import reboot from './style/reboot.scss';
import properties from './style/Table.props.scss';
import variants from './style/Table.variants.scss';
import style from './style/Table.scss';

@customElement('wt-table')
export default class Table extends LitElement {
	static readonly styles = [reboot, properties, variants, style];

	render() {
		return html`
			<table part="table">
				<caption part="caption"><slot name="caption"></slot></caption>
				<thead part="header"></thead>
				<tbody part="body"></tbody>
				<tfoot part="footer"></tfoot>
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

		headSlot.name = 'header';
		footSlot.name = 'footer';

		thead?.appendChild(headSlot);
		tbody?.appendChild(bodySlot);
		tfoot?.appendChild(footSlot);
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'wt-table': Table;
	}
}
