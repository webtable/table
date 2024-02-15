import { expect, fixture, html } from '@open-wc/testing';
import '../TableHeaderRow';

describe('TableHeaderRow', () => {
	it('adds automatically adds a slot attribute', async () => {
		const row = await fixture(html`<wt-header-row></wt-header-row>`);

		expect(row).to.have.attribute('slot', 'header');
	});
});
