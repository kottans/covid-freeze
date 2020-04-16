import React from 'react'
import PropTypes from 'prop-types'
import GoogleAnalytics from 'react-ga'
import { Link as GatsbyLink } from 'gatsby'

const SubcomponentLink = ({
  to,
  anchor,
  stateUpdater,
  from,
  children,
  className,
}) => (
  <GatsbyLink
    id={anchor}
    to={`${to}#${anchor}`}
    className={className}
    onClick={() => {
      GoogleAnalytics.event({
        category: 'Link',
        action: `[clicked] ${from}`,
        label: to,
      })
      stateUpdater(`#${anchor}`)
    }}
  >
    {children}
  </GatsbyLink>
)

SubcomponentLink.propTypes = {
  to: PropTypes.string.isRequired,
  anchor: PropTypes.string.isRequired,
  stateUpdater: PropTypes.func.isRequired,
  from: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

SubcomponentLink.defaultProps = {
  className: ``,
  from: `unnamed link`,
}

export default SubcomponentLink
