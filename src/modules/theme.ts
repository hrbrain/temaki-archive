import * as React from 'react'
import * as styledComponents from 'styled-components'

export type RequiredThemeColors = {
  primary: {
    default: string
    N10: string
    N20: string
    N30: string
    N40: string
    N50: string
    N60: string
    N70: string
    N80: string
    N90: string
    P10: string
    P20: string
    P30: string
    P40: string
    P50: string
    P60: string
    P70: string
    P80: string
    P90: string
  }
  grayScale: {
    S10: string
    S20: string
    S30: string
    S40: string
    S50: string
    S60: string
    S70: string
    S80: string
    S90: string
  }
  utilities: {
    red: string
    blue: string
    highlightGreen: string
    paleRed: string
    paleGreen: string
    paleBlue: string
  }
  text: {
    default: string
  }
}

export type RequiredThemeShadows = {
  L1: string
  L2: string
  L3: string
}

export type RequiredThemeProps = {
  colors: RequiredThemeColors
  shadows: RequiredThemeShadows
}

export const defaultTheme: RequiredThemeProps = {
  colors: {
    primary: {
      default: '',
      N10: '',
      N20: '',
      N30: '',
      N40: '',
      N50: '',
      N60: '',
      N70: '',
      N80: '',
      N90: '',
      P10: '',
      P20: '',
      P30: '',
      P40: '',
      P50: '',
      P60: '',
      P70: '',
      P80: '',
      P90: ''
    },
    grayScale: {
      S10: '',
      S20: '',
      S30: '',
      S40: '',
      S50: '',
      S60: '',
      S70: '',
      S80: '',
      S90: ''
    },
    utilities: {
      red: '',
      blue: '',
      highlightGreen: '',
      paleRed: '',
      paleGreen: '',
      paleBlue: ''
    },
    text: {
      default: ''
    }
  },
  shadows: {
    L1: '',
    L2: '',
    L3: ''
  }
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
