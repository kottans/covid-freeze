import React, { useState, useEffect } from 'react'
import Iframe from '@components/Iframe'
import PropTypes from 'prop-types'

import { Link, OutboundLink, IntraPageLink } from '@components/Link'
import { Layout } from '@components/Layout'
import { SEO } from '@components/SEO'
import { Text } from '@components/Text'
import { Box, Br, Flex } from '@components/Grid'
import { LiveData, DataSubmissionAnonymityWarning } from '@components/Content'
import TabSet from '@components/TabSet'

const tabs = [
  {
    name: 'it',
    title: 'ІТ компанії',
    content: (
      <>
        <Box mb={4}>
          <Iframe
            url="https://airtable.com/embed/shrOnixvEeyehP4fc?backgroundColor=cyan&viewControls=on"
            className="airtable-embed"
            height="533px"
          />
        </Box>
        <Box mb={4} style={{ textAlign: 'center' }}>
          <Text as="h3" mb={4}>
            Розкажіть нам і співшукачам про компанію
          </Text>
          <Text mb={4} style={{ fontSize: '80%' }}>
            Будь ласка перевірте, чи немає вже інформації про вашу компанію у
            списку вище.
            <Br />
            Дякуємо, що підтримуєте відкриті дані чистими.
          </Text>
          <Iframe
            url="https://airtable.com/embed/shrtkZHzVtYeA04om?backgroundColor=cyan"
            className="airtable-embed"
            height="1200px"
          />
        </Box>
        <Flex mb={6}>
          <IntraPageLink
            basepath="/corporate"
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
    name: 'general',
    title: 'Всі індустрії',
    content: (
      <>
        <Box mb={4}>
          <Iframe
            url="https://airtable.com/embed/shryqDMQ4UmjFlQef?backgroundColor=cyan&viewControls=on"
            className="airtable-embed"
            height="533px"
          />
        </Box>
        <Box mb={4} style={{ textAlign: 'center' }}>
          <Text as="h3" mb={4}>
            Розкажіть нам і співшукачам про заходи, до яких вдається ваша
            компанія
          </Text>
          <Text mb={4} style={{ fontSize: '80%' }}>
            Ви можете додати інформацію про зміни у вашій компанії пізніше.
            <Br />
            Дякуємо, що підтримуєте відкриті дані чистими.
          </Text>
          <Iframe
            url="https://airtable.com/embed/shra5VdhFVKNEKN37?backgroundColor=cyan"
            className="airtable-embed"
            height="1120px"
          />
        </Box>
        <Flex mb={7}>
          <IntraPageLink
            basepath="/corporate"
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
    name: 'survival',
    title: 'Управління ризиками',
    content: (
      <>
        <Box mb={4}>
          <Iframe
            url="https://airtable.com/embed/shri5QNsNFHXZ6dRO?backgroundColor=cyan&viewControls=on"
            className="airtable-embed"
            height="533px"
          />
        </Box>
        <Box mb={4} style={{ textAlign: 'center' }}>
          <Text as="h3" mb={4}>
            Розкажіть нам і співшукачам про компанію
          </Text>
          <Text mb={4} style={{ fontSize: '80%' }}>
            Будь ласка перевірте, чи не має вже інформації про вашу компанію у
            списку вище.
            <Br />
            Дякуємо, що підтримуєте відкриті дані чистими.
          </Text>
          <Iframe
            url="https://airtable.com/embed/shr7pczRDtpRzTG7x?backgroundColor=cyan"
            className="airtable-embed"
            height="1280px"
          />
        </Box>
        <Flex mb={6}>
          <IntraPageLink
            basepath="/corporate"
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
    name: 'overview',
    title: 'Огляди індустрії та великі найми',
    content: (
      <>
        <Box mb={4}>
          <Iframe
            url="https://airtable.com/embed/shrt6QJIluRV4Pn07?backgroundColor=cyan&viewControls=on"
            className="airtable-embed"
            height="533px"
          />
        </Box>
        <Box mb={4} style={{ textAlign: 'center' }}>
          <Text as="h3" mb={4}>
            Що відбувається на ринках України і світу
          </Text>
          <Text mb={4} style={{ fontSize: '80%' }}>
            Ви можете додати лінки на огляди та великі найми в Україні.
            <Br />
            Інформація в цьому розділі підлягає модерації для уникнення спаму.
            <Br />
            Дякуємо, що підтримуєте відкриті дані чистими.
          </Text>
          <Iframe
            url="https://airtable.com/embed/shr6HPb24ySjV57qw?backgroundColor=cyan"
            className="airtable-embed"
            height="1300px"
          />
        </Box>
        <Flex mb={7}>
          <IntraPageLink
            basepath="/corporate"
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
            from="corporate"
            to="/local-business"
          >
            Локальний бізнес і фріланс
          </Link>
          <Link className="button secondary" from="corporate" to="/individuals">
            Люди
          </Link>
        </Flex>
        <Flex mb={6}>
          <Link className="button secondary" from="corporate" to="/">
            На головну
          </Link>
        </Flex>
      </>
    ),
  },
]

const Corporate = ({ location }) => {
  const tabNames = tabs.map(tab => `#${tab.name}`)
  const subsection = tabNames.includes(location.hash)
    ? location.hash
    : undefined
  const [embedding, setEmbedding] = useState(subsection || tabNames[0])
  useEffect(() => {
    if (location.hash && tabNames.includes(location.hash)) {
      setEmbedding(location.hash)
    }
  }, [location, tabNames]) // TODO: Fix extra render cycle on extra dependency addition
  console.log('Corporate:location', location) // TODO: Note number of renders
  return (
    <Layout>
      <SEO
        title="Компанії"
        pathname="/corporate"
        description="Як карантинні заходи впливають на компанії і як компанії реагують на зміни"
        isArticle
        articleMeta={{
          datePublished: '2020-04-05',
          dateModified: '2020-04-05',
        }}
      />
      <LiveData />
      <Text as="h2" mb={2}>
        Компанії
      </Text>
      <Text mb={4}>Інформація про стан найму у компаніях</Text>
      <Text mb={4}>
        Відкрита інформація дозволяє зрозуміти, що відбувається поряд із нами.
        <Br />
        Більш конкретно, ніж в термінах &laquo;бізнеси&nbsp;закриваються&raquo;,
        &laquo;компанії&nbsp;скорочують персонал&raquo; - тим більше, що це
        неправда, або принаймні не вся правда.
      </Text>
      <Text mb={4}>
        Люди, що втрачають роботу, зможуть побачити, які компанії шукають
        співробітників, і&nbsp;в&nbsp;яких&nbsp;випадках доцільно зекономити час
        та зусилля.
        <Br />
        Дехто вважає, що люди бояться втратити роботу і їх жахає думка про ризик
        потрапити під скорочення. Ми можемо знизити рівень їх тривожності,
        показавши як компанії реагують на зміни, які рішення знаходять.
      </Text>
      <Text mb={4}>
        Ознайомтесь із зібраною інформацією та додайте від себе - відкриті дані
        це ви і для вас!
      </Text>
      <DataSubmissionAnonymityWarning from="corporate" />
      <TabSet
        id="main-data"
        tabs={tabs}
        basePath={location.pathname}
        activeTabName={embedding.slice(1)}
      />
      <Text mb={6} style={{ textAlign: 'center' }}>
        Ідея цієї сторінки:{' '}
        <OutboundLink
          from="corporate"
          to="https://candor.co/hiring-freezes/"
          target="_blank"
        >
          Candor Hiring Freeze
        </OutboundLink>
        {' // '}
        <OutboundLink
          from="corporate"
          to="https://podbor.io/hiring-freezes/"
          target="_blank"
        >
          Podbor Hiring Freeze
        </OutboundLink>
      </Text>
    </Layout>
  )
}

Corporate.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default Corporate
