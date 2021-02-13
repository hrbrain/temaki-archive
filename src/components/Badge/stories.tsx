import { number } from '@storybook/addon-knobs'
import * as React from 'react'
import * as Badge from './index'

// eslint-disable-next-line import/no-default-export
export default {
    title: 'Components/Badge'
}

export const All = () => {
    return <Badge.Component count={number('Count', 10)} />
}
