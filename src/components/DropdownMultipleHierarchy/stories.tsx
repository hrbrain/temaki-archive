import * as React from 'react'
import * as DropdownMultipleHierarchy from './'
import { boolean, text } from '@storybook/addon-knobs'

export default {
    title: 'Components/DropdownMultipleHierarchy'
}

const getChildren = (parentValue: string): DropdownMultipleHierarchy.Item[] => {
    return [...Array(2)].map((_, i) => {
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
    // NOTE:
    // getChildrenで生成された"部署-1-1"などを入れるとstoryshotsで"Items don't have the value"エラー(by Body.tsx)になるので"部署-1"だけにする
    // Storybook上の挙動は問題ない
    const [values, setValues] = React.useState<string[]>(['部署-1'])
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
