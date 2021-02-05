module.exports = {
	darkMode: false, // or 'media' or 'class'
	purge: ['./#src/*.html', './#src/**/*.jsx', './src/**/**/*.js'],
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/typography'),
		require('tailwindcss-children'),
	],
};
