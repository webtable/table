import customElement from './customElement';
import ContainerWithSlot from './ContainerWithSlot';
import style from './style/TableCell.scss';

export const TAG_NAME = 'wt-cell';

@customElement(TAG_NAME)
export default class TableCell extends ContainerWithSlot {
	protected static readonly styles = [super.styles, style];

	protected static readonly containerTagName: keyof HTMLElementTagNameMap = 'td';
}

declare global {
	interface HTMLElementTagNameMap {
		[TAG_NAME]: TableCell;
	}
}
