import { fileURLToPath } from 'url';
import { esbuildPlugin as esbuild } from '@web/dev-server-esbuild';

export const esbuildPlugin = esbuild({
	ts: true,
	target: 'es2022',
	tsconfig: fileURLToPath(new URL('./tsconfig.json', import.meta.url)),
});

export default {
	appIndex: 'index.html',
	nodeResolve: true,
	open: '/',
	plugins: [
		esbuildPlugin,
	],
	port: 8080,
	watch: true,
};
