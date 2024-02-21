import WebTableElement from './WebTableElement';
import displayContents from '../style/displayContents.scss';

/**
 * This class can be extended to define a custom element that has a single "container" element in its shadow DOM and
 * and such container has a `<slot>` element as its only child.
 */
export default abstract class ContainerWithSlot extends WebTableElement {
	// Add a "display: contents" rule to the host element.
	protected static readonly styles = [super.styles, displayContents];

	/**
	 * A list of attributes to reflect into the container element. When an attribute listed in the `reflect` array is
	 * changed in the host custom element, the same attribute will be changed on the container element.
	 */
	protected static readonly reflect: string[] = [];

	/**
	 * Returns a flatten and deduplicated version of the `reflect` array. The browser will observe these attribute and
	 * execute the `attributeChangeCallback` whenever they change.
	 */
	static get observedAttributes() {
		const attributes = new Set(this.reflect.flat(Infinity));
		return [...attributes];
	}

	/**
	 * The part name of the container. This part name can be used from outside the element's shadow DOM to target the
	 * container element in CSS.
	 */
	protected static readonly containerPartName = 'container';

	/**
	 * The HTML tag name of the container element.
	 */
	protected static readonly containerTagName: keyof HTMLElementTagNameMap;

	protected containerElement: Element;

	constructor() {
		super();
		this.containerElement = this.createContainer();
	}

	/**
	 * Creates the container element with a `<slot>` element as its only child.
	 */
	protected createContainer() {
		const { containerTagName: tagName, containerPartName: partName } = this.constructor as typeof ContainerWithSlot;
		const container = document.createElement(tagName) as Element;

		container.setAttribute('part', partName);
		container.appendChild(document.createElement('slot'));

		return container;
	}

	/**
	 * Adds the `containerElement` to the element's shawdow DOM.
	 */
	connectedCallback() {
		this.shadowRoot?.appendChild(this.containerElement as Node);
	}

	/**
	 * Whenever any of the attributes listed in the `reflect` array change, this callback will perform the same change
	 * on the container element.
	 */
	attributeChangedCallback(name: string, _oldValue: string, newValue: string) {
		const el = this.containerElement;

		if (newValue || newValue === '') {
			el.setAttribute(name, newValue);
		} else {
			el.removeAttribute(name);
		}
	}
}
