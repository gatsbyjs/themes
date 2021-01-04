import React from "react"
import { Styled, css, Flex } from "theme-ui"

const PostHeroCaption = ({ text, url }) => {
  console.log(__filename, `text`, { text, url })
  return (
    <>
      {text && (
        <Flex>
          {url ? (
            <Styled.a
              css={css({ margin: `auto`, fontStyle: `italic` })}
              href={url}
              target="_blank"
            >
              {text}
            </Styled.a>
          ) : (
            <Styled.i css={css({ margin: `auto` })}>{text}</Styled.i>
          )}
        </Flex>
      )}
    </>
  )
}

export default PostHeroCaption
