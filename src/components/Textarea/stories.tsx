import { action } from '@storybook/addon-actions'
import { text, number, boolean } from '@storybook/addon-knobs'
import * as React from 'react'
import * as Textarea from './index'

export default {
    title: 'Components/Textarea'
}

export const All = () => {
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
}

All.story = {
    name: 'all'
}
