import React from 'react'
import { defaultTheme, ThemeProvider } from '../src/modules/theme'

export const parameters = {
  backgrounds: {
    values: [{ name: 'White', value: '#FFF', default: true }, { name: 'Dark', value: '#1a2d4c' }]
  },
}
export const decorators = [
  (Story) => (
    <ThemeProvider theme={defaultTheme}>
      <Story/>
    </ThemeProvider>
  )
]
