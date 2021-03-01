import * as React from 'react'
import * as Datepicker from './index'
import * as Knobs from '@storybook/addon-knobs'
import * as Actions from '@storybook/addon-actions'

const name = 'date'
const defaultDate = new Date('2019/12/25')

const testKnobDate = (label: string, defaultValue: Date) => {
    const stringTimestamp = Knobs.date(label, defaultValue)
    return new Date(stringTimestamp)
}

export default {
    title: 'Components/Datepicker'
}

export const Standard = () => (
    <Datepicker.Component
        date={testKnobDate(name, defaultDate)}
        placeholderText={Knobs.text('placeholderText', '')}
        displayFormat={Knobs.text('displayFormat', 'YYYY年M月D日')}
        monthFormat={Knobs.text('monthFormat', 'YYYY[年]M[月]')}
        onChange={Actions.action('onChange')}
        width={Knobs.text('width', '100%')}
        selectedColor={Knobs.text('selectedColor', '')}
        defaultHoverColor={Knobs.text('defaultHoverColor', '')}
        disabled={Knobs.boolean('disabled', false)}
        errored={Knobs.boolean('Error', false)}
        errorMessage={Knobs.text('ErrorMessage', '')}
    />
)

export const Null = () => (
    <Datepicker.Component
        date={null}
        placeholderText={Knobs.text('placeholderText', '')}
        displayFormat={Knobs.text('displayFormat', 'YYYY年M月D日')}
        monthFormat={Knobs.text('monthFormat', 'YYYY[年]M[月]')}
        onChange={Actions.action('onChange')}
        width={Knobs.text('width', '100%')}
        selectedColor={Knobs.text('selectedColor', '')}
        defaultHoverColor={Knobs.text('defaultHoverColor', '')}
        disabled={Knobs.boolean('disabled', false)}
        errored={Knobs.boolean('Error', false)}
        errorMessage={Knobs.text('ErrorMessage', '')}
        isOutsideRange={Datepicker.isInclusivelyBeforeDay(defaultDate)}
    />
)

export const isOutsideRange = () => (
    <Datepicker.Component
        date={testKnobDate(name, defaultDate)}
        placeholderText={Knobs.text('placeholderText', '')}
        displayFormat={Knobs.text('displayFormat', 'YYYY年M月D日')}
        monthFormat={Knobs.text('monthFormat', 'YYYY[年]M[月]')}
        onChange={Actions.action('onChange')}
        width={Knobs.text('width', '100%')}
        selectedColor={Knobs.text('selectedColor', '')}
        defaultHoverColor={Knobs.text('defaultHoverColor', '')}
        disabled={Knobs.boolean('disabled', false)}
        errored={Knobs.boolean('Error', false)}
        errorMessage={Knobs.text('ErrorMessage', '')}
        isOutsideRange={Datepicker.isInclusivelyBeforeDay(defaultDate)}
    />
)
