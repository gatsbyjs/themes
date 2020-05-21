import "typeface-montserrat"
import "typeface-merriweather"
import { toTheme } from "@theme-ui/typography"
import wordpress2016 from "typography-theme-wordpress-2016"
import {merge} from "theme-ui"

export const typography = toTheme(wordpress2016)

const purple60 = `#663399`
const purple30 = `#D9BAE8`
const grey90 = `#232129`
const black80 = `#1B1F23`
const white = `#fff`
const lightWhite = `rgba(255, 255, 255, 0.86)`
const opaqueLightYellow = `rgba(255, 229, 100, 0.2)`
const opaqueLightWhite = `hsla(0, 0%, 100%, 0.2)`
const lightGray = `hsla(0, 0%, 0%, 0.2)`

export const colors = {
  text: grey90,
  background: white,
  primary: purple60,
  secondary: black80,
  muted: lightGray,
  highlight: opaqueLightYellow,
  heading: grey90,
  prism: {
    background: `#011627`,
    comment: `#809393`,
    string: `#addb67`,
    var: `#d6deeb`,
    number: `#f78c6c`,
    constant: `#82aaff`,
    punctuation: `#c792ea`,
    className: `#ffc98b`,
    tag: `#ffa7c4`,
    boolean: `#ff5874`,
    property: `#80cbc4`,
    namespace: `#b2ccd6`,
    highlight: `hsla(207, 95%, 15%, 1)`,
  },
  modes: {
    dark: {
      text: lightWhite,
      background: grey90,
      primary: purple30,
      secondary: lightWhite,
      muted: opaqueLightWhite,
      highlight: purple60,
      heading: white,
    },
  },
}

export const prism = {
    ".attr-name": {
      fontStyle: `italic`,
    },
    ".comment": {
      color: `prism.comment`,
    },
    ".attr-name, .string, .url": {
      color: `prism.string`,
    },
    ".variable": {
      color: `prism.var`,
    },
    ".number": {
      color: `prism.number`,
    },
    ".builtin, .char, .constant, .function": {
      color: `prism.constant`,
    },
    ".punctuation, .selector, .doctype": {
      color: `prism.punctuation`,
    },
    ".class-name": {
      color: `prism.className`,
    },
    ".tag, .operator, .keyword": {
      color: `prism.tag`,
    },
    ".boolean": {
      color: `prism.boolean`,
    },
    ".property": {
      color: `prism.property`,
    },
    ".namespace": {
      color: `prism.namespace`,
    },
  }

  export const styles = {
    root: {
      fontFamily: `body`,
    },
    pre: {
      variant: `prism`,
      fontFamily: `monospace`,
      tabSize: 4,
      hyphens: `none`,
      marginBottom: 2,
      color: `white`,
      bg: `prism.background`,
      overflow: `auto`,
      borderRadius: 10,
      p: 3,
    },
    code: {
      fontFamily: `monospace`,
      // from typography overrideThemeStyles
      // "h1 code, h2 code, h3 code, h4 code, h5 code, h6 code"
      fontSize: `inherit`,
    },
    inlineCode: {
      borderRadius: `0.3em`,
      color: `secondary`,
      bg: `highlight`,
      paddingTop: `0.15em`,
      paddingBottom: `0.05em`,
      paddingX: `0.2em`,
    },
    // from typography overrideThemeStyles
    a: {
      color: `primary`,
    },
    hr: {
      borderColor: `muted`,
    },
    p: {
      code: {
        fontSize: `inherit`,
      },
    },
    li: {
      code: {
        fontSize: `inherit`,
      },
    },
    blockquote: {
      color: `inherit`,
      borderLeftColor: `inherit`,
      opacity: 0.8,
      "&.translation": {
        fontSize: `1em`,
      },
    },
  }
  
  
  export const preset = merge(typography, {
    initialColorMode: `light`,
    colors,
    fonts: {
      heading: `Montserrat, sans-serif`,
      monospace: `Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`,
    },
    sizes: {
      container: 672,
    },
    styles,
    prism,
  })

  export default preset