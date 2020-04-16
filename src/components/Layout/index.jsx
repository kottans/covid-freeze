import React from 'react'
import PropTypes from 'prop-types'

import Header from '@components/Header'
import Footer from '@components/Footer'
import { Box } from '@components/Grid'
import { OutboundLink } from '@components/Link'
import GlobalStyles from '@style/GlobalStyles'
import { ThemeProvider, theme } from '@style'
import SiteNavMenu from '@components/SiteNavMenu'

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <SiteNavMenu />
      <Header siteTitle="COVID-19: Як карантин впливає на людей та бізнеси в Україні" />
      <Box maxWidth="1000px" m="0 auto" px={3}>
        {children}
        <Box mt={3}>
          <Footer>
            <p>
              <OutboundLink
                to="https://forms.gle/9Jsn4M2dKG4ygyWA9"
                from="footer"
                target="_blank"
              >
                Повідомити про неточність
              </OutboundLink>
            </p>
            <p>
              <OutboundLink
                to="https://forms.gle/yF34XRLkzDV7cqmQ8"
                from="footer"
                target="_blank"
              >
                Допомогти проекту
              </OutboundLink>
            </p>
            <p>
              <OutboundLink
                to="https://github.com/kottans/covid-freeze"
                from="footer"
                target="_blank"
              >
                Source code
              </OutboundLink>
            </p>
            <p>
              <OutboundLink
                to="https://t.me/kottans"
                from="footer"
                target="_blank"
              >
                telegram
              </OutboundLink>{' '}
              <OutboundLink
                to="https://fb.me/kottans"
                from="footer"
                target="_blank"
              >
                facebook
              </OutboundLink>{' '}
              <OutboundLink
                to="https://github.com/kottans"
                from="footer"
                target="_blank"
              >
                github
              </OutboundLink>
            </p>
            <p>
              &copy; 2020{' '}
              <OutboundLink
                to="https://kottans.org/"
                from="footer"
                target="_blank"
              >
                kottans.org
              </OutboundLink>
            </p>
            <p>
              Built with
              {` `}
              <OutboundLink
                to="https://www.gatsbyjs.org"
                from="footer"
                target="_blank"
              >
                Gatsby
              </OutboundLink>
            </p>
          </Footer>
        </Box>
      </Box>
    </>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export { Layout }
