import { text } from '@storybook/addon-knobs'
import * as React from 'react'
import * as Text from './index'

// eslint-disable-next-line import/no-default-export
export default {
    title: 'Components/Text'
}

export const Standard = () => (
    <Text.Component>{text('Value', 'Hello')}</Text.Component>
)
