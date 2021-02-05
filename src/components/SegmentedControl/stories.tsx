import { text, number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import * as SegmentedControl from './index'

storiesOf('Components/SegmentedControl', module)
    .add('Default', () => {
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
    })
    .add('Link', () => {
        const data = [
            {
                text: text('text1', '最初のタブ'),
                to: '?path=/story/components-segmentedcontrol--link'
            },
            {
                text: text('text2', '真ん中のタブ'),
                to: '1'
            },
            {
                text: text('text3', '最後のタブ'),
                to: '2'
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
    })
