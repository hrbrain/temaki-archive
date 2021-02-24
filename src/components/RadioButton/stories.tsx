import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import * as React from 'react'
import * as RadioButton from './index'
import * as Knobs from '@storybook/addon-knobs'

export default {
    title: 'Components/RadioButton'
}

export const All = () => {
    return (
        <RadioButton.Component
            onClick={action('onClick')}
            checked={boolean('Checked', true)}
            disabled={Knobs.boolean('disabled', false)}
            text={text('Component', 'RadioButton')}
        />
    )
}
