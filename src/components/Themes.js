const colors = require("../tailwind.config")
  .theme.extend.colors

// console.info("COLORS ", colors)

export const lightTheme = {
  body: colors['ttfgray'], // ttfgray-1
  text: colors['ttfdkgreen'],
  cardBkgd: colors['ttfgray1'],

}
export const darkTheme = {
  body: colors['ttfdkgreen'],
  text: colors['ttfgray'],
  cardBkgd: colors['ttfblack'],

}
