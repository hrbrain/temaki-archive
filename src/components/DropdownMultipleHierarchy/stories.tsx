import * as React from 'react'
import * as DropdownMultipleHierarchy from './'
import { boolean, text } from '@storybook/addon-knobs'
import { dummyItems } from './dummyItems'

export default {
    title: 'Components/DropdownMultipleHierarchy'
}

// getChildrenを利用して初期化するとstoryshotsが落ちるので一旦コメントアウト

// const getChildren = (parentValue: string): DropdownMultipleHierarchy.Item[] => {
//     return [...Array(2)].map((_, i) => {
//         const val = `${parentValue}-${i + 1}`
//         const hasChildren = val.length < 20
//         return {
//             label: val,
//             value: val,
//             children: hasChildren ? getChildren(val) : undefined
//         }
//     })
// }

// const items = [
//     {
//         label: '部署-1',
//         value: '部署-1',
//         children: getChildren('部署-1')
//     }
// ]

// export const Default = () => {
//     const [values, setValues] = React.useState<string[]>([])
//     const onChange = React.useCallback((values: string[]) => {
//         setValues(values)
//     }, [])

//     return (
//         <div className="ml-20 mt-10">
//             <DropdownMultipleHierarchy.Component
//                 values={values}
//                 items={items}
//                 placeholder={text('placeholder', '選択してください')}
//                 disabled={boolean('disabled', false)}
//                 isError={boolean('isError', false)}
//                 errorMessage={text('ErrorMessage', '')}
//                 width={text('width', '250px')}
//                 onChange={onChange}
//                 diff={boolean('diff', false)}
//             />
//         </div>
//     )
// }

// export const WithInitialValue = () => {
//     const [values, setValues] = React.useState<string[]>(['部署-1', '部署-1-1'])
//     const onChange = React.useCallback((values: string[]) => {
//         setValues(values)
//     }, [])

//     return (
//         <div className="ml-20 mt-10">
//             <DropdownMultipleHierarchy.Component
//                 values={values}
//                 items={items}
//                 placeholder={text('placeholder', '選択してください')}
//                 disabled={boolean('disabled', false)}
//                 isError={boolean('isError', false)}
//                 errorMessage={text('ErrorMessage', '')}
//                 width={text('width', '250px')}
//                 onChange={onChange}
//                 diff={boolean('diff', false)}
//             />
//         </div>
//     )
// }

const itemsForSearch = [
    {
        label: '全社',
        value: '全社',
        children: [
            {
                label: '部署1',
                value: '部署1',
                children: [
                    {
                        label: '0',
                        value: '0',
                        children: [
                            {
                                label: '田中チーム',
                                value: '田中チーム'
                            },
                            {
                                label: '田村チーム',
                                value: '田村チーム'
                            },
                            {
                                label: '山田チーム',
                                value: '山田チーム'
                            }
                        ]
                    },
                    {
                        label: '1',
                        value: '1',
                        children: [
                            {
                                label: '山中チーム',
                                value: '山中チーム'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        label: '全社2',
        value: '全社2',
        children: [
            {
                label: '部署2',
                value: '部署2',
                children: [
                    {
                        label: '0',
                        value: '0',
                        children: [
                            {
                                label: '高橋チーム',
                                value: '高橋チーム'
                            },
                            {
                                label: '高村チーム',
                                value: '高村チーム'
                            },
                            {
                                label: '村田チーム',
                                value: '村田チーム'
                            }
                        ]
                    },
                    {
                        label: '1',
                        value: '1',
                        children: [
                            {
                                label: '中村チーム',
                                value: '中村チーム'
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

export const WithItemsForSearch = () => {
    const [values, setValues] = React.useState<string[]>([])
    const onChange = React.useCallback((values: string[]) => {
        setValues(values)
    }, [])

    return (
        <div className="ml-20 mt-10">
            <DropdownMultipleHierarchy.Component
                values={values}
                items={itemsForSearch}
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

export const リアルな組織図サンプル = () => {
    const [values, setValues] = React.useState<string[]>([])
    const onChange = React.useCallback((values: string[]) => {
        setValues(values)
    }, [])

    return (
        <div className="ml-20 mt-10">
            <DropdownMultipleHierarchy.Component
                values={values}
                items={dummyItems}
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
