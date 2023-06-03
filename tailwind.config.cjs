/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#295943",
        secondary: "#43b97f",
        textGray: "#3d3e48",
      },
    },
  },
  plugins: [],
};
