import React from 'react'
import PropTypes from 'prop-types'
import { useUIDSeed } from 'react-uid'
import TabTags from './TabTags'

const TabSet = ({ id, tabs, basePath, activeTabName, children }) => {
  const seed = useUIDSeed()
  return (
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
      {tabs
        .filter(tab => tab.name === activeTabName)
        .map((tab, idx) => (
          <div key={seed(`tabset-content-${idx})`)}>{tab.content}</div>
        ))}
    </div>
  )
}

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
