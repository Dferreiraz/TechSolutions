/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#1a3c8f', dark: '#122a6b', light: '#2a52b5' },
        accent: { DEFAULT: '#10b981', dark: '#059669' },
        dark: { DEFAULT: '#0f172a', 2: '#1e293b', 3: '#334155' }
      },
      fontFamily: {
        heading: ['Sora', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 2px 12px rgba(26, 60, 143, 0.08)',
      }
    },
  },
  plugins: [],
}