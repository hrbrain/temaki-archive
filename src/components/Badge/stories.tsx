import { number } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import * as Badge from './index'

storiesOf('Components|Badge', module).add('all', () => {
    return <Badge.Component count={number('Count', 10)} />
})
