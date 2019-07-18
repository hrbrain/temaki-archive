import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import Text from './index'

storiesOf('Components|Text', module).add('Standard', () => (
    <Text>{text('Value', 'Hello')}</Text>
))
