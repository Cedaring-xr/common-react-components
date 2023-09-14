/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Graphik', 'sans-serif']
		},
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px'
		},
		extend: {
			colors: {
				accent: {
					1: 'hsl(var(--color-accent1) / <alpha-value>)',
					2: 'hsl(var(--color-accent2) / <alpha-value>)'
				},
				bkg: 'hsl(var(--color-bkg) / <alpha-value>)',
				content: 'hsl(var(--color-content) / <alpha-value>)'
			},
			animation: {}
		}
	},
	plugins: []
}
