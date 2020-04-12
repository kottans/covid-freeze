import React from 'react'
import Iframe from 'react-iframe'

import { Link } from '@components/Link'
import { Layout } from '@components/Layout'
import { SEO } from '@components/SEO'
import { Text } from '@components/Text'
import { Box, Flex } from '@components/Grid'
import { LiveData } from '@components/Content'

const LocalBusiness = () => (
  <Layout>
    <SEO
      title="Локальний бізнес"
      pathname="/local-business"
      description="Як локальний бізнес та фрілансери потерпають від карантинних заходів та реагують на зміни"
      isArticle
      articleMeta={{ datePublished: '2020-04-05', dateModified: '2020-04-05' }}
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
    <Box mb={4} id="main-data">
      <Iframe
        url="https://docs.google.com/forms/d/e/1FAIpQLSdq23nSEivjU_xLOzm97zjaTk5LuHs8R9zkMv4nWiZrOhtCvg/viewform?embedded=true"
        width="100%"
        height="793px"
        styles={{
          background: 'transparent',
          border: '0px none #ccc',
        }}
        frameborder="0"
        marginHeight="0"
        marginWidth="0"
        display="initial"
        onMouseWheel=""
        position="relative"
      />
    </Box>
    <Text mb={2} style={{ textAlign: 'center' }} id="more-data">
      Ще більше відкритих даних
    </Text>
    <Flex mb={2}>
      <Link className="button secondary" from="local-business" to="/corporate/">
        Компанії
      </Link>
      <Link
        className="button secondary"
        from="local-business"
        to="/individuals/"
      >
        Люди
      </Link>
    </Flex>
    <Flex mb={6}>
      <Link
        className="button secondary"
        from="local-business"
        to="/local-business/#main-data"
      >
        Наверх
      </Link>
      <Link className="button secondary" from="local-business" to="/">
        На головну
      </Link>
    </Flex>
  </Layout>
)

export default LocalBusiness
