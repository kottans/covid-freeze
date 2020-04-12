import styled, { layout, propTypes } from '@style'

const Br = styled.br`
  ${layout}
`

Br.displayName = `Br`

Br.defaultProps = {
  display: `block`,
}

Br.propTypes = {
  ...propTypes.display,
}

export default Br
