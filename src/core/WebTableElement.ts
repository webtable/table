import reboot from '../style/reboot.scss';

/**
 * Base class for defining custom elements.
 */
export default abstract class WebTableElement extends HTMLElement {
	/**
	 * Each custom element class definition can use this array to define its own CSS style sheets.
	 */
	protected static readonly styles: NonNullable<unknown>[] = [];

	protected static finalStyleSheets: CSSStyleSheet[];

	/**
	 * Finall style sheets getter. If `finalStyleSheets` hasn't been set, it calls `finalizeStyles` to set it.
	 */
	protected static get styleSheets() {
		this.finalStyleSheets ??= this.finalizeStyles();
		return this.finalStyleSheets;
	}

	/**
	 * Uses `styles` to generate the `finalStyleSheets` array.
	 *
	 * @returns A flatten array of `CSSStyleSheet` instances, with a reboot style sheet, and without duplicates or
	 *     invalid values.
	 */
	protected static finalizeStyles() {
		// Flatten the `styles` array and prepend it with a reboot CSS.
		const styles = [reboot, this.styles].flat(Infinity);
		// Remove duplicates and values that are not instances of `CSSStyleSheet`.
		return [...(new Set(styles))].filter(style => style instanceof CSSStyleSheet) as CSSStyleSheet[];
	}

	/**
	 * Attaches a shadow DOM and adopts the final style sheets.
	 */
	constructor() {
		super();
		const ctor = this.constructor as typeof WebTableElement;

		this.attachShadow({ mode: 'open' }).adoptedStyleSheets = ctor.styleSheets;
	}
}
