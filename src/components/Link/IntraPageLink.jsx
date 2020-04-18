import React from 'react'
import PropTypes from 'prop-types'
import Link from './Link'

const IntraPageLink = ({ basepath, name, className, children }) => (
  <Link from={basepath} to={`${basepath}#${name}`} className={className}>
    {children}
  </Link>
)

IntraPageLink.propTypes = {
  basepath: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

IntraPageLink.defaultProps = {
  className: undefined,
}

export default IntraPageLink
