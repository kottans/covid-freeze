import React from 'react'
import PropTypes from 'prop-types'
import { Box, Flex } from '@components/Grid'
import TabTag from './TabTag'

const TabTags = ({ tags, basePath, activeTabName }) => (
  <>
    {tags.map((tag, idx) => (
      <div name={tag.name} key={idx} />
    ))}
    <Box mb={2}>
      <Flex>
        {tags.map(({ name, title }, idx) => (
          <TabTag
            to={`${basePath}#${name}`}
            title={title}
            isActive={name === activeTabName}
            key={idx}
          />
        ))}
      </Flex>
    </Box>
  </>
)

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
