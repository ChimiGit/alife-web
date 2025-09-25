/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#2E3192', // Deep blue for ALIFE branding
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      spacing: {
        21: '5.25rem', // Custom width for logo
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'rotate-cw': 'rotateCW 50s linear infinite',
        'rotate-ccw': 'rotateCCW 50s linear infinite',
      },
      keyframes: {
        rotateCW: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        rotateCCW: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(-360deg)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
