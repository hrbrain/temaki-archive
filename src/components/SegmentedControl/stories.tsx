import { action } from '@storybook/addon-actions'
import { text, number, boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import * as SegmentedControl from './index'

storiesOf('Components|SegmentedControl', module)
    .add('atom', () => {
        return (
            <SegmentedControl.SegmentedControlItem
                text={text('text', 'テキスト要素')}
                selected={boolean('selected', true)}
                onClick={action('click')}
            />
        )
    })
    .add('molecule', () => {
        const data: SegmentedControl.SegmentedControlItemType[] = [
            {
                text: text('text1', '最初のタブ'),
                onClick: action('click1')
            },
            {
                text: text('text2', '真ん中のタブ'),
                onClick: action('click2')
            },
            {
                text: text('text3', '最後のタブ'),
                onClick: action('click3')
            }
        ]
        return (
            <SegmentedControl.Component
                selectedIndex={number('index', 0, {})}
                segmentedControlItems={data}
            />
        )
    })
