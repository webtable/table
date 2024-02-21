import customElement from './core/customElement';
import ContainerWithSlot from './core/ContainerWithSlot';
import style from './style/sections.scss';

export const TAG_NAME = 'wt-caption';

@customElement(TAG_NAME)
export default class Caption extends ContainerWithSlot {
	protected static readonly styles = [super.styles, style];

	protected static readonly containerTagName = 'caption';
}

declare global {
	interface HTMLElementTagNameMap {
		[TAG_NAME]: Caption;
	}
}
