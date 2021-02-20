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

storiesOf('Components/DropdownMultipleHierarchy', module).add('default', () => (
    <div className="ml-20 mt-10">
        <DropdownMultipleHierarchy.Component
            values={[
                'value1-1',
                'value1-1-1',
                'value2',
                'value1-1-1-1',
                'value1-1-1-2'
            ]}
            items={items}
            placeholder={text('placeholder', '選択してください')}
            onClickRemove={action('onClickRemove')}
            isError={boolean('isError', false)}
            errorMessage={text('ErrorMessage', '')}
            width={text('width', '250px')}
            onChange={action('onChange')}
            diff={boolean('diff', false)}
        />
    </div>
))

storiesOf('Components/DropdownMultipleHierarchy', module).add('多部署', () => {
    const [values, setValues] = React.useState<string[]>([])
    const onChange = React.useCallback((values: string[]) => {
        setValues(values)
    }, [])
    const items = React.useMemo(() => {
        let arr: DropdownMultipleHierarchy.Item[] = []
        const ran = Math.floor(Math.random() * Math.floor(40)) as number
        for (let i = 1; i < ran + 1; i++) {
            const val = `部署${i}`
            const item = {
                label: val,
                value: val,
                children: getChildren(val)
            }
            arr.push(item)
        }
        return arr
    }, [])
    const count = React.useMemo(() => {
        let c = 0
        c += items.length
        for (const item of items) {
            c += getChildrenCount(item)
        }
        return c
    }, [items])

    return (
        <div className="ml-20 mt-10">
            <p>部署数: {count}</p>
            <DropdownMultipleHierarchy.Component
                values={values}
                items={items}
                placeholder={text('placeholder', '選択してください')}
                onClickRemove={action('onClickRemove')}
                isError={boolean('isError', false)}
                errorMessage={text('ErrorMessage', '')}
                width={text('width', '250px')}
                onChange={onChange}
                diff={boolean('diff', false)}
            />
        </div>
    )
})

const getChildren = (parentValue: string): DropdownMultipleHierarchy.Item[] => {
    const ran = Math.floor(Math.random() * Math.floor(10)) as number
    return [...Array(ran + 1)].map((_v, i) => {
        const val = `${parentValue}-${i}`
        const hasChildren =
            val.length < Math.floor(Math.random() * Math.floor(15))
        return {
            label: val,
            value: val,
            children: hasChildren ? getChildren(val) : undefined
        }
    })
}

const getChildrenCount = (item: DropdownMultipleHierarchy.Item) => {
    if (item === undefined) return 0
    if (item.children === undefined) return 0
    let count = 0
    count += item.children.length
    for (const child of item.children) {
        count += getChildrenCount(child)
    }
    return count
}
