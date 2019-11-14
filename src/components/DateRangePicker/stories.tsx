import { storiesOf } from '@storybook/react'
import * as React from 'react'
import * as DatepickerRange from './index'
import * as Knobs from '@storybook/addon-knobs'
import * as Actions from '@storybook/addon-actions'

storiesOf('Components|DateRangePicker', module).add('Standard', () => (
    <DatepickerRange.Component
        displayFormat={Knobs.text('displayFormat', 'YYYY年M月D日')}
        numberOfMonths={Knobs.number('numberOfMonths', 1)}
        monthFormat={Knobs.text('monthFormat', 'YYYY[年]M[月]')}
        onChange={Actions.action('onChange')}
    />
))