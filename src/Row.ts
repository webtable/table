import ContainerWithSlot from './core/ContainerWithSlot';
import style from './style/Row.scss';

export default class TableRow extends ContainerWithSlot {
	protected static readonly styles = [super.styles, style];

	protected static readonly containerPartName = 'row';

	protected static readonly containerTagName = 'tr';
}

TableRow.register('wt-row');

declare global {
	interface HTMLElementTagNameMap {
		'wt-row': TableRow;
	}
}
