module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"plugin:react/recommended",
		"standard-with-typescript",
		"prettier",
		"plugin:@next/next/recommended",
	],
	overrides: [
		{
			files: ["**/*.ts"],
			excludedFiles: ["next.config.js"],
		},
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: "./frontend/tsconfig.json",
		ecmaVersion: 2021,
		sourceType: "module",
	},
	plugins: ["react"],
	rules: {
		"@typescript-eslint/explicit-function-return-type": "off",
		"react/react-in-jsx-scope": "off",
		"@typescript-eslint/ban-types": "off",
		"@typescript-eslint/strict-boolean-expressions": "off",
		"@typescript-eslint/no-misused-promises": "off",
		"@typescript-eslint/no-floating-promises": "off",
	},
	settings: {
		react: {
			version: "detect",
		},
	},
};
