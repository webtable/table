import { fileURLToPath } from 'url';
import { esbuildPlugin as esbuild } from '@web/dev-server-esbuild';

const filteredLogs = ['Lit is in dev mode'];

/**
 * Filters out Lit dev mode logs.
 */
function filterBrowserLogs(log) {
	for (const arg of log.args) {
		if (typeof arg === 'string' && filteredLogs.some(l => arg.includes(l))) {
			return false;
		}
	}

	return true;
}

export const esbuildPlugin = esbuild({
	ts: true,
	target: 'es2022',
	tsconfig: fileURLToPath(new URL('./tsconfig.json', import.meta.url)),
});

export default {
	concurrentBrowsers: 5,
	concurrency: 1,
	port: 8081,
	nodeResolve: true,
	files: ['src/specs/**/*.spec.ts'],
	filterBrowserLogs,
	plugins: [
		esbuildPlugin,
	],
};
