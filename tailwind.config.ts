import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            colors: {
                'bg-main': '#F8F9FA',
                green: '#00AD64',
                yellow: '#FFD630',
                white: '#FFFFFF',
                'slide-gray': '#454646',
                'slide-gray-light': '#6D6E6E',
                'controls-light-gray': '#D9D9D9',
                'controls-gray': '#A6A6A6',
                'controls-dark-gray': '#323433',
                'text-gray': 'rgba(#323433, .7)'
            }
        }
    },
    plugins: []
};
export default config;
