import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/flowbite-react/lib/**/*.js',
		'./pages/**/*.{ts,tsx}',
		'./public/**/*.html',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			navybig: '#0F1A59',
			bluebig: '#065A98',
			blueBig: '#A9DAFF',
			lightbluebig: '#D5EAF9',
			lightyellowbig: '#D1E200',
			orangebig: '#F77800',
			greenbig: '#47FF47',
			darkgreenbig: '#18A900',
			bigwhite: '##FFFFFF',
			lightredbig: '#FF8585',
			purplebig: '#8711FD',
			lightpurplebig: '#E8D1FF',
		},
	},
	plugins: [require('flowbite/plugin')],
};
export default config;
