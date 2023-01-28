/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        bpink: {
          500: "rgb(232,80,171)",
        },
        dgreen: {
          500: "rgb(117, 251, 80)",
        },
        bblue: {
          200: "rgb(61,166,177)",
          500: "rgb(111,239,252)",
        },
        divineg: {
          500: "#75fb50",
        },
        diviner: {
          500: "#db3024",
        },
      },
      fontFamily: {
        DivineLight: ["DivineLight", "sans-serif"],
      },
    },
  },
  plugins: [],
};
