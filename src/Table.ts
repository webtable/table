import customElement from './customElement';
import ContainerWithSlot from './ContainerWithSlot';
import properties from './style/Table.props.scss';
import variants from './style/Table.variants.scss';
import style from './style/Table.scss';

export const TAG_NAME = 'wt-table';

@customElement(TAG_NAME)
export default class Table extends ContainerWithSlot {
	protected static readonly styles = [super.styles, properties, variants, style];

	protected static readonly containerTagName = 'table';
}

declare global {
	interface HTMLElementTagNameMap {
		[TAG_NAME]: Table;
	}
}
