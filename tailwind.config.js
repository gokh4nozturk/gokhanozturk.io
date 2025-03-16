/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
import animations from '@midudev/tailwind-animations';

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ['Inter', ...defaultTheme.fontFamily.serif],
      },
      borderColor: {
        DEFAULT: colors.neutral[400],
      },
      colors: {
        // Theme Colors
        'p3-light': 'var(--p3-light)',
        'p3-dark': 'var(--p3-dark)',

        // Primary Colors
        'p3-primary': 'var(--p3-primary)',
        'p3-primary-light': 'var(--p3-primary-light)',
        'p3-primary-dark': 'var(--p3-primary-dark)',

        // Secondary Colors
        'p3-secondary': 'var(--p3-secondary)',
        'p3-secondary-light': 'var(--p3-secondary-light)',
        'p3-secondary-dark': 'var(--p3-secondary-dark)',

        // Accent Colors
        'p3-accent': 'var(--p3-accent)',
        'p3-accent-light': 'var(--p3-accent-light)',
        'p3-accent-dark': 'var(--p3-accent-dark)',

        // Text Colors
        'p3-text': 'var(--p3-text)',
        'p3-text-light': 'var(--p3-text-light)',
        'p3-text-dark': 'var(--p3-text-dark)',

        // Background Colors
        'p3-background': 'var(--p3-background)',
        'p3-background-light': 'var(--p3-background-light)',
        'p3-background-dark': 'var(--p3-background-dark)',

        // Border Colors
        'p3-border': 'var(--p3-border)',
        'p3-border-dark': 'var(--p3-border-dark)',
      },
      keyframes: {
        marquee: {
          '0%': {
            transform: 'translateX(0%)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
      },
      animation: {
        marquee: 'marquee var(--duration) linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), animations],
};
