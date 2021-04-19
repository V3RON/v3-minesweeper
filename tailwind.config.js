module.exports = {
	purge: {
		enabled: true,
		content: [
			'./src/components/**/*.tsx',
			'./src/pages/**/*.tsx',
		],
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
