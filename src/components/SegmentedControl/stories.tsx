import { text, number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import * as SegmentedControl from './index'

storiesOf('Components/SegmentedControl', module).add('molecule', () => {
    const data: SegmentedControl.Item[] = [
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
