/**
 * Convenience decorator function that uses the given class to define a custom element.
 */
export default function customElement(tagName: string) {
	return (elementClass: CustomElementConstructor) => customElements.define(tagName, elementClass);
}
