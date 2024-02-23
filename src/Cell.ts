import ContainerWithSlot from './core/ContainerWithSlot';
import style from './style/Cell.scss';

export default class TableCell extends ContainerWithSlot {
	protected static readonly styles = [super.styles, style];

	protected static readonly containerPartName = 'cell';

	protected static readonly containerTagName: keyof HTMLElementTagNameMap = 'td';

	protected static readonly reflect = ['colspan', 'headers', 'rowspan'];
}

TableCell.register('wt-cell');

declare global {
	interface HTMLElementTagNameMap {
		'wt-cell': TableCell;
	}
}
