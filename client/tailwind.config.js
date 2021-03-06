const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],

  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")]
};
