import * as React from "react"
import { LocaleProvider } from "./context"
import { Head } from "./components/head"

const wrapPageElement = ({ element, props }) => (
  <LocaleProvider pageContext={props.pageContext}>
    <Head location={props.location} pageContext={props.pageContext} />
    {element}
  </LocaleProvider>
)

export { wrapPageElement }
