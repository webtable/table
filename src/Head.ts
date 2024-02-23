import ContainerWithSlot from './core/ContainerWithSlot';
import style from './style/sections.scss';

export default class Head extends ContainerWithSlot {
	protected static readonly styles = [super.styles, style];

	protected static readonly containerPartName = 'head';

	protected static readonly containerTagName = 'thead';
}

Head.register('wt-head');

declare global {
	interface HTMLElementTagNameMap {
		'wt-head': Head;
	}
}
