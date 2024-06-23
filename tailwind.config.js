/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1CBEC1',
        ['primary-dark']: '#433DC4',
        ['primary-darker']: '#292752',
        secondary: '#80BB9C',
        lightBg: "#182F4B",
        navyDeep: "#182F4B",
        navy: "#00365C",
        cyanLight: "#1CC2C4",
        grayLight: "#9DA7B3"
      },
      fontFamily: {
        ubunto: ["var(--font-ubuntu)"],
        sansation: [`var(--font-sansation)`],
      },
      keyframes: {
        ['t-right']: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        ['t-left']: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        ['fade-in']: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        ['blink-caret']: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: '#b1b1b1' },
        },
      },
      animation: {
        't-right': 't-right 1.5s ease forwards',
        't-left': 't-left 1.5s ease forwards',
        'fade-in': 'fade-in 2.2s ease forwards',
        'blink-caret': 'blink-caret 0.75s step-end infinite',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1998px',
    },
  },
  darkMode:['selector', '[data-mode="dark"]'],
  plugins: [],
}
