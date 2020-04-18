import React from 'react'
import PropTypes from 'prop-types'
import { useUIDSeed } from 'react-uid'
import { Box, Flex } from '@components/Grid'
import TabTag from './TabTag'

const TabTags = ({ tags, basePath, activeTabName }) => {
  const seed = useUIDSeed()
  return (
    <>
      {tags.map((tag, idx) => (
        <div name={tag.name} key={seed(`tabtags-div${idx}`)} />
      ))}
      <Box mb={2}>
        <Flex>
          {tags.map(({ name, title }, idx) => (
            <TabTag
              to={`${basePath}#${name}`}
              title={title}
              isActive={name === activeTabName}
              key={seed(`tabtags-tabtag${idx}`)}
            />
          ))}
        </Flex>
      </Box>
    </>
  )
}

TabTags.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  basePath: PropTypes.string,
  activeTabName: PropTypes.string.isRequired,
}

TabTags.defaultProps = {
  basePath: '/',
}

export default TabTags
