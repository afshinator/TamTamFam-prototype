const colors = require("../tailwind.config")
  .theme.extend.colors

// console.info("COLORS ", colors)

export const lightTheme = {
  body: colors['manatee'],
  nav: colors['periwinkle'],
  text: colors['oxfordBlue'],
  cardBkgd: colors['periwinkle'],
}

export const darkTheme = {
  body: colors['graniteGrey'],
  nav: colors['darkLava'],
  text: colors['ivory'],
  cardBkgd: colors['khaki'],

}
