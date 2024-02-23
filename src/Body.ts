import ContainerWithSlot from './core/ContainerWithSlot';
import style from './style/sections.scss';

export default class Body extends ContainerWithSlot {
	protected static readonly styles = [super.styles, style];

	protected static readonly containerPartName = 'body';

	protected static readonly containerTagName = 'tbody';
}

Body.register('wt-body');

declare global {
	interface HTMLElementTagNameMap {
		'wt-body': Body;
	}
}
