/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./App.tsx","./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: '#F3F4F6', // cinza claro para o modo claro
        'dark-background': '#161616', // cinza escuro para o modo escuro

        card: '#FFFFFF',
        'dark-card': '#232323',

        text: '#1F2937',
        'dark-text': '#FFFFFF',

        muted: '#6B7280',
        'dark-muted': '#707070',

        primary: '#3ECF8F',
        'dark-primary': '#3ECF8F',

        secondary: '#70E1C1',
        'dark-secondary': '#70E1C1',

        destructive: '#EF4444',
        'dark-destructive': '#EF4444',
      },
    },
  },
  plugins: [],
};