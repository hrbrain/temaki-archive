import { storiesOf } from '@storybook/react'
import * as React from 'react'
import * as Datepicker from './index'
import * as Knobs from '@storybook/addon-knobs'
import * as Actions from '@storybook/addon-actions'

storiesOf('Components|Datepicker', module).add('Standard', () => (
    <Datepicker.Component
        displayFormat={Knobs.text('displayFormat', 'YYYY/MM/DD')}
        numberOfMonths={Knobs.number('numberOfMonths', 1)}
        monthFormat={Knobs.text('monthFormat', 'YYYY[/]MM')}
        onFocusChange={Actions.action('onFocusChange')}
        onDateChange={Actions.action('onDateChange')}
    />
))
