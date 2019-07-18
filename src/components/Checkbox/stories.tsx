import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import Checkbox from './index'

storiesOf('Components|Checkbox', module).add('all', () => {
    return (
        <Checkbox
            onClick={action('onClick')}
            checked={boolean('Checked', false)}
            indeterminate={boolean('Indeterminate', false)}
            text={text('Text', 'Checkbox')}
        />
    )
})
