/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			// You can extend the default theme here
			colors: {
				// Add custom colors if needed
			},
			fontFamily: {
				// Add custom fonts if needed
			},
		},
	},
	darkMode: "media", // 'media' or 'class'
	plugins: [],
};
