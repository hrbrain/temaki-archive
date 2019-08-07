import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import * as Switch from './index'

storiesOf('Components|Switch', module).add('all', () => {
    return (
        <div className="m-10">
            <Switch.Component
                onClick={action('onClick')}
                isChecked={boolean('Switch', false)}
                onText={text('Text(ON)', 'ON')}
                offText={text('Text(OFF)', 'OFF')}
            />
        </div>
    )
})
