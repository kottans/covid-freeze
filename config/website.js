module.exports = {
  pathPrefix: `/covid-freeze`,
  url: `https://kottans.org/`,
  title: `COVID-19: як карантин впливає на бізнеси та людей в Україні`,
  titleTemplate: `%s — COVID-19 карантин`,
  description: `COVID-19: як карантин впливає на бізнеси та людей в Україні`,
  image: `/images/meta-image-default.png`, // Path to the default meta image in `static` folder
  siteLanguage: `en`, // Language tag on <html> element
  navMenuLinks: [
    {
      name: 'Головна',
      link: '/',
    },
    {
      name: 'Компанії',
      link: '/corporate',
      subItems: [
        {
          name: 'ІТ компанії',
          link: '#it',
        },
        {
          name: 'Всі індустрії',
          link: '#general',
        },
        {
          name: 'Управління ризиками',
          link: '#survival',
        },
      ],
    },
    {
      name: 'Локальні бізнеси і фріланс',
      link: '/local-business',
    },
    {
      name: 'Люди',
      link: '/individuals',
      subItems: [
        {
          name: 'Особисті історії',
          link: '#personal-stories',
        },
        {
          name: "Джерела вакансій і кар'єрні поради",
          link: '#vacancy-sources-and-career-advice',
        },
      ],
    },
  ],

  // Web App Manifest
  favicon: `src/images/favicon.png`, // Used for manifest favicon generation
  shortName: `COVID freeze`, // shortname for manifest. *Must* be shorter than 12 characters
  themeColor: `#253688`,
  backgroundColor: `#253688`,

  // schema.org JSONLD
  headline: `COVID-19 impact on business and people in Ukraine`,
  author: ``,

  // Google & Twitter
  googleAnalyticsId: `UA-45485466-2`, // Google Analytics ID
  twitter: `@OleksiyRudenko`, // Twitter username
}
