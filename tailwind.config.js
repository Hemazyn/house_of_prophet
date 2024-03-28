/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto Condensed", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        "Gotham-Black": ["Gotham-Black", "sans-serif"],
        "Gotham-Bold": ["Gotham-Bold", "sans-serif"],
        "Gotham-Book": ["Gotham-Book", "sans-serif"],
        "Gotham-Light": ["Gotham-Light", "sans-serif"],
        "Gotham-Medium": ["Gotham-Medium", "sans-serif"],
        "Gotham-Thin": ["Gotham-Thin", "sans-serif"],
        "Gotham-Ultra": ["Gotham-Ultra", "sans-serif"],
        "Gotham-XLight": ["Gotham-XLight", "sans-serif"],
      },
    },
  },
  plugins: [],
};
