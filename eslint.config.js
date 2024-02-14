import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { FlatCompat } from '@eslint/eslintrc';
import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';

/**
 * Instantiate `FlatCompat` to be able to use settings not compatible with ESLint flat config format.
 * https://eslint.org/docs/latest/use/configure/migration-guide#using-eslintrc-configs-in-flat-config
 */
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
	{
		// Ignore Javascript files.
		ignores: ['dist', '**/*.js', '**/*.mjs'],
	},
	...compat.extends(
		'@open-wc/eslint-config',
		'airbnb-typescript/base',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
	),
	{
		// Lint typescript files but ignore unit tests (those are configured below).
		files: ['.storybook/**/*.ts', 'src/**/*.ts'],
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: 'module',
			parser: typescriptParser,
			parserOptions: {
				project: resolve(__dirname, 'eslint.tsconfig.json'),
			},
		},
		plugins: {
			typescript: typescriptPlugin,
		},
		rules: {
			/**
			 * Allow for methods that *don't* use `this`.
			 */
			'class-methods-use-this': 'off',
			indent: ['error', 'tab', { SwitchCase: 1 }],
			/**
			 * eslint-config-airbnb-base sets max-len to 100. max-len is increased here to 120.
			 * https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/style.js#L205
			 */
			'max-len': ['error', 120, 2, {
				ignoreUrls: true,
				ignoreComments: false,
				ignoreRegExpLiterals: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
			}],
			'no-restricted-syntax': [
				'error',
				{
					selector: 'ForInStatement',
					message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
				},
				{
					selector: 'LabeledStatement',
					message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
				},
				{
					selector: 'WithStatement',
					message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
				},
			],
			'no-tabs': 'off',
			'import/extensions': ['error', 'never', { js: 'always' }],
			'import/no-unresolved': ['error', { ignore: ['\\.css$'] }],
			'object-curly-newline': ['error', {
				ObjectExpression: { minProperties: 8, multiline: true, consistent: true },
				ObjectPattern: { minProperties: 8, multiline: true, consistent: true },
				ImportDeclaration: { minProperties: 8, multiline: true, consistent: true },
				ExportDeclaration: { minProperties: 8, multiline: true, consistent: true },
			}],
			'one-var': ['error', { initialized: 'never' }],
			'one-var-declaration-per-line': ['error', 'initializations'],
			'template-curly-spacing': ['error', 'always'],
			'@typescript-eslint/indent': ['error', 'tab'],
			/**
			 * Allow rest arguments (...rest) to have a type of any.
			 */
			'@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],
			'wc/guard-super-call': 'off',
		},
	},
	{
		/**
		 * Allow the use of unused expressions in tests. For instance: `expect(foo).to.be.true;`
		 * https://stackoverflow.com/a/37777342
		 * https://eslint.org/docs/user-guide/configuring/rules#using-configuration-files-1
		 */
		files: ['src/**/*.test.ts', 'src/**/*.spec.ts'],
		rules: {
			'@typescript-eslint/no-unused-expressions': 'off',
		},
	},
];
