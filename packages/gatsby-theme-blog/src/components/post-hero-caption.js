import * as React from "react"
import { Themed, css, Flex } from "theme-ui"

const PostHeroCaption = ({ text, url }) => (
  <>
    {text && (
      <Flex>
        {url ? (
          <Themed.a
            css={css({ margin: `auto`, fontStyle: `italic` })}
            href={url}
            target="_blank"
          >
            {text}
          </Themed.a>
        ) : (
          <Themed.i css={css({ margin: `auto` })}>{text}</Themed.i>
        )}
      </Flex>
    )}
  </>
)

export default PostHeroCaption
