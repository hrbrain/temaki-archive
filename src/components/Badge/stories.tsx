import { number } from '@storybook/addon-knobs'
import * as React from 'react'
import * as Badge from './index'

export default {
    title: 'Components/Badge'
}

export const All = () => {
    return <Badge.Component count={number('Count', 10)} />
}
