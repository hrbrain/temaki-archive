import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import * as Checkbox from './index'

storiesOf('Components|Checkbox', module).add('all', () => {
    return (
        <Checkbox.Component
            onClick={action('onClick')}
            checked={boolean('Checked', false)}
            disabled={boolean('disabled', false)}
            indeterminate={boolean('Indeterminate', false)}
            text={text('Component', 'Checkbox')}
        />
    )
})
