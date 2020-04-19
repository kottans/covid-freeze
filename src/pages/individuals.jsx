import React, { useEffect, useState } from 'react'
import Iframe from '@components/Iframe'
import PropTypes from 'prop-types'

import { Link, IntraPageLink } from '@components/Link'
import { Layout } from '@components/Layout'
import { SEO } from '@components/SEO'
import { Text } from '@components/Text'
import { Box, Br, Flex } from '@components/Grid'
import { LiveData, DataSubmissionAnonymityWarning } from '@components/Content'
import TabSet from '@components/TabSet'

const basePath = '/individuals'

const tabs = [
  {
    name: 'personal-stories',
    title: 'Особисті історії',
    content: (
      <>
        <Box mb={4}>
          <Iframe
            url="https://airtable.com/embed/shrZPaMPSGvTftBnt?backgroundColor=cyan&viewControls=on"
            className="airtable-embed"
            height="533px"
          />
        </Box>
        <Box mb={4} style={{ textAlign: 'center' }}>
          <Text as="h3" mb={4}>
            Розкажіть свою історію
          </Text>
          <Text mb={4} style={{ fontSize: '80%' }}>
            Що з вами сталось і як ви реагуєте на виклики?
            <Br />
            Дякуємо, що підтримуєте відкриті дані чистими.
          </Text>
          <Iframe
            url="https://airtable.com/embed/shrWMin8tyw50itPo?backgroundColor=cyan"
            className="airtable-embed"
            height="1090px"
          />
        </Box>
        <Flex mb={6}>
          <IntraPageLink
            basepath={basePath}
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
    name: 'vacancy-sources-and-career-advice',
    title: "Джерела вакансій та кар'єрні поради",
    content: (
      <>
        <Box mb={4}>
          <Iframe
            url="https://airtable.com/embed/shrDhcjrQNJWEzjdr?backgroundColor=cyan&viewControls=on"
            className="airtable-embed"
            height="533px"
          />
        </Box>
        <Box mb={4} style={{ textAlign: 'center' }}>
          <Text as="h3" mb={4}>
            Додайте корисний ресурс
          </Text>
          <Text mb={4} style={{ fontSize: '80%' }}>
            Кар&apos;єрні поради або канали чи групи, де не проходить і дня без
            публікації вакансії
            <Br />
            Інформація в цьому розділі підлягає модерації для уникнення спаму.
            <Br />
            Дякуємо, що підтримуєте відкриті дані чистими.
          </Text>
          <Iframe
            url="https://airtable.com/embed/shrvWPpqJsc57Rukx?backgroundColor=cyan"
            className="airtable-embed"
            height="1330px"
          />
        </Box>
        <Flex mb={6}>
          <IntraPageLink
            basepath={basePath}
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
          <Link className="button secondary" from={basePath} to="/corporate">
            Компанії
          </Link>
          <Link
            className="button secondary"
            from={basePath}
            to="/local-business"
          >
            Локальний бізнес і фріланс
          </Link>
        </Flex>
        <Flex mb={7}>
          <Link className="button secondary" from={basePath} to="/">
            На головну
          </Link>
        </Flex>
      </>
    ),
  },
]

const Individuals = ({ location }) => {
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
  console.log(`${basePath}:location`, location) // TODO: Note number of renders
  return (
    <Layout>
      <SEO
        title="Люди"
        pathname={basePath}
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
      <DataSubmissionAnonymityWarning from={basePath} />
      <TabSet
        id="main-data"
        tabs={tabs}
        basePath={basePath}
        activeTabName={embedding.slice(1)}
      />
    </Layout>
  )
}

Individuals.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default Individuals
