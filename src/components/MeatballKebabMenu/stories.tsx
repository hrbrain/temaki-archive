import { storiesOf } from '@storybook/react'
import * as React from 'react'
import * as MeatballKebabMenu from './'
import * as ClickOutside from '../../modules/ClickOutside'
import { text, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

storiesOf('Components|MeatballKebabMenu', module)
    .add('MeatballMenu', () => {
        return (
            <div className="m-10">
                <MeatballKebabMenu.MeatballMenu
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
                <ClickOutside.Component
                    onClickOutside={action('onClickOutside')}
                />
            </div>
        )
    })
    .add('KebabMenu', () => {
        return (
            <div className="m-10">
                <MeatballKebabMenu.KebabMenu
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
                <ClickOutside.Component
                    onClickOutside={action('onClickOutside')}
                />
            </div>
        )
    })
const menuItems = [
    { item: text('text1', 'リスト1'), onClick: action('onClick1') },
    { item: text('text2', 'リスト2'), onClick: action('onClick2') },
    { item: text('text3', 'リスト3'), onClick: action('onClick3') }
]
