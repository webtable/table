import { expect, fixture, html } from '@open-wc/testing';
import '../Cell';

describe('TableCell', () => {
	context('render', () => {
		it('renders correctly', async () => {
			const cell = await fixture(html`<wt-cell></wt-cell>`);
			const td = cell.shadowRoot?.firstElementChild;
			const slot = td?.firstElementChild;

			expect(td).to.be.instanceOf(HTMLTableCellElement);
			expect(td?.tagName.toLocaleLowerCase()).to.equal('td');
			expect(td).to.have.attribute('part', 'cell');
			expect(td).to.not.have.attribute('colspan');
			expect(slot).to.be.instanceOf(HTMLSlotElement);
			expect(slot).to.not.have.attribute('name');
		});

		it('supports colspan', async () => {
			const colspan = '10';
			const cell = await fixture(html`<wt-cell colspan="${ colspan }"></wt-cell>`);
			const td = cell.shadowRoot?.firstElementChild;

			expect(td).to.have.attribute('colspan', colspan);
		});

		it('uses "display: contents;"', async () => {
			const cell = await fixture(html`<wt-cell></wt-cell>`);

			expect(cell).to.have.style('display', 'contents');
		});
	});
});
