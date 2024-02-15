import { expect, fixture, html } from '@open-wc/testing';
import '../TableHeaderCell';

describe('TableHeaderCell', () => {
	context('render', () => {
		it('renders correctly', async () => {
			const cell = await fixture(html`<wt-header-cell></wt-header-cell>`);
			const th = cell.shadowRoot?.firstElementChild;
			const slot = th?.firstElementChild;

			expect(th).to.be.instanceOf(HTMLTableCellElement);
			expect(th?.tagName.toLocaleLowerCase()).to.equal('th');
			expect(th).to.have.attribute('part', 'cell');
			expect(th).to.not.have.attribute('colspan');
			expect(slot).to.be.instanceOf(HTMLSlotElement);
			expect(slot).to.not.have.attribute('name');
		});

		it('supports colspan', async () => {
			const colspan = '10';
			const cell = await fixture(html`<wt-header-cell colspan="${ colspan }"></wt-header-cell>`);
			const th = cell.shadowRoot?.firstElementChild;

			expect(th).to.have.attribute('colspan', colspan);
		});

		it('uses "display: contents;"', async () => {
			const cell = await fixture(html`<wt-header-cell></wt-header-cell>`);

			expect(cell).to.have.style('display', 'contents');
		});
	});
});
