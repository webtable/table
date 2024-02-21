import { compile } from 'sass';
import { fileURLToPath } from 'url';
import { esbuildPlugin as esbuild } from '@web/dev-server-esbuild';

function fullPath(relativePath) {
	const fileURL = new URL(relativePath, import.meta.url);
	return fileURLToPath(fileURL);
}

function cssToESModule(css) {
	return `
export const css = \`${ css }\`;
const style = new CSSStyleSheet();
style.replaceSync(css);
export default style;
	`.trim();
}

export const mimeTypes = {
	'**/*.scss': 'js',
};

export const cssPlugin = {
	name: 'css-esm',
	transform(context) {
		if (!/\.scss/i.test(context.url)) {
			return;
		}

		const relativePath = context.url.replace(/^\/?/, './');
		const result = compile(fullPath(relativePath), { style: 'compressed' });

		return cssToESModule(result.css);
	}
}

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
