/** @jsx jsx */
import Prism from "@theme-ui/prism"

import headings from "../components/headings"

export default {
  pre: props => props.children,
  code: Prism,
  ...headings,
}