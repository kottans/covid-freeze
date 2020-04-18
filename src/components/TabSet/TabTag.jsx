import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@components/Link'

const TabTag = ({ to, title, isActive }) => (
  <Link className={`button ${isActive ? 'active' : ''}`} to={to}>
    {title}
  </Link>
)

TabTag.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
}

TabTag.defaultProps = {
  isActive: false,
}

export default TabTag
