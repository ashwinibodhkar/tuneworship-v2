/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
   
      container: {
        padding: '6rem',
      },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark"],
  },
}

