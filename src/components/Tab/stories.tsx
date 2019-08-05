import { action } from '@storybook/addon-actions'
import { text, number, boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import * as Tab from './index'

storiesOf('Components|Tab', module)
    .add('atom', () => {
        return (
            <Tab.TabItem
                text={text('text', 'テキスト要素')}
                selected={boolean('selected', true)}
                onClick={action('click')}
            />
        )
    })
    .add('molecule', () => {
        const data: Tab.TabItemType[] = [
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
            <Tab.Component
                selectedIndex={number('index', 0, {})}
                tabItems={data}
            />
        )
    })
