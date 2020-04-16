import React, { useState } from 'react'
import Iframe from 'react-iframe'
import PropTypes from 'prop-types'

import { Link } from '@components/Link'
import { Layout } from '@components/Layout'
import { SEO } from '@components/SEO'
import { Text } from '@components/Text'
import { Box, Br, Flex } from '@components/Grid'
import { LiveData, DataSubmissionAnonymityWarning } from '@components/Content'

const embeddings = {
  '#personal-stories': {
    tableUrl:
      'https://airtable.com/embed/shrZPaMPSGvTftBnt?backgroundColor=cyan&viewControls=on',
    form: {
      header: 'Розкажіть свою історію',
      intro: 'Що з вами сталось і як ви реагуєте на виклики?',
      url: 'https://airtable.com/embed/shrWMin8tyw50itPo?backgroundColor=cyan',
      height: '1090px',
    },
  },
  '#vacancy-sources-and-career-advice': {
    tableUrl:
      'https://airtable.com/embed/shrDhcjrQNJWEzjdr?backgroundColor=cyan&viewControls=on',
    form: {
      header: 'Додайте корисний ресурс',
      intro:
        "Кар'єрні поради або канали чи групи, де не проходить і дня без публікації вакансії",
      url: 'https://airtable.com/embed/shrvWPpqJsc57Rukx?backgroundColor=cyan',
      height: '1330px',
    },
  },
}

const Individuals = ({ location: { hash } }) => {
  const subsection = Object.keys(embeddings).includes(hash) ? hash : undefined
  const [embedding, setEmbedding] = useState(subsection || '#personal-stories')
  return (
    <Layout>
      <SEO
        title="Люди"
        pathname="/individuals"
        description="Як люди потерпають від карантинних заходів та реагують на зміни"
        isArticle
        articleMeta={{
          datePublished: '2020-04-05',
          dateModified: '2020-04-05',
        }}
      />
      <LiveData />
      <Text mb={4}>
        Люди втрачають роботу через обмежувальні заходи. Хтось шукає нову
        роботу, де-кому вдається знайти нову, інші знаходять нові для себе
        способи заробітку або знаходять застосування своїм іншим вмінням.
      </Text>
      <Text mb={4}>
        Почитайте міні-історії успіху або лайфхаки та поділіться своєю - заради
        інших.
        <Br />
        Знайдіть джерело вакансій та кар&apos;єрні поради для себе та поділіться
        своїми знахідками.
        <Br />
        Ми всі - в одному човні посеред бурхливого моря.
      </Text>
      <Text mb={4}>
        Ознайомтесь із зібраною інформацією та додайте від себе - відкриті дані
        це ви!
      </Text>
      <DataSubmissionAnonymityWarning from="individuals" />
      <Box mb={2} id="main-data">
        <Flex>
          <button
            type="button"
            className={`button ${
              embedding === '#personal-stories' ? 'active' : ''
            }`}
            onClick={() => setEmbedding('#personal-stories')}
          >
            Особисті історії
          </button>
          <button
            type="button"
            className={`button ${
              embedding === '#vacancy-sources-and-career-advice' ? 'active' : ''
            }`}
            onClick={() => setEmbedding('#vacancy-sources-and-career-advice')}
          >
            Джерела вакансій та кар&nbsp;єрні поради
          </button>
        </Flex>
      </Box>
      <Text mb={4} style={{ textAlign: 'center' }}>
        <Link to="/individuals/#more-data" title="Більше даних">
          Ще більше відкритих даних
        </Link>
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
          {embeddings[embedding].form.header}
        </Text>
        <Text mb={4} style={{ fontSize: '80%' }}>
          {embeddings[embedding].form.intro}
          <Br />
          Дякуємо, що підтримуєте відкриті дані.
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
        <Link className="button secondary" from="individuals" to="/corporate/">
          Компанії
        </Link>
        <Link
          className="button secondary"
          from="individuals"
          to="/local-business/"
        >
          Локальний бізнес і фріланс
        </Link>
      </Flex>
      <Flex mb={6}>
        <Link
          className="button secondary"
          from="individuals"
          to="/individuals/#main-data"
          title="Наверх"
        >
          Наверх
        </Link>
        <Link className="button secondary" from="individuals" to="/">
          На головну
        </Link>
      </Flex>
    </Layout>
  )
}

Individuals.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string.isRequired,
  }).isRequired,
}

export default Individuals
