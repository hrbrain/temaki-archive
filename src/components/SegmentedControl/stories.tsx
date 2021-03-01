import { text, number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import * as React from 'react'
import * as SegmentedControl from './index'

export default {
    title: 'Components/SegmentedControl'
}

export const Default = () => {
    const data = [
        {
            text: text('text1', '最初のタブ')
        },
        {
            text: text('text2', '真ん中のタブ')
        },
        {
            text: text('text3', '最後のタブ')
        }
    ]

    return (
        <SegmentedControl.Component
            className="m-10"
            selectedIndex={number('index', 0, {})}
            items={data}
            onClickTab={action('tabIndex')}
            itemsWidth={text('itemsWidth', '200px')}
        />
    )
}

export const Link = () => {
    const data = [
        {
            text: text('text1', '最初のタブ'),
            to: text('to1', '/first')
        },
        {
            text: text('text2', '真ん中のタブ'),
            to: text('to2', '/middle')
        },
        {
            text: text('text3', '最後のタブ'),
            to: text('to3', '/last')
        }
    ]

    return (
        <SegmentedControl.Component
            type="link"
            className="m-10"
            items={data}
            itemsWidth={text('itemsWidth', '200px')}
        />
    )
}
