import * as Knobs from '@storybook/addon-knobs'
import * as React from 'react'

import * as Loading from './index'

// eslint-disable-next-line import/no-default-export
export default {
    title: 'Components/Loading'
}

export const All = () => {
    return (
        <Loading.Component
            visible={Knobs.boolean('visible', false)}
            text={Knobs.text('text', '')}
        />
    )
}

All.story = {
    name: 'all'
}
