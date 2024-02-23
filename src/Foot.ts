import ContainerWithSlot from './core/ContainerWithSlot';
import style from './style/sections.scss';

export default class Foot extends ContainerWithSlot {
	protected static readonly styles = [super.styles, style];

	protected static readonly containerPartName = 'foot';

	protected static readonly containerTagName = 'tfoot';
}

Foot.register('wt-foot');

declare global {
	interface HTMLElementTagNameMap {
		'wt-foot': Foot;
	}
}
