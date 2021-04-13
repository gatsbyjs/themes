import * as React from "react"
import { Global } from "@emotion/react"
import { css, Box } from "theme-ui"
import Footer from "./footer"

const Layout = (props) => (
  <>
    <Global
      styles={css({
        "*": {
          boxSizing: `border-box`,
        },
        body: {
          margin: 0,
          fontFamily: `body`,
        },
      })}
    />
    <Box
      css={css({
        minHeight: `100vh`,
        display: `flex`,
        flexDirection: `column`,
      })}
    >
      <Box as="main">
        <Box
          p={[5]}
          css={css({
            display: `flex`,
            flexDirection: `column`,
          })}
        >
          {props.children}
          <Footer />
        </Box>
      </Box>
    </Box>
  </>
)

export default Layout
