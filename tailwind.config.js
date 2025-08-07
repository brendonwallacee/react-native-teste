/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./App.tsx","./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: '#F3F4F6',
        'dark-background': '#161616',

        card: '#FFFFFF',
        'dark-card': '#232323',

        text: '#1F2937',
        'dark-text': '#FFFFFF',

        muted: '#6B7280',
        'dark-muted': '#707070',

        primary: '#3ECF8F',
        'dark-primary': '#3ECF8F',
        'primary-foreground': '#161616', // Cor do texto para botões primários
        'dark-primary-foreground': '#161616',

        secondary: '#70E1C1',
        'dark-secondary': '#70E1C1',
        'secondary-foreground': '#161616',
        'dark-secondary-foreground': '#161616',

        destructive: '#EF4444',
        'dark-destructive': '#EF4444',
        'destructive-foreground': '#FFFFFF',
        'dark-destructive-foreground': '#FFFFFF',

        ghost: '#374151', // Cor de fundo para botões "fantasma"
        'dark-ghost': '#4B5563',
      },
    },
  },
  plugins: [],
};