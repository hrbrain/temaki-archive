import * as Storyshots from '@storybook/addon-storyshots'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import 'jest-styled-components'

// @ts-ignore
ReactDOM.createPortal = (node: React.ReactElement) =>
    React.createElement('modal', null, node)

Storyshots.default({ storyKindRegex: /^((?!.*?DateRangePicker).)*$/ })
