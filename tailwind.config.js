/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#fcfcfe",
        fg: "#03080a",
        muted: "rgba(3,8,10,0.69)",
        border: "rgba(3,8,10,0.08)",
        violet: "#7624f4",
      },
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        gordita: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        mono: ["Geist Mono", "monospace"],
      },
      borderColor: {
        DEFAULT: "rgba(3,8,10,0.08)",
      }
    },
  },
  plugins: [],
}
