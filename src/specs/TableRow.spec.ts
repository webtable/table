import { expect, fixture, html } from '@open-wc/testing';
import '../TableRow';

describe('TableRow', () => {
	context('render', () => {
		it('renders correctly', async () => {
			const row = await fixture(html`<wt-row></wt-row>`);
			const tr = row.shadowRoot?.firstElementChild;
			const slot = tr?.firstElementChild;

			expect(tr).to.be.instanceOf(HTMLTableRowElement);
			expect(tr).to.have.attribute('part', 'row');
			expect(slot).to.be.instanceOf(HTMLSlotElement);
			expect(slot).to.not.have.attribute('name');
		});

		it('uses "display: contents;"', async () => {
			const row = await fixture(html`<wt-row></wt-row>`);

			expect(row).to.have.style('display', 'contents');
		});
	});
});
