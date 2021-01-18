import { action } from '@storybook/addon-actions'
import { text, number, boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import * as Textarea from './index'

storiesOf('Components/Textarea', module).add('all', () => {
    return (
        <Textarea.Component
            value={text('value', '')}
            placeholder={text('placeholder', '文字を入力してください。')}
            minRows={number('minRows', 2)}
            maxRows={number('maxRows', 10)}
            errored={boolean('errored', false)}
            errorMessage={text('ErrorMessage', '')}
            onChange={action('onChange')}
            onFocus={action('onFocus')}
            onBlur={action('onBlur')}
        />
    )
})
