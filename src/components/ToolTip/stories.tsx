import { text, select } from '@storybook/addon-knobs'
import * as React from 'react'
import * as ToolTip from './index'

// eslint-disable-next-line import/no-default-export
export default {
    title: 'Components/ToolTip'
}

export const All = () => {
    return (
        <ToolTip.Component
            text={text('Component', 'テキスト要素')}
            direction={select(
                'Direction',
                {
                    top: 'top',
                    right: 'right',
                    bottom: 'bottom',
                    left: 'left'
                },
                'top'
            )}
        />
    )
}
