/**
 * Declare the type of all SCSS files.
 */
declare module '*.scss' {
	import { CSSResultGroup } from 'lit';

	const style: CSSResultGroup;
	export default style;
}
