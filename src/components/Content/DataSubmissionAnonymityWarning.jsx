import React from 'react'
import PropTypes from 'prop-types'

import { Text } from '@components/Text'
import { OutboundLink } from '@components/Link'
import { Br } from '@components/Grid'

const DataSubmissionAnonymityWarning = ({ from }) => (
  <Text
    mb={4}
    style={{
      fontSize: '80%',
    }}
  >
    Увага! Дані подаються користувачами анонімно, публікуються автоматично
    як є. <Br />
    Якщо ви помітите неточність, зв&apos;яжіться з{' '}
    <OutboundLink
      from={from}
      to="https://forms.gle/9Jsn4M2dKG4ygyWA9"
      target="_blank"
    >
      нами
    </OutboundLink>
    .
  </Text>
)

DataSubmissionAnonymityWarning.propTypes = {
  from: PropTypes.string.isRequired,
}

export default DataSubmissionAnonymityWarning
