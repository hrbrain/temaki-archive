import * as Enzyme from 'enzyme'
import * as React from 'react'
import { act } from 'react-dom/test-utils'
import { mountWithTheme } from '~/__test__/utils'
import * as DropdownSingle from './index'
import * as ItemList from './ItemList'
import * as Theme from '~/modules/theme'
import 'jest-styled-components'

describe('Dropdown(Single)コンポーネントのテスト', () => {
    let wrapper: Enzyme.ReactWrapper
    let mockOnChange: jest.Mock
    let mockOnClickBody: jest.Mock
    let items: ItemList.Item[]

    beforeEach(() => {
        mockOnChange = jest.fn()
        mockOnClickBody = jest.fn()
        items = [
            { value: '', text: '' },
            { value: '1', text: 'りんご' },
            { value: '2', text: 'いちご' },
            { value: '3', text: 'バナナ' },
            { value: '4', text: 'メロン' },
            { value: '5', text: 'さくらんぼ' },
            { value: '6', text: 'ぶどう' }
        ]
        act(() => {
            wrapper = mountWithTheme(
                <DropdownSingle.Component
                    type={'default'}
                    placeholder="placeholder"
                    items={items}
                    value=""
                    isError={false}
                    width="200px"
                    onChange={mockOnChange}
                />
            )
        })
    })

    it('コンポーネントが定義されている', () => {
        expect(wrapper).toBeDefined()
    })

    it('StateのisVisibleによってul要素が見え隠れする', () => {
        expect(wrapper.find('ul[data-test="itemList"]')).toHaveStyleRule(
            'visibility',
            'hidden'
        )
        wrapper.find('div[data-test="body"]').simulate('click')
        expect(wrapper.find('ul[data-test="itemList"]')).toHaveStyleRule(
            'visibility',
            'visible'
        )
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
            <DropdownSingle.Component
                type={'default'}
                placeholder="placeholder"
                items={items}
                value=""
                isError={true}
                width="200px"
                onChange={mockOnChange}
            />
        )
        expect(wrapper.find('div[data-test="body"]')).toHaveStyleRule(
            'border',
            '1px solid rgb(224,85,72)'
        )
    })

    // TODO: やる
    // it('リストが選択されていない時に、placeholderが本体に表示されている', () => {
    //     wrapper = mountWithTheme(
    //         <DropdownSingle.Component
    //             placeholder="placeholder"
    //             items={items}
    //             value=""
    //             isError={true}
    //             width="200px"
    //             onChange={mockOnChange}
    //         />
    //     )
    //     expect(wrapper.find('div[data-test="text"]').text()).toBe('placeholder')
    // })

    it('選択されたリストがある時に、本体に表示されている', () => {
        wrapper = mountWithTheme(
            <DropdownSingle.Component
                type={'default'}
                placeholder="placeholder"
                items={items}
                value="1"
                isError={true}
                width="250px"
                onChange={mockOnChange}
            />
        )
        expect(wrapper.find('div[data-test="text"]').text()).toBe('りんご')
    })

    it('選択されたリストがある時に、チェックが入っている', () => {
        wrapper = mountWithTheme(
            <DropdownSingle.Component
                type={'default'}
                placeholder="placeholder"
                items={items}
                value=""
                isError={true}
                width="250px"
                onChange={mockOnChange}
            />
        )
        expect(
            wrapper
                .find('ul[data-test="itemList"]')
                .children()
                .first()
                .find('div')
                .first()
        ).toHaveStyleRule('fill', 'rgb(51,51,51)', {
            modifier: '& #fill'
        })
    })

    it('ドロップダウンの中身がクリックされた時にonClickItemが呼ばれる', () => {
        act(() => {
            wrapper.find('div[data-test="body"]').simulate('click')
            wrapper
                .find('li')
                .first()
                .simulate('click')
            expect(mockOnChange).toHaveBeenCalled()
        })
    })

    it('Diffが渡されている時に色が変わる', () => {
        act(() => {
            wrapper = mountWithTheme(
                <DropdownSingle.Component
                    type={'default'}
                    placeholder="placeholder"
                    items={items}
                    value=""
                    isError={false}
                    width="200px"
                    onChange={mockOnChange}
                    diff
                />
            )
            const el = wrapper.find('div[data-test="body"]')

            expect(el).toHaveStyleRule(
                'background-color',
                Theme.defaultTheme.colors.utilities.paleYellow.replace(/ /g, '')
            )
        })
    })

    it('onClickBodyを押すことができる', () => {
        act(() => {
            wrapper = mountWithTheme(
                <DropdownSingle.Component
                    type={'default'}
                    placeholder="placeholder"
                    items={items}
                    value=""
                    isError={false}
                    width="250px"
                    onClickBody={mockOnClickBody}
                    onChange={mockOnChange}
                />
            )
        })
        wrapper.find('div[data-test="body"]').simulate('click')
        expect(mockOnClickBody).toHaveBeenCalled()
    })
})
