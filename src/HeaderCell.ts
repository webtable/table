import customElement from './core/customElement';
import TableCell from './Cell';

export const TAG_NAME = 'wt-header-cell';

@customElement(TAG_NAME)
export default class TableHeaderCell extends TableCell {
	protected static readonly containerTagName = 'th';

	protected static readonly reflect = [...super.reflect, 'abbr', 'scope'];
}

declare global {
	interface HTMLElementTagNameMap {
		[TAG_NAME]: TableHeaderCell;
	}
}
