import React from 'react'
import ReactIframe from 'react-iframe'
import PropTypes from 'prop-types'

const Iframe = ({ url, height, className }) => (
  <ReactIframe
    url={url}
    className={className}
    height={height}
    styles={{
      background: 'transparent',
      border: '0px none #ccc',
    }}
    width="100%"
    frameborder="0"
    display="initial"
    onMouseWheel=""
    position="relative"
    marginHeight="0"
    marginWidth="0"
  />
)

Iframe.propTypes = {
  url: PropTypes.string.isRequired,
  height: PropTypes.string,
  className: PropTypes.string,
}

Iframe.defaultProps = {
  height: '1120px',
  className: undefined,
}

export default Iframe
