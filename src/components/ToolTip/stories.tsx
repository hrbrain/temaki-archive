import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import * as ToolTip from './index'

storiesOf('Components|ToolTip', module).add('all', () => {
    return (
        <ToolTip.Component
            // onClick={action('onClick')}
            // checked={boolean('Checked', false)}
            text={text('Component', 'テキスト要素')}
        />
    )
})
