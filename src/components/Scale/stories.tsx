import * as React from 'react'
import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import * as ScaleController from './controller'
import * as ScaleRange from './range'

storiesOf('Components|Scale', module)
    .add('Vertical', () => (
        <>
            <ScaleController.Component
                scale={Number(text('scale', '1'))}
                onChangeScale={action('onChangeScale')}
                min={Number(text('min', '0'))}
                max={Number(text('max', '1.2'))}
                step={Number(text('step', '0.1'))}
            />
            <ScaleRange.Component
                scale={Number(text('scale', '1'))}
                displayType={'Vertical'}
            >
                <div>ScaleTarget</div>
            </ScaleRange.Component>
        </>
    ))
    .add('Horizontal', () => (
        <>
            <ScaleController.Component
                scale={Number(text('scale', '1'))}
                onChangeScale={action('onChangeScale')}
                min={Number(text('min', '0'))}
                max={Number(text('max', '1.2'))}
                step={Number(text('step', '0.1'))}
            />
            <ScaleRange.Component
                scale={Number(text('scale', '1'))}
                displayType={'Horizontal'}
            >
                <div>ScaleTarget</div>
            </ScaleRange.Component>
        </>
    ))
