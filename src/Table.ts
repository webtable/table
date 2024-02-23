import ContainerWithSlot from './core/ContainerWithSlot';
import properties from './style/Table.props.scss';
import variants from './style/Table.variants.scss';
import style from './style/Table.scss';

export default class Table extends ContainerWithSlot {
	protected static readonly styles = [super.styles, properties, variants, style];

	protected static readonly containerPartName = 'table';

	protected static readonly containerTagName = 'table';
}

Table.register('wt-table');

declare global {
	interface HTMLElementTagNameMap {
		'wt-table': Table;
	}
}
