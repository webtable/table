import customElement from './customElement';
import TableCell from './TableCell';

export const TAG_NAME = 'wt-header-cell';

@customElement(TAG_NAME)
export default class TableHeaderCell extends TableCell {
	protected static readonly containerTagName = 'th';
}

declare global {
	interface HTMLElementTagNameMap {
		[TAG_NAME]: TableHeaderCell;
	}
}
