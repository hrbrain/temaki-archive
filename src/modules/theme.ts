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
    S0: string
    S5: string
    S10: string
    S20: string
    S30: string
    S40: string
    S50: string
    S60: string
    S70: string
    S80: string
    S90: string
    S100: string
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
  L4: string
  L5: string
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
      S0: 'rgb(255, 255, 255)',
      S5: 'rgb(245, 245, 245)',
      S10: 'rgb(234, 234, 234)',
      S20: 'rgb(214, 214, 214)',
      S30: 'rgb(193, 193, 193)',
      S40: 'rgb(173, 173, 173)',
      S50: 'rgb(153, 153, 153)',
      S60: 'rgb(133, 133, 133)',
      S70: 'rgb(112, 112, 112)',
      S80: 'rgb(92, 92, 92)',
      S90: 'rgb(71, 71, 71)',
      S100: 'rgb(51, 51, 51)'
    },
    utilities: {
      red: 'rgb(224, 85, 72)',
      blue: 'rgb(48, 120, 191)',
      highlightGreen: 'rgb(114, 206, 92)',
      paleRed: 'rgb(253, 246, 246)',
      paleGreen: 'rgb(248 ,252, 247)',
      paleBlue: 'rgb(245, 249, 252)'
    },
    text: {
      default: '#333'
    }
  },
  shadows: {
    L1: '0 0 2px 0 rgba(0, 0, 0, 0.16)',
    L2: '0 1px 3px 0 rgba(0, 0, 0, 0.16)',
    L3: '0 2px 5px 0 rgba(0, 0, 0, 0.16)',
    L4: '0 3px 8px 0 rgba(0, 0, 0, 0.16)',
    L5: '0 5px 11px 0 rgba(0, 0, 0, 0.16)'
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
