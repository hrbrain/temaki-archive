import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import * as RadioButton from './index'

storiesOf('Components|RadioButton', module).add('all', () => {
    return (
        <RadioButton.Component
            onClick={action('onClick')}
            checked={boolean('Checked', true)}
            text={text('Component', 'RadioButton')}
        />
    )
})
