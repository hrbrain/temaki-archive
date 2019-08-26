import * as Enzyme from 'enzyme'
import * as React from 'react'
import { act } from 'react-dom/test-utils'
import { mountWithTheme } from '~/__test__/utils'
import * as DropdownMultiple from './index'
import * as ItemList from './itemList'
import 'jest-styled-components'

describe('Dropdown(Multi)コンポーネントのテスト', () => {
    let wrapper: Enzyme.ReactWrapper
    let mockOnClickItem: jest.Mock
    let items: ItemList.Item[]

    beforeEach(() => {
        mockOnClickItem = jest.fn()
        items = [
            { text: 'りんご' },
            { text: 'いちご' },
            { text: 'バナナ' },
            { text: 'メロン' },
            { text: 'さくらんぼ' },
            { text: 'ぶどう' }
        ]
        act(() => {
            wrapper = mountWithTheme(
                <DropdownMultiple.Component
                    placeholder="placeholder"
                    items={items}
                    selected={[]}
                    isError={false}
                    width={200}
                    onClickItem={mockOnClickItem}
                />
            )
        })
    })

    it('コンポーネントが定義されている', () => {
        expect(wrapper).toBeDefined()
    })

    it('StateのisVisibleによってul要素が見え隠れする', () => {
        expect(wrapper.find('ul[data-test="itemList"].hide')).toHaveLength(1)
        wrapper.find('div[data-test="body"]').simulate('click')
        expect(wrapper.find('ul[data-test="itemList"].hide')).toHaveLength(0)

        const itemListEl = wrapper.find('ul[data-test="itemList"]')
        expect(itemListEl).toHaveStyleRule('visibility', 'visible')
        expect(itemListEl).toHaveStyleRule('visibility', 'hidden', {
            modifier: '&.hide'
        })
    })

    it('StateのisVisibleがtrueの時、borderが緑になっている', () => {
        wrapper.find('div[data-test="body"]').simulate('click')
        expect(wrapper.find('div[data-test="body"]')).toHaveStyleRule(
            'border',
            '1px solid rgb(114,206,92)'
        )
    })

    it('エラー時にborderが赤になっている', () => {
        wrapper = mountWithTheme(
            <DropdownMultiple.Component
                placeholder="placeholder"
                items={items}
                selected={[]}
                isError={true}
                width={200}
                onClickItem={mockOnClickItem}
            />
        )
        expect(wrapper.find('div[data-test="body"]')).toHaveStyleRule(
            'border',
            '1px solid rgb(224,85,72)'
        )
    })

    it('リストが選択されていない時に、placeholderが本体に表示されている', () => {
        wrapper = mountWithTheme(
            <DropdownMultiple.Component
                placeholder="placeholder"
                items={items}
                selected={[]}
                isError={true}
                width={200}
                onClickItem={mockOnClickItem}
            />
        )
        expect(wrapper.find('div[data-test="text"]').text()).toBe('placeholder')
    })

    it('選択されたリストがある時に、本体に表示されている', () => {
        wrapper = mountWithTheme(
            <DropdownMultiple.Component
                placeholder="placeholder"
                items={items}
                selected={['りんご', 'いちご']}
                isError={true}
                width={200}
                onClickItem={mockOnClickItem}
            />
        )
        expect(wrapper.find('div[data-test="text"]').text()).toBe(
            'りんごいちご'
        )
    })

    it('ドロップダウンの中身がクリックされた時にonClickItemが呼ばれる', () => {
        act(() => {
            wrapper.find('div[data-test="body"]').simulate('click')
            wrapper
                .find('li')
                .first()
                .simulate('click')
            expect(mockOnClickItem).toHaveBeenCalled()
        })
    })
})
