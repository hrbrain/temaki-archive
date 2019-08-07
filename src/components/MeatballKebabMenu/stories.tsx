import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import * as MeatballMenu from './MeatballMenu/index'

storiesOf('Components|MeatballMenu', module).add('MeatballMenu', () => {
    return (
        <MeatballMenu.Component
            onClick={action('onClick')}
            isShow={boolean('isShow', false)}
            listItem={text('listItem', 'list')}
        />
    )
})
