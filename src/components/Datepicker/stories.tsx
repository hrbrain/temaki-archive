import { storiesOf } from '@storybook/react'
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

storiesOf('Components|Datepicker', module)
    .add('Standard', () => (
        <Datepicker.Component
            date={testKnobDate(name, defaultDate)}
            placeholderText={Knobs.text('placeholderText', '')}
            displayFormat={Knobs.text('displayFormat', 'yyyy年M月d日')}
            monthFormat={Knobs.text('monthFormat', 'yyyy[年]M[月]')}
            onChange={Actions.action('onChange')}
            width={Knobs.text('width', '100%')}
            selectedColor={Knobs.text('selectedColor', '')}
            defaultHoverColor={Knobs.text('defaultHoverColor', '')}
            errored={Knobs.boolean('Error', false)}
            errorMessage={Knobs.text('ErrorMessage', '')}
        />
    ))
    .add('Null', () => (
        <Datepicker.Component
            date={null}
            placeholderText={Knobs.text('placeholderText', '')}
            displayFormat={Knobs.text('displayFormat', 'yyyy年M月d日')}
            monthFormat={Knobs.text('monthFormat', 'yyyy[年]M[月]')}
            onChange={Actions.action('onChange')}
            width={Knobs.text('width', '100%')}
            selectedColor={Knobs.text('selectedColor', '')}
            defaultHoverColor={Knobs.text('defaultHoverColor', '')}
            errored={Knobs.boolean('Error', false)}
            errorMessage={Knobs.text('ErrorMessage', '')}
        />
    ))
