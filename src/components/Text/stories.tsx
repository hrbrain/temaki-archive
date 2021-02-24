import { text } from '@storybook/addon-knobs'
import * as React from 'react'
import * as Text from './index'

export default {
    title: 'Components/Text'
}

export const Standard = () => (
    <Text.Component>{text('Value', 'Hello')}</Text.Component>
)
