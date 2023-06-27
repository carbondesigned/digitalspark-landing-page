/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        scroll: 'scroll 10s linear infinite',
        'scroll-alternate': 'scroll 10s ease infinite alternate',
        'scroll-alternate-fast': 'scroll 7s ease infinite alternate',
      },
      keyframes: {
        scroll: {
          '0%': {transform: 'translateX(0%)'},
          '100%': {transform: 'translateX(-100%)'},
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#ffffff',
          secondary: '#070707',
          accent: '#17C3B2',
          neutral: '#1E1E1E',
          'base-100': '#444444',
          info: '#17C3B2',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
