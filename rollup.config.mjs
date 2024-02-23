import { compileString } from 'sass';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import { cssModule } from './web-dev-server.config.mjs';

const version = process.env.npm_package_version;

function scssCodeToESModule(code) {
	const result = compileString(code, { style: 'compressed' });

	return cssModule(result.css);
}

const scssPlugin = {
	name: 'scss-plugin',
	transform(code, id) {
		return !/\.scss$/i.test(id) ? undefined : scssCodeToESModule(code);
	}
}

export default {
	input: 'src/index.ts',
	output: [
		{
			file: `wt-table-${ version }.js`,
			format: 'es',
		},
		{
			file: `wt-table-${ version }.min.js`,
			format: 'es',
			plugins: [terser()],
		},
	],
	plugins: [
		scssPlugin,
		typescript(),
	],
}
