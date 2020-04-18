import React from 'react'
import PropTypes from 'prop-types'
import TabTags from './TabTags'

const TabSet = ({ id, tabs, basePath, activeTabName, children }) => (
  <div id={id}>
    <TabTags
      tags={tabs.map(({ name, title }) => ({
        name,
        title,
      }))}
      basePath={basePath}
      activeTabName={activeTabName}
    />
    {children}
    {tabs.filter(tab => tab.name === activeTabName).map(tab => tab.content)}
  </div>
)

TabSet.propTypes = {
  id: PropTypes.string,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  basePath: PropTypes.string,
  activeTabName: PropTypes.string.isRequired,
  children: PropTypes.node,
}

TabSet.defaultProps = {
  id: undefined,
  basePath: '/',
  children: undefined,
}

export default TabSet
