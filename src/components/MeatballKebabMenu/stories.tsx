import { storiesOf } from '@storybook/react'
import * as React from 'react'
import * as MeatballKebabMenu from './index'
import { text, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

storiesOf('Components|MeatballKebabMenu', module).add('all', () => {
    return (
        <div className="m-10">
            <MeatballKebabMenu.Component
                type={select(
                    'Place',
                    {
                        meatball_top: 'm-top',
                        meatball_bottom: 'm-bottom',
                        kebab_top: 'k-top',
                        kebab_bottom: 'k-bottom'
                    },
                    'm-top'
                )}
                listItems={menuItems}
            />
        </div>
    )
})
const menuItems = [
    { item: text('text1', 'リスト1'), onClick: action('onClick1') },
    { item: text('text2', 'リスト2'), onClick: action('onClick2') },
    { item: text('text3', 'リスト3'), onClick: action('onClick3') }
]
