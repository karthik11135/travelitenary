import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: ['class'],
    content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		colors: {
			// supreme: "#493628", 
			// primary: "#AB886D", 
			// secondary: "#D6C0B3", 
			// teritiary: "#E4E0E1",
			// supreme: "#000000", 
			// primary: "#0B192C", 
			// secondary: "#1E3E62", 
			// teritiary: "#FF6500",
			// supreme: "#191919", 
			// primary: "#2D4263", 
			// secondary: "#C84B31", 
			// teritiary: "#ECDBBA",
			supreme: "#201E43", 
			primary: "#134B70", 
			secondary: "#508C9B", 
			teritiary: "#EEEEEE",
  		},
  		animation: {
  			'background-position-spin': 'background-position-spin 3000ms infinite alternate'
  		},
  		keyframes: {
  			'background-position-spin': {
  				'0%': {
  					backgroundPosition: 'top center'
  				},
  				'100%': {
  					backgroundPosition: 'bottom center'
  				}
  			}
  		}
  	}
  },
};
export default config;
