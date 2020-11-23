import * as React from 'react'
import { storiesOf } from '@storybook/react'
import * as DropdownMultipleHierarchy from '.'
import { action } from '@storybook/addon-actions'

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
                        value: 'value1-1-1'
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
    selectedValues: ['value1-1', 'value1-1-1', 'value2'],
    items,
    onClickItem: action('onClickItem'),
    width: '300px'
}

storiesOf('Components|DropdownMultipleHierarchy', module).add('default', () => (
    <div className="ml-20 mt-10">
        <DropdownMultipleHierarchy.Component {...props} />
    </div>
))
