import * as Enzyme from 'enzyme'
import * as React from 'react'
import { act } from 'react-dom/test-utils'
import { mountWithTheme } from '~/__test__/utils'
import * as DropdownMultipleHierarchy from '.'
// import * as ItemList from './itemList'
// import * as Theme from '~/modules/theme'
import 'jest-styled-components'

/***
 * コンポーネント用語
 * - ドロップダウン:           選択済みアイテム + トグルアイコン + border
 * - 選択済みアイテム:         選択したアイテム
 * - ドロップダウンオーバーレイ: 選択肢が表示される領域
 * - アイテム:                ドロップダウンの選択肢
 */

describe('DropdownMultipleHierarchy', () => {
    let wrapper: Enzyme.ReactWrapper
    let mockOnChange: jest.Mock
    let items: DropdownMultipleHierarchy.Item[]

    beforeEach(() => {
        mockOnChange = jest.fn()
        items = [
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
                    }
                ]
            },
            {
                label: 'label2',
                value: 'value2'
            }
        ]
        act(() => {
            wrapper = mountWithTheme(
                <DropdownMultipleHierarchy.Component
                    placeholder="placeholder"
                    items={items}
                    values={[]}
                    defaultExpanded={true}
                    isError={false}
                    width="250px"
                    onChange={mockOnChange}
                />
            )
        })
    })

    it('コンポーネントが定義されている', () => {
        expect(wrapper).toBeDefined()
    })

    describe('ドロップダウン', () => {
        it('エラー時にborderが赤になる', () => {
            wrapper = mountWithTheme(
                <DropdownMultipleHierarchy.Component
                    placeholder="placeholder"
                    items={items}
                    values={[]}
                    isError={true}
                    width="250px"
                    onChange={mockOnChange}
                />
            )
            expect(wrapper.find('div[data-test="body"]')).toHaveStyleRule(
                'border',
                '1px solid rgb(224,85,72)'
            )
        })

        it('選択済みアイテムがない時はplaceholderが表示される', () => {
            wrapper = mountWithTheme(
                <DropdownMultipleHierarchy.Component
                    placeholder="placeholder"
                    items={items}
                    values={[]}
                    isError={true}
                    width="250px"
                    onChange={mockOnChange}
                />
            )
            expect(wrapper.find('div[data-test="selectedItems"]').text()).toBe(
                'placeholder'
            )
        })

        it('選択済みアイテムが本体に表示されている', () => {
            wrapper = mountWithTheme(
                <DropdownMultipleHierarchy.Component
                    placeholder="placeholder"
                    items={items}
                    values={['value1']}
                    isError={true}
                    width="250px"
                    onChange={mockOnChange}
                />
            )
            expect(wrapper.find('div[data-test="selectedItems"]').text()).toBe(
                'label1'
            )
        })

        it.todo(
            'ドロップダウンの幅を選択済みアイテムが超えた場合、2段表示になる'
        )
    })

    describe('ドロップダウンオーバーレイ', () => {
        it('アイテムがクリックされた時にonClickItemが呼ばれる', () => {
            act(() => {
                wrapper.find('div[data-test="body"]').simulate('click')
                wrapper
                    .find('div[data-test="item-clickArea"]')
                    .first()
                    .simulate('click')
                expect(mockOnChange).toHaveBeenCalled()
            })
        })

        it.todo('アイテムがクリックされた時に該当アイテムにチェックが入る')

        it.todo(
            'ドロップダウンオーバーレイ内でアイテムが階層構造で表現されている'
        )

        it.todo(
            'ドロップダウンオーバーレイの幅がいっぱいになった場合、横スクロールになる'
        )

        it.todo(
            '親階層のアイテムにあるツリートグルボタンを押すと、アイコンが90度右回転する'
        )

        it.todo(
            '親階層のアイテムが選択された時は、子階層のアイテムも全て選択される'
        )

        // TODO: 仕様検討
        it.todo(
            '親階層のアイテムを選択した後、子階層のアイテムを1つ選択解除した場合、'
        )

        // TODO: 仕様検討
        it.todo(
            'ある親階層の配下の子階層のアイテムが全て選択された時、親階層のアイテムは'
        )
    })

    describe.skip('検索', () => {
        // TODO
    })
})
