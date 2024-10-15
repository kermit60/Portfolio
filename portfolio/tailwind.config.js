import { transformWithEsbuild } from 'vite';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #D7BCE8, #5E548E, #FF6B6B, #4ECDC4, #FFC75F)',
      }

    },
    screens: {
      'sm': '450px',
      'md': '550px',
      'lg': '800px',
      'xl': '1150px',
    }
  },
  plugins: [],
};
