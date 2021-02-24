import * as React from 'react'
import * as DropdownMultipleHierarchy from './'
import { boolean, text } from '@storybook/addon-knobs'

export default {
    title: 'Components/DropdownMultipleHierarchy'
}

const getChildren = (parentValue: string): DropdownMultipleHierarchy.Item[] => {
    return [...Array(2)].map((_v, i) => {
        const val = `${parentValue}-${i + 1}`
        const hasChildren = val.length < 20
        return {
            label: val,
            value: val,
            children: hasChildren ? getChildren(val) : undefined
        }
    })
}

const items = [
    {
        label: '部署-1',
        value: '部署-1',
        children: getChildren('部署-1')
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
                items={items}
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
    const [values, setValues] = React.useState<string[]>([
        '部署-1',
        '部署-1-1',
        '部署-1-1-1-1'
    ])
    const onChange = React.useCallback((values: string[]) => {
        setValues(values)
    }, [])

    return (
        <div className="ml-20 mt-10">
            <DropdownMultipleHierarchy.Component
                values={values}
                items={items}
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
