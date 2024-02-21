import customElement from './customElement';
import ContainerWithSlot from './ContainerWithSlot';
import style from './style/sections.scss';

export const TAG_NAME = 'wt-foot';

@customElement(TAG_NAME)
export default class Foot extends ContainerWithSlot {
	protected static readonly styles = [super.styles, style];

	protected static readonly containerTagName = 'tfoot';
}

declare global {
	interface HTMLElementTagNameMap {
		[TAG_NAME]: Foot;
	}
}
