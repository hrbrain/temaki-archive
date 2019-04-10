// import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'
import { addDecorator, addParameters, configure } from '@storybook/react'
import * as React from 'react'
import { defaultTheme, ThemeProvider } from '../src/modules/theme'

const req = require.context('../src', true, /(.*\.)?stories\.tsx$/)

const loadStories = () => {
  req.keys().forEach(req)
}

addDecorator(withKnobs)
// 謎のエラーでバグるのでオフにする
// addDecorator(withA11y)
addParameters({
  backgrounds: [{ name: 'White', value: '#FFF', default: true }, { name: 'Dark', value: '#1a2d4c' }]
})
addDecorator(storyfn => (
  <ThemeProvider theme={defaultTheme}>
    <>{storyfn()}</>
  </ThemeProvider>
))

configure(loadStories, module)
