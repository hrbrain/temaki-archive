import * as React from 'react'
import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import * as StepNumber from '.'

storiesOf('Components|Scale', module).add('Default', () => (
    <>
        <StepNumber.Component
            defaultValue={Number(text('scale', '1'))}
            min={Number(text('min', '0'))}
            max={Number(text('max', '10'))}
            step={Number(text('step', '1'))}
            unit={text('unit', '回')}
            rate={1}
        />
    </>
))
