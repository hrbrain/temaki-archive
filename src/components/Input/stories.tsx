import { action } from '@storybook/addon-actions'
import { boolean, number, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import Input from './index'

storiesOf('Components|Input', module)
    .add('Text', () => (
        <Input
            format="text"
            value={text('Value', '')}
            placeholder={text('Placeholder', 'Enter your name')}
            onChange={action('onChange')}
            onBlur={action('onBlur')}
            errored={boolean('Error', false)}
        />
    ))
    .add('Number', () => (
        <Input
            format="number"
            value={number('Value', 0)}
            placeholder={text('Placeholder', 'Enter your age')}
            onChange={action('onChange')}
            onBlur={action('onBlur')}
            errored={boolean('Error', false)}
        />
    ))
