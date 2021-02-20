import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import * as React from 'react'
import * as Checkbox from './index'

export default {
    title: 'Components/Checkbox'
}

export const All = () => {
    return (
        <Checkbox.Component
            onClick={action('onClick')}
            checked={boolean('Checked', false)}
            disabled={boolean('Disabled', false)}
            indeterminate={boolean('Indeterminate', false)}
            text={text('Component', 'Checkbox')}
        />
    )
}
