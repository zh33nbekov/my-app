import { FlatCompat } from '@eslint/eslintrc'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
	baseDirectory: __dirname,
})

const eslintConfig = [
	...compat.config({
		extends: [
			'next/core-web-vitals',
			'next/typescript',
			'prettier',
			'plugin:prettier/recommended',
		],
		plugins: ['prettier'],
		rules: {
			'prettier/prettier': 'error',
			'arrow-body-style': ['error', 'as-needed'],
			'prefer-arrow-callback': 'error',
			semi: ['error', 'never', { beforeStatementContinuationChars: 'always' }],
			quotes: ['error', 'single'],
			'prefer-template': 'error',
			'func-style': ['error', 'expression'],
			indent: ['error', 'tab', { SwitchCase: 1 }],
			'jsx-quotes': ['error', 'prefer-single'],
			'@typescript-eslint/no-empty-object-type': 'off',
		},
		ignorePatterns: [
			'node_modules/',
			'./apps/client/build/',
			'./apps/client/dist/',
			'./apps/admin/build/',
			'./apps/admin/dist/',
		],
	}),
]

export default eslintConfig
