const purple60 = `#663399`
const purple30 = `#D9BAE8`
const grey90 = `#232129`
const white = `#fff`
const lightWhite = `rgba(255, 255, 255, 0.86)`
const opaqueLightWhite = `hsla(0, 0%, 100%, 0.2)`

export default {
  initialColorMode: `light`,
  colors: {
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
  },
}
