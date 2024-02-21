import customElement from './core/customElement';
import ContainerWithSlot from './core/ContainerWithSlot';
import style from './style/sections.scss';

export const TAG_NAME = 'wt-body';

@customElement(TAG_NAME)
export default class Body extends ContainerWithSlot {
	protected static readonly styles = [super.styles, style];

	protected static readonly containerPartName = 'body';

	protected static readonly containerTagName = 'tbody';
}

declare global {
	interface HTMLElementTagNameMap {
		[TAG_NAME]: Body;
	}
}
