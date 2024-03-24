/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'russo': ['"Russo One"', 'sans-serif'],
        'rowdies': ['Rowdies', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

