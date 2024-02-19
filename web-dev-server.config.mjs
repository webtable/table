import { fileURLToPath, pathToFileURL } from 'url';
import { compileString } from 'sass';
import rollupLitCss from 'rollup-plugin-lit-css';
import { fromRollup } from '@web/dev-server-rollup';
import { esbuildPlugin as esbuild } from '@web/dev-server-esbuild';

export const mimeTypes = {
	'**/*.scss': 'js',
};

const litCss = fromRollup(rollupLitCss);

export const litCssPlugin = litCss({
	include: 'src/**/*.scss',
	transform: (source, { filePath }) => {
		const url = pathToFileURL(filePath);
		const result = compileString(source, { url, style: 'compressed'});

		return result.css;
	},
});

export const esbuildPlugin = esbuild({
	ts: true,
	target: 'es2022',
	tsconfig: fileURLToPath(new URL('./tsconfig.json', import.meta.url)),
});

export default {
	appIndex: 'index.html',
	mimeTypes,
	nodeResolve: true,
	open: '/',
	plugins: [
		litCssPlugin,
		esbuildPlugin,
	],
	port: 8080,
	watch: true,
};
