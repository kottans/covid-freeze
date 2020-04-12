import React from 'react'

import { Link, OutboundLink } from '@components/Link'
import { Layout } from '@components/Layout'
import { SEO } from '@components/SEO'
import { Text } from '@components/Text'
import { Box, Br, Flex } from '@components/Grid'
import { LiveData, DataSubmissionAnonymityWarning } from '@components/Content'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Інтро"
      pathname="/"
      description="COVID-19: як карантин впливає на бізнеси та людей в Україні"
      isArticle
      articleMeta={{ datePublished: '2020-04-05', dateModified: '2020-04-05' }}
    />
    <LiveData />
    <Text mb={4}>
      Багато хто стурбований змінами в нашому житті, викликаними обмежувальними
      заходами, що впроваджуються в Україні у зв&apos;язку із епідемією
      COVID-19.
    </Text>
    <Text mb={4}>
      Суспільне життя завмирає, люди втрачають роботу, бізнеси шукають способи
      втриматись на плаву або зупиняються.
    </Text>
    <Text mb={4}>
      Ми вирішили розібратись, що відбувається на ринку праці, із невеликими
      бізнесами і людьми. Ми віримо, що відкриті, загальнодоступні дані це
      спосіб зменшити ступінь невизначеності, а чиїсь короткі - в одне речення -
      історії про знаходження виходу із скрутного становища можуть дати комусь
      надію.
    </Text>
    <Text mb={4}>Інформацію про ефекти карантину поділено на три групи:</Text>
    <ul>
      <li>стан хайрингу в компаніях</li>
      <li>зміни у малому бізнесі</li>
      <li>як ми виживаємо</li>
    </ul>
    <Box mb={4}>
      Ознайомтесь із зібраною інформацією та додайте від себе - відкриті дані це
      ви і для вас!
      <Flex>
        <Link to="/corporate/" from="index" className="button">
          <strong>Компанії</strong>
          <Br />
          стан хайрингу
        </Link>
        <Link to="/local-business/" from="index" className="button">
          <strong>Локальний бізнес і фріланс</strong>
        </Link>
        <Link to="/individuals/" from="index" className="button">
          <strong>Люди</strong>
          <Br />
          виживання
        </Link>
      </Flex>
    </Box>
    <DataSubmissionAnonymityWarning from="index" />
    <Text
      mb={4}
      style={{
        fontSize: '80%',
      }}
    >
      Ми також із вдячністю приймаємо допомогу - покращити сайт, накодити аналіз
      та візуалізацію даних (ми збираємо їх через{' '}
      <OutboundLink from="index" to="https://airtable.com/" target="_blank">
        airtable
      </OutboundLink>
      ). Якщо ви маєте можливість допомогти або маєте ідеї щодо проекту,
      зв&apos;яжіться з{' '}
      <OutboundLink
        from="index"
        to="https://forms.gle/yF34XRLkzDV7cqmQ8"
        target="_blank"
      >
        нами
      </OutboundLink>
      .
    </Text>
  </Layout>
)

export default IndexPage
