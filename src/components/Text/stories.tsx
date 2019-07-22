import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import * as Text from './index'

storiesOf('Components|Component', module).add('Standard', () => (
    <Text.Component>{text('Value', 'Hello')}</Text.Component>
))
