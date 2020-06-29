// import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'
import { addDecorator, addParameters, configure } from '@storybook/react'
import * as React from 'react'
import { defaultTheme, ThemeProvider } from '../src/modules/theme'
import { ConfigProvider } from 'antd';
import jaJP from 'antd/es/locale/ja_JP';

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
    <ConfigProvider locale={jaJP}>
      {storyfn()}
    </ConfigProvider>
  </ThemeProvider>
))

configure(loadStories, module)
