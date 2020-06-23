import styled, { flexbox, propTypes } from '@style'

import Box from './Box'

const Flex = styled(Box)`
  ${flexbox}
`

Flex.displayName = `Flex`

Flex.defaultProps = {
  display: `flex`,
  'flex-wrap': 'wrap',
}

Flex.propTypes = {
  ...propTypes.flexbox,
}

export default Flex
