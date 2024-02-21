/**
 * Declares the type of all SCSS files.
 */
declare module '*.scss' {
	const css: string;
	const style: CSSStyleSheet;

	export {
		css,
		style as default,
	};
}
