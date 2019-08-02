import { text, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import * as Toast from './index'

storiesOf(`Components|Toast`, module).add('all', () => (
    <Toast.Component
        label={text('Label', 'ラベル')}
        text={text('Text', 'ここにテキスト。')}
        type={select(
            'Type',
            {
                info: 'info',
                warning: 'warning'
            },
            'warning'
        )}
    />
))
