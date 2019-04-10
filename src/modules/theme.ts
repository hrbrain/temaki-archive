import * as React from 'react'
import * as styledComponents from 'styled-components'
import colors from '~/lib/colors'

export type RequiredThemeProps = {
  text: string
}

export const defaultTheme: RequiredThemeProps = {
  text: colors.text
}

const casted = styledComponents as styledComponents.ThemedStyledComponentsModule<RequiredThemeProps>

const {
  default: styled,
  ServerStyleSheet,
  StyleSheetManager,
  createGlobalStyle,
  css,
  isStyledComponent,
  keyframes,
  withTheme
} = casted
const ThemeConsumer: React.ExoticComponent<React.ConsumerProps<RequiredThemeProps>> = casted.ThemeConsumer
const ThemeContext: React.Context<RequiredThemeProps> = casted.ThemeContext
const ThemeProvider: React.ComponentClass<
  styledComponents.ThemeProviderProps<RequiredThemeProps, RequiredThemeProps>,
  // tslint:disable-next-line:no-any
  any
> = casted.ThemeProvider

export default styled
export {
  ServerStyleSheet,
  StyleSheetManager,
  ThemeConsumer,
  ThemeContext,
  ThemeProvider,
  createGlobalStyle,
  css,
  isStyledComponent,
  keyframes,
  withTheme
}
