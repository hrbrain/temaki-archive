import { text } from '@storybook/addon-knobs'
import * as React from 'react'
import * as Tag from './index'

export default {
    title: 'Components/Tag'
}

export const Primary = () => {
    return <Tag.Component text={text('Text', 'Tag')} width={'48px'} />
}

export const Secondary = () => {
    return (
        <Tag.Component
            text={text('Text', 'Tag')}
            colorType={'secondary'}
            width={'48px'}
        />
    )
}
export const Destructive = () => {
    return (
        <Tag.Component
            text={text('Text', 'Tag')}
            colorType={'destructive'}
            width={'48px'}
        />
    )
}
