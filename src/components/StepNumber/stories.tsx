import * as React from 'react'
import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
import * as StepNumber from '.'

// eslint-disable-next-line import/no-default-export
export default {
    title: 'Components/StepNumber'
}

export const Default = () => (
    <>
        <StepNumber.Component
            defaultValue={Number(text('defaultValue', '1'))}
            min={Number(text('min', '0'))}
            max={Number(text('max', '10'))}
            step={Number(text('step', '1'))}
            unit={text('unit', '個')}
            rate={Number(text('rate', '1'))}
            onChangeValue={action('onChangeValue')}
        />
    </>
)
