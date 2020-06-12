import { action } from '@storybook/addon-actions'
import { boolean, number, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import * as Input from './index'

storiesOf('Components|Input', module)
    .add('Text', () => (
        <Input.Component
            format="text"
            value={text('Value', '')}
            placeholder={text('Placeholder', 'Enter your name')}
            onChange={action('onChange')}
            onBlur={action('onBlur')}
            errored={boolean('Error', false)}
            errorMessage={text('Error Message', 'Error Message')}
            onKeyDown={action('onKeyDown')}
            onKeyUp={action('onKeyUp')}
        />
    ))
    .add('Number', () => (
        <Input.Component
            format="number"
            unit={text('単位', '')}
            value={number('Value', 0)}
            placeholder={text('Placeholder', 'Enter your age')}
            onChange={action('onChange')}
            onBlur={action('onBlur')}
            errored={boolean('Error', false)}
            errorMessage={text('Error Message', 'Error Message')}
            onKeyDown={action('onKeyDown')}
            onKeyUp={action('onKeyUp')}
        />
    ))
    .add('NumberWithDecimalPlace', () => (
        <Input.Component
            format="number"
            unit={text('単位', '')}
            value={number('Value', 0)}
            placeholder={text('Placeholder', 'Enter your age')}
            onChange={action('onChange')}
            onBlur={action('onBlur')}
            errored={boolean('Error', false)}
            errorMessage={text('Error Message', 'Error Message')}
            onKeyDown={action('onKeyDown')}
            onKeyUp={action('onKeyUp')}
            step={number('小数点第', 0)}
            type="number"
        />
    ))
