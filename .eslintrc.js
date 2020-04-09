module.exports = {
	env: {
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier/@typescript-eslint',
		'plugin:prettier/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	root: true,
	rules: {
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/naming-convention': 'error',
		'@typescript-eslint/member-ordering': 'error',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-empty-interface': 'off',
		'import/order': [
			'error',
			{
				groups: [
					'builtin',
					'external',
					'internal',
					'parent',
					'sibling',
					'index',
				],
				'newlines-between': 'always',
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
			},
		],
	},
};
