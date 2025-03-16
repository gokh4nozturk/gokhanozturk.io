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
        'p3-light': 'color(display-p3 0.976 0.980 0.984)', // Slate-50 equivalent
        'p3-dark': 'color(display-p3 0.067 0.063 0.063)', // Dark background

        // Primary Colors
        'p3-primary': 'color(display-p3 1 0.25 0)',
        'p3-primary-light': 'color(display-p3 1 0.4 0.2)',
        'p3-primary-dark': 'color(display-p3 0.8 0.2 0)',

        // Secondary Colors
        'p3-secondary': 'color(display-p3 0.8 0.2 0.5)',
        'p3-secondary-light': 'color(display-p3 0.9 0.3 0.6)',
        'p3-secondary-dark': 'color(display-p3 0.7 0.1 0.4)',

        // Accent Colors
        'p3-accent': 'color(display-p3 0.4 0.8 0.9)',
        'p3-accent-light': 'color(display-p3 0.5 0.9 1)',
        'p3-accent-dark': 'color(display-p3 0.3 0.7 0.8)',

        // Text Colors
        'p3-text': 'color(display-p3 0.067 0.063 0.063)',
        'p3-text-light': 'color(display-p3 0.4 0.4 0.4)',
        'p3-text-dark': 'color(display-p3 0.9 0.9 0.9)',

        // Background Colors
        'p3-background': 'color(display-p3 0.07 0.07 0.07)',
        'p3-background-light': 'color(display-p3 0.95 0.95 0.95)',
        'p3-background-dark': 'color(display-p3 0.05 0.05 0.05)',

        // Border Colors
        'p3-border': 'color(display-p3 0.8 0.8 0.8)',
        'p3-border-dark': 'color(display-p3 0.2 0.2 0.2)',
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
