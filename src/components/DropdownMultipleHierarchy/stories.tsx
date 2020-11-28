import * as React from 'react'
import { storiesOf } from '@storybook/react'
import * as DropdownMultipleHierarchy from '.'
import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'

const items: DropdownMultipleHierarchy.Item[] = [
    {
        label: 'label1',
        value: 'value1',
        children: [
            {
                label: 'label1-1',
                value: 'value1-1',
                children: [
                    {
                        label: 'label1-1-1',
                        value: 'value1-1-1',
                        children: [
                            {
                                label: 'label1-1-1-1',
                                value: 'value1-1-1-1'
                            },
                            {
                                label: 'label1-1-1-2',
                                value: 'value1-1-1-2'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'label1-2',
                value: 'value1-2',
                children: [
                    {
                        label: 'label1-2-1',
                        value: 'value1-2-1'
                    }
                ]
            }
        ]
    },
    {
        label: 'label2',
        value: 'value2'
    }
]

const props: DropdownMultipleHierarchy.Props = {
    values: ['value1-1', 'value1-1-1', 'value2', 'value1-1-1-2'],
    items,
    placeholder: text('placeholder', '選択してください'),
    onClickRemove: action('onClickRemove'),
    isError: boolean('isError', false),
    errorMessage: text('ErrorMessage', ''),
    width: text('width', '250px'),
    onChange: action('onChange'),
    diff: boolean('Diff', false)
}

storiesOf('Components|DropdownMultipleHierarchy', module).add('default', () => (
    <div className="ml-20 mt-10">
        <DropdownMultipleHierarchy.Component {...props} />
    </div>
))
