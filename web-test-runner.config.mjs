import { esbuildPlugin } from './web-dev-server.config.mjs';

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

export default {
	concurrentBrowsers: 5,
	concurrency: 1,
	files: ['src/specs/**/*.spec.ts'],
	filterBrowserLogs,
	nodeResolve: true,
	plugins: [
		esbuildPlugin,
	],
	port: 8081,
};
