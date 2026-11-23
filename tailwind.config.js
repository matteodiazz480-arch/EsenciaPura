export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          olive: "#556B4C",
          "olive-dark": "#3D4F36",
          "olive-light": "#6E8763",
          gold: "#C8A056",
          "gold-light": "#DFC07E",
          "gold-dark": "#A8833E",
          cream: "#F5EFE6",
          "cream-light": "#FAF6F0",
          "cream-dark": "#EADECF",
          sage: "#A8B49A",
          "sage-light": "#C4CDC0",
          "sage-dark": "#8A977B",
          charcoal: "#232A20",
          muted: "#667160"
        }
      },
      fontFamily: {
        serif: ["'Playfair Display'", "serif"],
        sans: ["'Montserrat'", "sans-serif"]
      }
    },
  },
  plugins: [],
}
