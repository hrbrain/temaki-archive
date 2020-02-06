import { storiesOf } from '@storybook/react'
import * as React from 'react'
import * as DatepickerRange from './index'
import * as Knobs from '@storybook/addon-knobs'
import * as Actions from '@storybook/addon-actions'

storiesOf('Components|DateRangePicker', module)
    .add('Standard', () => (
        <DatepickerRange.Component
            startDate={Knobs.date('startDate', new Date('2019/12/1'))}
            endDate={Knobs.date('endDate', new Date('2019/12/31'))}
            startDatePlaceholderText={Knobs.text(
                'startDatePlaceholderText',
                ''
            )}
            endDatePlaceholderText={Knobs.text('endDatePlaceholderText', '')}
            displayFormat={Knobs.text('displayFormat', 'YYYY年M月D日')}
            monthFormat={Knobs.text('monthFormat', 'YYYY[年]M[月]')}
            onChange={Actions.action('onChange')}
            width={Knobs.text('width', '300px')}
            errored={Knobs.boolean('Error', false)}
            errorMessage={Knobs.text('ErrorMessage', '')}
        />
    ))
    .add('Null', () => (
        <DatepickerRange.Component
            startDate={null}
            endDate={null}
            startDatePlaceholderText={Knobs.text(
                'startDatePlaceholderText',
                ''
            )}
            endDatePlaceholderText={Knobs.text('endDatePlaceholderText', '')}
            displayFormat={Knobs.text('displayFormat', 'YYYY年M月D日')}
            monthFormat={Knobs.text('monthFormat', 'YYYY[年]M[月]')}
            onChange={Actions.action('onChange')}
            width={Knobs.text('width', '300px')}
            errored={Knobs.boolean('Error', false)}
            errorMessage={Knobs.text('ErrorMessage', '')}
        />
    ))
