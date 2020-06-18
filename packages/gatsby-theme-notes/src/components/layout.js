import React from "react"
import { Global } from "@emotion/core"
import { css } from "theme-ui"
import { Layout, Main, Container } from "theme-ui"
import Footer from "./footer"

export default (props) => (
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
    <Layout>
      <Main>
        <Container>
          {props.children}
          <Footer />
        </Container>
      </Main>
    </Layout>
  </>
)
