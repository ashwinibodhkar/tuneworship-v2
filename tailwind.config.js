/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js"
  ],
  theme: {
   
      container: {
        padding: '6rem',
      },
    extend: {},
  },
  plugins: [require("daisyui","tw-elements-react/dist/plugin.cjs"),],
  // daisyui: {
  //   themes: ["black"],
  // },
}

