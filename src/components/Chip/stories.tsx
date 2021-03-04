import { text } from '@storybook/addon-knobs'
import * as React from 'react'
import * as Chip from './index'

export default {
    title: 'Components/Chip'
}

export const Default = () => {
    return <Chip.Component text={text('Text', 'Chip')} colorType={'default'} />
}

export const Primary = () => {
    return <Chip.Component text={text('Text', 'Chip')} colorType={'primary'} />
}

export const Secondary = () => {
    return (
        <Chip.Component text={text('Text', 'Chip')} colorType={'secondary'} />
    )
}
export const Destructive = () => {
    return (
        <Chip.Component text={text('Text', 'Chip')} colorType={'destructive'} />
    )
}
