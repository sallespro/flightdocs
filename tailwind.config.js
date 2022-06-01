const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Tangerine', ...defaultTheme.fontFamily.sans],
        'paci': ['Pacifico', ...defaultTheme.fontFamily.sans],
      },
      // backgroundImage: theme => ({
      //   'fly': "url('../src/images/moeda-flight-selfie_HD.jpeg')",
      // })
      backgroundImage: {
        'fly-pattern':
          "linear-gradient(to right bottom, rgba(43, 108, 176, 0.9), rgba(43, 108, 176, 0.9)), url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.eAFxNBriFW8k0jCNOTCe6gHaHs%26pid%3DApi&f=1')",
      },
    },
    purge: ["./src/**/*.js"],
    target: "relaxed",
  },
  variants: {},
  plugins: [],
}
