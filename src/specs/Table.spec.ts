import { expect, fixture, html } from '@open-wc/testing';
import '../Table';

describe('Table', () => {
	context('render', () => {
		it('renders correctly', async () => {
			const el = await fixture(html`<wt-table></wt-table>`);
			const table = el.shadowRoot?.firstElementChild;
			const slot = table?.firstElementChild;

			expect(table).to.be.instanceOf(HTMLTableElement);
			expect(table).to.have.attribute('part', 'table');

			expect(slot).to.be.instanceOf(HTMLSlotElement);
			expect(slot).to.not.have.attribute('name');
		});
	});
});
