import React, { useState } from 'react'
import Iframe from 'react-iframe'

import { Link, OutboundLink } from '@components/Link'
import { Layout } from '@components/Layout'
import { SEO } from '@components/SEO'
import { Text } from '@components/Text'
import { Box, Br, Flex } from '@components/Grid'
import { LiveData, DataSubmissionAnonymityWarning } from '@components/Content'
import PropTypes from 'prop-types'

const embeddings = {
  '#it': {
    tableUrl:
      'https://airtable.com/embed/shrOnixvEeyehP4fc?backgroundColor=cyan&viewControls=on',
    form: {
      url: 'https://airtable.com/embed/shrtkZHzVtYeA04om?backgroundColor=cyan',
      height: '1200px',
    },
  },
  '#general': {
    tableUrl:
      'https://airtable.com/embed/shryqDMQ4UmjFlQef?backgroundColor=cyan&viewControls=on',
    form: {
      url: 'https://airtable.com/embed/shra5VdhFVKNEKN37?backgroundColor=cyan',
    },
  },
  '#survival': {
    tableUrl:
      'https://airtable.com/embed/shri5QNsNFHXZ6dRO?backgroundColor=cyan&viewControls=on',
    form: {
      url: 'https://airtable.com/embed/shr7pczRDtpRzTG7x?backgroundColor=cyan',
      height: '1280px',
    },
  },
}

const Corporate = ({ location: { hash } }) => {
  const subsection = Object.keys(embeddings).includes(hash) ? hash : undefined
  const [embedding, setEmbedding] = useState(subsection || '#it')
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
      <Text mb={4}>
        Інформація про стан хайрингу в великих та середніх компаніях
      </Text>
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
      <Box mb={2} id="main-data">
        <Flex>
          <button
            type="button"
            className={`button ${embedding === '#it' ? 'active' : ''}`}
            onClick={() => setEmbedding('#it')}
          >
            ІТ компанії
          </button>
          <button
            type="button"
            className={`button ${embedding === '#general' ? 'active' : ''}`}
            onClick={() => setEmbedding('#general')}
          >
            Всі індустрії
          </button>
          <button
            type="button"
            className={`button ${embedding === '#survival' ? 'active' : ''}`}
            onClick={() => setEmbedding('#survival')}
          >
            Управління ризиками
          </button>
        </Flex>
      </Box>
      <Text mb={4} style={{ textAlign: 'center' }}>
        <Link to="/corporate/#more-data">Ще більше відкритих даних</Link>
      </Text>
      <Box mb={4}>
        <Iframe
          url={embeddings[embedding].tableUrl}
          className="airtable-embed"
          width="100%"
          height="533px"
          styles={{
            background: 'transparent',
            border: '0px none #ccc',
          }}
          frameborder="0"
          display="initial"
          onMouseWheel=""
          position="relative"
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
          url={embeddings[embedding].form.url}
          className="airtable-embed"
          width="100%"
          height={embeddings[embedding].form.height || '1120px'}
          styles={{
            background: 'transparent',
            border: '0px none #ccc',
          }}
          frameborder="0"
          display="initial"
          onMouseWheel=""
          position="relative"
        />
      </Box>
      <Text mb={2} style={{ textAlign: 'center' }} id="more-data">
        Ще більше відкритих даних
      </Text>
      <Flex mb={2}>
        <Link
          className="button secondary"
          from="corporate"
          to="/local-business/"
        >
          Локальний бізнес і фріланс
        </Link>
        <Link className="button secondary" from="corporate" to="/individuals/">
          Люди
        </Link>
      </Flex>
      <Flex mb={6}>
        <Link
          className="button secondary"
          from="corporate"
          to="/corporate/#main-data"
        >
          Наверх
        </Link>
        <Link className="button secondary" from="corporate" to="/">
          На головну
        </Link>
      </Flex>
      <Text mb={6} style={{ textAlign: 'center' }}>
        Ідея проекту:{' '}
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
  }).isRequired,
}

export default Corporate
