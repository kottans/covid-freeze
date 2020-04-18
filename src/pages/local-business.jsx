import React, { useEffect, useState } from 'react'
import Iframe from '@components/Iframe'

import { Link, IntraPageLink } from '@components/Link'
import { Layout } from '@components/Layout'
import { SEO } from '@components/SEO'
import { Text } from '@components/Text'
import { Box, Br, Flex } from '@components/Grid'
import { LiveData } from '@components/Content'
import PropTypes from 'prop-types'
import TabSet from '@components/TabSet'

const tabs = [
  {
    name: 'local-business-questionnaire',
    title: 'Що вас цікавить?',
    content: (
      <>
        <Box mb={4}>
          <Iframe
            url="https://docs.google.com/forms/d/e/1FAIpQLSdq23nSEivjU_xLOzm97zjaTk5LuHs8R9zkMv4nWiZrOhtCvg/viewform?embedded=true"
            height="793px"
          />
        </Box>
        <Flex mb={6}>
          <IntraPageLink
            basepath="/local-business"
            name="main-data"
            className="button secondary"
          >
            Наверх
          </IntraPageLink>
        </Flex>
      </>
    ),
  },
  {
    name: 'more-data',
    title: 'Ще більше відкритих даних...',
    content: (
      <>
        <Flex mb={2}>
          <Link
            className="button secondary"
            from="local-business"
            to="/corporate"
          >
            Компанії
          </Link>
          <Link
            className="button secondary"
            from="local-business"
            to="/individuals"
          >
            Люди
          </Link>
        </Flex>
        <Flex mb={6}>
          <Link className="button secondary" from="local-business" to="/">
            На головну
          </Link>
        </Flex>
      </>
    ),
  },
]

const LocalBusiness = ({ location }) => {
  const tabNames = tabs.map(tab => `#${tab.name}`)
  const subsection = tabNames.includes(location.hash)
    ? location.hash
    : undefined
  const [embedding, setEmbedding] = useState(subsection || tabNames[0])
  useEffect(() => {
    if (location.hash && tabNames.includes(location.hash)) {
      setEmbedding(location.hash)
    }
  }, [location])
  console.log('Individual:location', location)
  return (
    <Layout>
      <SEO
        title="Локальний бізнес"
        pathname="/local-business"
        description="Як локальний бізнес та фрілансери потерпають від карантинних заходів та реагують на зміни"
        isArticle
        articleMeta={{
          datePublished: '2020-04-05',
          dateModified: '2020-04-05',
        }}
      />
      <LiveData />
      <Text mb={4}>
        Локальні та сімейні бізнеси, фрілансери та інші самозайняті постраждали
        від обмежувальних заходів чи не найбільше.
      </Text>
      <Text mb={4}>
        Ми хочемо розібратись, якої інформації про стан справ у малому бізнесі
        бракує, чим готові поділитись підприємці - порадами, лайфхаками,
        допомогою.
      </Text>
      <Text mb={4}>
        Якщо ви фрілансер або маєте чи втратили локальний бізнес, заповніть будь
        ласка форму.
      </Text>
      <TabSet
        id="main-data"
        tabs={tabs}
        basePath={location.pathname}
        activeTabName={embedding.slice(1)}
      />
    </Layout>
  )
}

LocalBusiness.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default LocalBusiness
