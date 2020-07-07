import React, { Fragment } from "react"
import { Styled } from "theme-ui"

/**
 * Shadow me to add your own bio content
 */

const BioContent = () => (
  <Fragment>
    Words by <Styled.a href="http://example.com/">Jane Doe</Styled.a>.
    <br />
    Change me. This is all quite default.
  </Fragment>
)

export default BioContent
