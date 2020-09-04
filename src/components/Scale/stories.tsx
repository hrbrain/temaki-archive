import * as React from 'react'
import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import * as ScaleController from './controller'
import * as ScaleBody from './body'

storiesOf('Components|Scale', module).add('Default', () => {
    return (
        <>
            <ScaleController.Component
                scale={Number(text('scale', '1'))}
                onChangeScale={action('onChangeScale')}
            />
            <ScaleBody.Component scale={Number(text('scale', '1'))}>
                <div>ScaleTarget</div>
            </ScaleBody.Component>
        </>
    )
})
