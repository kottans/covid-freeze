import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import styled from '@style'
import { StaticQuery, graphql } from 'gatsby'
import { useUIDSeed } from 'react-uid'
import { Link } from '@components/Link'

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '68px',
    height: '62px',
    left: '36px',
    top: '36px',
    border: '8px solid hsl(230,57%,34%)',
    borderRadius: '8px',
    backgroundColor: 'hsl(230,57%,34%)',
  },
  bmBurgerBars: {
    background: '#fff',
  },
  bmBurgerBarsHover: {
    background: '#a90000',
  },
  bmCrossButton: {
    height: '40px',
    width: '40px',
  },
  bmCross: {
    background: '#bdc3c7',
    width: '7px',
    height: '25px',
    right: '3px',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
  },
  bmMenu: {
    background: '#373a47',
    padding: '1.5em 1em 0 1em',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em 0',
  },
  bmItem: {
    display: 'inline-block',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
}

const MenuLink = styled(Link)`
  display: block;
  color: #aaa;
  text-decoration: none;
  padding-top: 0.5ex;
  padding-bottom: 1ex;

  &:visited {
    color: #aaa;
  }

  &:hover {
    color: #fff;
  }
`

const MenuSubLink = styled(MenuLink)`
  font-size: 80%;
  padding-left: 2ex;
  padding-top: 0;
`

const SiteNavMenu = () => {
  const seed = useUIDSeed()
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              navMenuLinks {
                name
                link
                subItems {
                  name
                  link
                }
              }
            }
          }
        }
      `}
      render={({
        site: {
          siteMetadata: { navMenuLinks },
        },
      }) => (
        <Menu width="400px" styles={styles}>
          {navMenuLinks.map((entry, idx) => (
            <React.Fragment key={seed('sitenavmenu-navmenuitem-container')}>
              <MenuLink
                from="navmenu"
                to={entry.link}
                key={seed(`sitenavmenu-navmenuitem${idx}`)}
              >
                {entry.name}
              </MenuLink>
              {entry.subItems &&
                entry.subItems.map((subEntry, subIdx) => (
                  <MenuSubLink
                    from="navmenu"
                    to={`${entry.link}${subEntry.link}`}
                    key={seed(`sitenavmenu-navmenuitem${idx}-subitem${subIdx}`)}
                  >
                    {subEntry.name}
                  </MenuSubLink>
                ))}
            </React.Fragment>
          ))}
        </Menu>
      )}
    />
  )
}

export default SiteNavMenu
