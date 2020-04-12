import React from 'react'

import { Text } from '@components/Text'
import { Br } from '@components/Grid'

const SearchTip = () => (
  <Text>
    Знайти компанію:
    <Br />
    Filter &gt;&gt; Add Filter &gt;&gt; Компанія contains [введіть частину
    назви]
  </Text>
)

const AttentionDot = () => <div>O</div>

const Hint = () => (
  <>
    <AttentionDot />
    <SearchTip />
  </>
)

export default Hint
