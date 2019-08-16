import * as Enzyme from 'enzyme'
import * as React from 'react'
import { act } from 'react-dom/test-utils'
import { mountWithTheme } from '~/__test__/utils'
import * as MeatballMenu from './index'
import * as KebabMenu from './index'
import * as IconFiles from '~/lib/iconFiles'

describe('MeatballKebabMenu', () => {
    let wrapper: Enzyme.ReactWrapper
    let mockOnClick: jest.Mock

    beforeEach(() => {
        mockOnClick = jest.fn()
        const item = [
            {
                item: 'リスト１',
                onClick: mockOnClick
            },
            {
                item: 'リスト２',
                onClick: mockOnClick
            },
            {
                item: 'リスト３',
                onClick: mockOnClick
            }
        ]
        act(() => {
            wrapper = mountWithTheme(
                <MeatballMenu.Component
                    position={'top'}
                    listItems={item}
                    iconSrc={IconFiles.icons.MenuV}
                    onClick={mockOnClick}
                />
            )
        })
        act(() => {
            wrapper = mountWithTheme(
                <KebabMenu.Component
                    position={'top'}
                    listItems={item}
                    iconSrc={IconFiles.icons.MenuV}
                    onClick={mockOnClick}
                />
            )
        })
    })

    it('コンポーネントが定義されている', () => {
        expect(wrapper.exists()).toBe(true)
    })

    it('MenuのonClickが呼ばれる', () => {
        wrapper.find('div[data-test="menu"]').simulate('click')
        expect(mockOnClick).toHaveBeenCalled()
    })

    it('ListItemのonClickが呼ばれる', () => {
        wrapper.find('li[data-test="listItem0"]').simulate('click')
        expect(mockOnClick).toHaveBeenCalled()
    })

    //TODO: MeatballMenuアイコンが表示されている
    //TODO: KebabMenuアイコンが表示される

    //TODO: 以下、CSSをテストするようにする
    it('Menuアイコンがtopに表示される', () => {
        wrapper = mountWithTheme(
            <MeatballMenu.Component
                listItems={[{ item: 'dummy', onClick: mockOnClick }]}
                iconSrc={IconFiles.icons.MenuV}
                position={'top'}
                onClick={mockOnClick}
            />
        )
        const checkEl = wrapper.find('div[data-test="menu"]')
        expect(checkEl).toHaveLength(1)
    })
    it('Menuアイコンがbottomに表示される', () => {
        wrapper = mountWithTheme(
            <MeatballMenu.Component
                listItems={[{ item: 'dummy', onClick: mockOnClick }]}
                iconSrc={IconFiles.icons.MenuV}
                position={'bottom'}
                onClick={mockOnClick}
            />
        )
        const checkEl = wrapper.find('div[data-test="menu"]')
        expect(checkEl).toHaveLength(1)
    })

    it('リストがMenuアイコンの下に表示される', () => {
        wrapper = mountWithTheme(
            <MeatballMenu.Component
                listItems={[{ item: 'dummy', onClick: mockOnClick }]}
                iconSrc={IconFiles.icons.MenuV}
                position={'top'}
                onClick={mockOnClick}
            />
        )
        const checkEl = wrapper.find('ul[data-test="list"]')
        expect(checkEl).toHaveLength(1)
    })

    it('リストがMenuアイコンの上に表示される', () => {
        wrapper = mountWithTheme(
            <MeatballMenu.Component
                listItems={[{ item: 'dummy', onClick: mockOnClick }]}
                iconSrc={IconFiles.icons.MenuV}
                position={'bottom'}
                onClick={mockOnClick}
            />
        )
        const checkEl = wrapper.find('ul[data-test="list"]')
        expect(checkEl).toHaveLength(1)
    })
})
