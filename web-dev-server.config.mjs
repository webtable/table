import { compile } from 'sass';
import { fileURLToPath } from 'url';
import { esbuildPlugin as esbuild } from '@web/dev-server-esbuild';

export function fullPath(relativePath) {
	const fileURL = new URL(relativePath, import.meta.url);
	return fileURLToPath(fileURL);
}

export function cssModule(css) {
	return `
export const css = \`${ css }\`;
const style = new CSSStyleSheet();
style.replaceSync(css);
export default style;
	`.trim();
}

export function scssFileToESModule(relativePath) {
	const scssFile = fullPath(relativePath.replace(/^\/?/, './'));
	const result = compile(scssFile, { style: 'compressed' });

	return cssModule(result.css);
}

export const mimeTypes = {
	'**/*.scss': 'js',
};

export const cssPlugin = {
	name: 'css-esm',
	transform(context) {
		const { url } = context;
		return !/\.scss/i.test(url) ? undefined : scssFileToESModule(url);
	}
};

export const esbuildPlugin = esbuild({
	ts: true,
	target: 'es2022',
	tsconfig: fullPath('./tsconfig.json'),
});

export default {
	appIndex: 'index.html',
	mimeTypes,
	nodeResolve: true,
	open: '/',
	plugins: [
		cssPlugin,
		esbuildPlugin,
	],
	port: 8080,
	watch: true,
};
