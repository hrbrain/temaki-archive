import { storiesOf } from '@storybook/react'
import * as Knobs from '@storybook/addon-knobs'
import * as React from 'react'

import * as Loading from './index'

storiesOf('components|Loading', module).add('all', () => {
    return (
        <Loading.Component
            visible={Knobs.boolean('visible', false)}
            text={Knobs.text('text', '')}
        />
    )
})
