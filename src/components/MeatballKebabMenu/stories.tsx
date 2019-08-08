import { storiesOf } from '@storybook/react'
import * as React from 'react'
import * as MeatballMenu from './MeatballMenu/index'

storiesOf('Components|MeatballKebabMenu', module)
    .add('MeatballMenu', () => {
        return (
            <div className="m-10">
                <MeatballMenu.Component listItems={menuItems} />
            </div>
        )
    })
    .add('KebabMenu', () => {
        return (
            <div className="m-10">
                <MeatballMenu.Component listItems={menuItems} />
            </div>
        )
    })

const menuItems: string[] = ['メニュー１', 'メニュー２', 'メニュー３']
