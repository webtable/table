import { expect, fixture, html } from '@open-wc/testing';
import '../Table';

describe('Table', () => {
	context('render', () => {
		it('renders correctly', async () => {
			const el = await fixture(html`<wt-table></wt-table>`);
			const table = el.shadowRoot?.firstElementChild;
			const caption = table?.firstElementChild;
			const captionSlot = caption?.firstElementChild;
			const thead = caption?.nextElementSibling;
			const headerSlot = thead?.firstElementChild;
			const tbody = thead?.nextElementSibling;
			const slot = tbody?.firstElementChild;
			const tfoot = tbody?.nextElementSibling;
			const footerSlot = tfoot?.firstElementChild;

			expect(table).to.be.instanceOf(HTMLTableElement);

			expect(caption).to.be.instanceOf(HTMLTableCaptionElement);
			expect(captionSlot).to.be.instanceOf(HTMLSlotElement);
			expect(captionSlot).to.have.attribute('name', 'caption');

			expect(thead).to.be.instanceOf(HTMLTableSectionElement);
			expect(thead?.tagName.toLocaleLowerCase()).to.equal('thead');
			expect(headerSlot).to.be.instanceOf(HTMLSlotElement);
			expect(headerSlot).to.have.attribute('name', 'header');

			expect(tbody).to.be.instanceOf(HTMLTableSectionElement);
			expect(tbody?.tagName.toLocaleLowerCase()).to.equal('tbody');
			expect(slot).to.be.instanceOf(HTMLSlotElement);
			expect(slot).to.not.have.attribute('name');

			expect(tfoot).to.be.instanceOf(HTMLTableSectionElement);
			expect(tfoot?.tagName.toLocaleLowerCase()).to.equal('tfoot');
			expect(footerSlot).to.be.instanceOf(HTMLSlotElement);
			expect(footerSlot).to.have.attribute('name', 'footer');
		});
	});
});
