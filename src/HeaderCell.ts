import TableCell from './Cell';

export default class TableHeaderCell extends TableCell {
	protected static readonly containerTagName = 'th';

	protected static readonly reflect = [...super.reflect, 'abbr', 'scope'];
}

TableHeaderCell.register('wt-header-cell');

declare global {
	interface HTMLElementTagNameMap {
		'wt-header-cell': TableHeaderCell;
	}
}
