/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "bg_color": "#f0f0f0",
        "txtbox_bg_color": "#f3f3f3",
        "txtbox_bg_color_2": "#f9f9f9",
      },
    },
  },
  plugins: [],
}
