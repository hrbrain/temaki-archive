import { storiesOf } from '@storybook/react'
import * as React from 'react'
import * as MeatballKebabMenu from './'
import * as ClickOutside from '../../modules/ClickOutside'
import { text, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

storiesOf('Components/MeatballKebabMenu', module).add('all', () => {
    return (
        <div className="flex items-center justify-center w-screen h-screen">
            <div>
                <MeatballKebabMenu.Component
                    color={text('color', 'rgba(83,180,100,1)')}
                    type={select(
                        'Type',
                        { meatball: 'meatball', kebab: 'kebab' },
                        'meatball'
                    )}
                    position={select(
                        'Position',
                        {
                            top: 'top',
                            left: 'left',
                            right: 'right',
                            bottom: 'bottom'
                        },
                        'top'
                    )}
                    listItems={menuItems}
                    onClick={action('onClick')}
                />
                <ClickOutside.Component
                    onClickOutside={action('onClickOutside')}
                />
            </div>
        </div>
    )
})
const menuItems = [
    { item: text('text1', 'リスト1'), onClick: action('onClick1') },
    { item: text('text2', 'リスト2'), onClick: action('onClick2') },
    {
        item: text('text3', 'リスト3'),
        onClick: action('onClick3'),
        color: 'destructive' as const
    }
]
