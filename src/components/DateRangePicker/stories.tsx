import { storiesOf } from '@storybook/react'
import * as React from 'react'
import * as DatepickerRange from './index'
import * as Knobs from '@storybook/addon-knobs'
import * as Actions from '@storybook/addon-actions'

const startName = 'startDate'
const endName = 'endDate'
const defaultStartDate = new Date('2019/12/1')
const defaultEndDate = new Date('2019/12/31')

const testKnobDate = (label: string, defaultValue: Date) => {
    const stringTimestamp = Knobs.date(label, defaultValue)
    return new Date(stringTimestamp)
}

storiesOf('Components|DateRangePicker', module)
    .add('Standard', () => (
        <DatepickerRange.Component
            startDate={testKnobDate(startName, defaultStartDate)}
            endDate={testKnobDate(endName, defaultEndDate)}
            startDatePlaceholderText={Knobs.text(
                'startDatePlaceholderText',
                ''
            )}
            selectedRangeColor={Knobs.text("selectedRangeColor", "")}
            selectedColor={Knobs.text("selectedColor", "")}
            selectedHoverColor={Knobs.text("selectedHoverColor", "")}
            defaultHoverColor={Knobs.text("defaultHoverColor", "")}
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
            selectedRangeColor={Knobs.text("selectedRangeColor", "")}
            selectedColor={Knobs.text("selectedColor", "")}
            selectedHoverColor={Knobs.text("selectedHoverColor", "")}
            defaultHoverColor={Knobs.text("defaultHoverColor", "")}
            errored={Knobs.boolean('Error', false)}
            errorMessage={Knobs.text('ErrorMessage', '')}
        />
    ))
