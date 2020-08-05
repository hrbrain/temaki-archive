import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import * as RadioButton from './index'
import * as Knobs from '@storybook/addon-knobs'

storiesOf('Components|RadioButton', module).add('all', () => {
    return (
        <RadioButton.Component
            onClick={action('onClick')}
            checked={boolean('Checked', true)}
            disabled={Knobs.boolean('disabled', false)}
            color={Knobs.text('color', '#333')}
            fontColor={Knobs.text('fontColor', '#333')}
            text={text('Component', 'RadioButton')}
        />
    )
})
