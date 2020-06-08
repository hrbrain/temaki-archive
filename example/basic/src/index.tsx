import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../../../dist'

import App from './App'

ReactDOM.render(
    <ThemeProvider theme={defaultTheme}>
        <App />
    </ThemeProvider>,
    document.querySelector('#app')
)
