import customElement from './core/customElement';
import ContainerWithSlot from './core/ContainerWithSlot';
import style from './style/Row.scss';

export const TAG_NAME = 'wt-row';

@customElement(TAG_NAME)
export default class TableRow extends ContainerWithSlot {
	protected static readonly styles = [super.styles, style];

	protected static readonly containerPartName = 'row';

	protected static readonly containerTagName = 'tr';
}

declare global {
	interface HTMLElementTagNameMap {
		[TAG_NAME]: TableRow;
	}
}
