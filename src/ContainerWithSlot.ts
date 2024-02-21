import WebTableElement from './WebTableElement';
import displayContents from './style/displayContents.scss';

/**
 * This class can be extended to define a custom element that has a single "container" element in its shadow DOM and
 * and such container has a `<slot>` element as its only child.
 */
export default abstract class ContainerWithSlot extends WebTableElement {
	// Add a "display: contents" rule to the host element.
	protected static readonly styles = [super.styles, displayContents];

	/**
	 * The part name of the container. This part name can be used from outside the element's shadow DOM to target the
	 * container element in CSS.
	 */
	protected static readonly containerPartName = 'container';

	/**
	 * The HTML tag name of the container element.
	 */
	protected static readonly containerTagName: keyof HTMLElementTagNameMap;

	/**
	 * Creates the `container` element, adds a `<slot>` to it, and adds the container to the element's shadow DOM.
	 */
	connectedCallback() {
		const ctor = this.constructor as typeof ContainerWithSlot;
		const container = document.createElement(ctor.containerTagName);

		container.setAttribute('part', ctor.containerPartName);
		container.appendChild(document.createElement('slot'));
		this.shadowRoot?.appendChild(container);
	}
}
