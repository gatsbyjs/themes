import merge from "deepmerge"
import colors from "./colors"
import theme from "gatsby-theme-blog/gatsby-plugin-theme-ui"

export default merge(theme, {
  initialColorMode: `light`,
  colors,
})
