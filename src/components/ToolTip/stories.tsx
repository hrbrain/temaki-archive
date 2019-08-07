import { text, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import * as ToolTip from './index'

storiesOf('Components|ToolTip', module).add('all', () => {
    return (
        <div className="m-20">
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
        </div>
    )
})
