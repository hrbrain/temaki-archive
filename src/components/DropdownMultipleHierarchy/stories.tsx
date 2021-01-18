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

storiesOf('Components/DropdownMultipleHierarchy', module).add(
    '多部署・5階層',
    () => {
        const [values, setValues] = React.useState<string[]>([])
        const onChange = React.useCallback((values: string[]) => {
            setValues(values)
        }, [])
        const items = React.useMemo(() => {
            let arr: DropdownMultipleHierarchy.Item[] = []
            for (let i = 1; i < 20; i++) {
                arr.push(generateItem(i.toString()))
            }
            return arr
        }, [])

        return (
            <div className="ml-20 mt-10">
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
    }
)

const generateItem = (rootNum: string): DropdownMultipleHierarchy.Item => ({
    label: `部署${rootNum}`,
    value: `value${rootNum}`,
    children: [
        {
            label: `部署${rootNum}-1`,
            value: `value${rootNum}-1`,
            children: [
                {
                    label: `部署${rootNum}-1-1`,
                    value: `value${rootNum}-1-1`,
                    children: [
                        {
                            label: `部署${rootNum}-1-1-1`,
                            value: `value${rootNum}-1-1-1`,
                            children: [
                                {
                                    label: `部署${rootNum}-1-1-1-1`,
                                    value: `value${rootNum}-1-1-1-1`
                                },
                                {
                                    label: `部署${rootNum}-1-1-1-2`,
                                    value: `value${rootNum}-1-1-1-2`
                                }
                            ]
                        },
                        {
                            label: `部署${rootNum}-1-1-2`,
                            value: `value${rootNum}-1-1-2`
                        }
                    ]
                },
                {
                    label: `部署${rootNum}-1-2`,
                    value: `value${rootNum}-1-2`
                }
            ]
        },
        {
            label: `部署${rootNum}-2`,
            value: `value${rootNum}-2`
        }
    ]
})
