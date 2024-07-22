/** @type {import('tailwindcss').Config} */
export const content = [
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',
];
export const theme = {
  extend: {
    fontFamily: {
      satoshi: ['Satoshi', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
    colors: {
      'primary-orange': '#FF5722',
    },
    boxShadow: {
      'inset-custom': 'inset 10px -50px 94px 0 rgba(199, 199, 199, 0.2)',
    },
  },
};
export const plugins = [];