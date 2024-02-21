import customElement from './core/customElement';
import ContainerWithSlot from './core/ContainerWithSlot';
import style from './style/Cell.scss';

export const TAG_NAME = 'wt-cell';

@customElement(TAG_NAME)
export default class TableCell extends ContainerWithSlot {
	protected static readonly styles = [super.styles, style];

	protected static readonly containerPartName = 'cell';

	protected static readonly containerTagName: keyof HTMLElementTagNameMap = 'td';

	protected static readonly reflect = ['colspan'];
}

declare global {
	interface HTMLElementTagNameMap {
		[TAG_NAME]: TableCell;
	}
}
