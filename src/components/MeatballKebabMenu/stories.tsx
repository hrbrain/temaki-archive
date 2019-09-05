import { storiesOf } from '@storybook/react'
import * as React from 'react'
import * as MeatballKebabMenu from './'
import * as ClickOutside from '../../modules/ClickOutside'
import { text, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

storiesOf('Components|MeatballKebabMenu', module).add('all', () => {
    return (
        <div className="mr-10 mt-56">
            <MeatballKebabMenu.Component
                type={select(
                    'Type',
                    { meatball: 'meatball', kebab: 'kebab' },
                    'meatball'
                )}
                position={select(
                    'Position',
                    {
                        top: 'top',
                        bottom: 'bottom'
                    },
                    'top'
                )}
                listItems={menuItems}
                onClick={action('onClick')}
            />
            <ClickOutside.Component onClickOutside={action('onClickOutside')} />
        </div>
    )
})
const menuItems = [
    { item: text('text1', 'リスト1'), onClick: action('onClick1') },
    { item: text('text2', 'リスト2'), onClick: action('onClick2') },
    { item: text('text3', 'リスト3'), onClick: action('onClick3') }
]
