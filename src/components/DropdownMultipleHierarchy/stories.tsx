import * as React from 'react'
import * as DropdownMultipleHierarchy from './'
import { boolean, text, object as knobsObject } from '@storybook/addon-knobs'
import { realisticItems } from './realisticItems'

export default {
    title: 'Components/DropdownMultipleHierarchy'
}

const defaultItems = [
    {
        label: '部署1',
        value: 'value1',
        children: [
            {
                label: '部署1-1',
                value: 'value1-1',
                children: [
                    {
                        label: '部署1-1-1',
                        value: 'value1-1-1'
                    }
                ]
            },
            {
                label: '部署1-2',
                value: 'value1-2'
            }
        ]
    }
]

export const Default = () => {
    const [values, setValues] = React.useState<string[]>([])
    const onChange = React.useCallback((values: string[]) => {
        setValues(values)
    }, [])

    return (
        <div className="ml-20 mt-10">
            <DropdownMultipleHierarchy.Component
                values={values}
                items={knobsObject('items', defaultItems)}
                placeholder={text('placeholder', '選択してください')}
                disabled={boolean('disabled', false)}
                isError={boolean('isError', false)}
                errorMessage={text('ErrorMessage', '')}
                width={text('width', '250px')}
                onChange={onChange}
                diff={boolean('diff', false)}
            />
        </div>
    )
}

export const WithInitialValue = () => {
    const [values, setValues] = React.useState<string[]>(['value1', 'value1-1'])
    const onChange = React.useCallback((values: string[]) => {
        setValues(values)
    }, [])

    return (
        <div className="ml-20 mt-10">
            <DropdownMultipleHierarchy.Component
                values={values}
                items={knobsObject('items', defaultItems)}
                placeholder={text('placeholder', '選択してください')}
                disabled={boolean('disabled', false)}
                isError={boolean('isError', false)}
                errorMessage={text('ErrorMessage', '')}
                width={text('width', '250px')}
                onChange={onChange}
                diff={boolean('diff', false)}
            />
        </div>
    )
}

export const 組織図サンプル = () => {
    const [values, setValues] = React.useState<string[]>([])
    const onChange = React.useCallback((values: string[]) => {
        setValues(values)
    }, [])

    return (
        <div className="ml-20 mt-10">
            <DropdownMultipleHierarchy.Component
                values={values}
                items={knobsObject('items', realisticItems)}
                placeholder={text('placeholder', '選択してください')}
                disabled={boolean('disabled', false)}
                isError={boolean('isError', false)}
                errorMessage={text('ErrorMessage', '')}
                width={text('width', '250px')}
                onChange={onChange}
                diff={boolean('diff', false)}
            />
        </div>
    )
}
