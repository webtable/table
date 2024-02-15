import type { StorybookConfig } from '@storybook/web-components-vite';

export default {
	stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: ['@storybook/addon-essentials'],
	framework: {
		name: '@storybook/web-components-vite',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	core: {
		disableTelemetry: true,
	},
	viteFinal: config => ({
		...config,
		esbuild: {
			target: 'es2022',
		},
	}),
} satisfies StorybookConfig;
