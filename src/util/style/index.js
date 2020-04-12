import * as styledComponents from 'styled-components'
import propTypes from '@styled-system/prop-types'
import { themeGet } from '@styled-system/theme-get'
import {
  space,
  color,
  flexbox,
  layout,
  border,
  background,
  position,
  typography,
} from 'styled-system'
import { theme } from './theme'

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents

export {
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  theme,
  themeGet,
  propTypes,
  space,
  color,
  flexbox,
  layout,
  border,
  background,
  position,
  typography,
}
// export * from 'styled-system'
export default styled
