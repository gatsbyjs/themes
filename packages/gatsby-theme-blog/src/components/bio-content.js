import React, { Fragment } from "react"
import { Themed } from "theme-ui"

/**
 * Shadow me to add your own bio content
 */

const BioContent = () => (
  <Fragment>
    Words by <Themed.a href="http://example.com/">Jane Doe</Themed.a>.
    <br />
    Change me. This is all quite default.
  </Fragment>
)

export default BioContent
