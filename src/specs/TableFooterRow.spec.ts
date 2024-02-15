import { expect, fixture, html } from '@open-wc/testing';
import '../TableFooterRow';

describe('TableFooterRow', () => {
	it('adds automatically adds a slot attribute', async () => {
		const row = await fixture(html`<wt-footer-row></wt-footer-row>`);

		expect(row).to.have.attribute('slot', 'footer');
	});
});
