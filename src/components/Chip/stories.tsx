import { text } from '@storybook/addon-knobs'
import * as React from 'react'
import * as Chip from './index'

export default {
    title: 'Components/Chip'
}

export const Default = () => {
    return (
        <Chip.Component
            text={text('Text', 'Chip')}
            colorType={'default'}
            width={'48px'}
        />
    )
}

export const Primary = () => {
    return (
        <Chip.Component
            text={text('Text', 'Chip')}
            colorType={'primary'}
            width={'48px'}
        />
    )
}

export const Secondary = () => {
    return (
        <Chip.Component
            text={text('Text', 'Chip')}
            colorType={'secondary'}
            width={'48px'}
        />
    )
}
export const Destructive = () => {
    return (
        <Chip.Component
            text={text('Text', 'Chip')}
            colorType={'destructive'}
            width={'48px'}
        />
    )
}
