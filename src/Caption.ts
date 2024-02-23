import ContainerWithSlot from './core/ContainerWithSlot';
import style from './style/sections.scss';

export default class Caption extends ContainerWithSlot {
	protected static readonly styles = [super.styles, style];

	protected static readonly containerPartName = 'caption';

	protected static readonly containerTagName = 'caption';
}

Caption.register('wt-caption');

declare global {
	interface HTMLElementTagNameMap {
		'wt-caption': Caption;
	}
}
