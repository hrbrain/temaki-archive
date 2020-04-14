import * as React from 'react'
import styled, { ThemeProvider, withTheme } from 'styled-components'
import { Switch, defaultTheme } from '../../../dist'

const Application = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Switch
                text={{ on: 'ON', off: 'OFF ' }}
                onClick={() => {}}
                checked
            />
            <Example>ほげ</Example>
        </ThemeProvider>
    )
}

const Example = styled.div`
    ${props => console.log(props)};
`

export default Application
