import React from "react"
import isPresent from "is-present"
import { Themed, Box } from "theme-ui"
import { Link } from "gatsby"
import { Folder } from "react-feather"

const DirectoryList = ({ directories }) =>
  isPresent(directories) ? (
    <>
      <Box py={3} style={{ display: `flex`, flexWrap: `wrap` }}>
        {Object.entries(directories).map(([key, value]) => (
          <Themed.a
            as={Link}
            key={key}
            to={value[0].pagePath}
            style={{ marginRight: `15px` }}
          >
            <Box
              w={[1, 2, 2]}
              p={3}
              key={key}
              style={{
                display: `flex`,
                alignItems: `center`,
              }}
            >
              <Folder style={{ marginRight: `5px` }} />
              <span>{key}</span>
            </Box>
          </Themed.a>
        ))}
      </Box>
      <hr />
    </>
  ) : null

export default DirectoryList
