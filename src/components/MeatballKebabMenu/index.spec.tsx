import * as Enzyme from 'enzyme'
import * as React from 'react'
import { act } from 'react-dom/test-utils'
import { mountWithTheme } from '~/__test__/utils'
import * as IconFiles from '~/lib/iconFiles'
import 'jest-styled-components'

import * as MeatballMenu from './index'
import * as KebabMenu from './index'

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
        wrapper.find('div[data-test="menu-component"]').simulate('click')
        expect(mockOnClick).toHaveBeenCalled()
    })

    it('ListItemのonClickが呼ばれる', () => {
        wrapper.find('li[data-test="list-item0"]').simulate('click')
        expect(mockOnClick).toHaveBeenCalled()
    })

    it('Menuアイコンがtopに表示される', () => {
        const checkEl = wrapper.find('div[data-test="menu-component"]')
        expect(checkEl).toHaveStyleRule('top', '0', { modifier: '&.top' })
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
        const checkEl = wrapper.find('div[data-test="menu-component"]')
        expect(checkEl).toHaveStyleRule('bottom', '0', {
            modifier: '&.bottom'
        })
    })

    it('top時のリストが正常に表示される', () => {
        const checkEl = wrapper.find('ul[data-test="list-component"]')
        expect(checkEl).toHaveStyleRule('transform-origin', 'top', {
            modifier: '&.top'
        })
        expect(checkEl).toHaveStyleRule('top', '24px', {
            modifier: '&.top'
        })
    })

    it('bottom時のリストが正常に表示される', () => {
        wrapper = mountWithTheme(
            <MeatballMenu.Component
                listItems={[{ item: 'dummy', onClick: mockOnClick }]}
                iconSrc={IconFiles.icons.MenuV}
                position={'bottom'}
                onClick={mockOnClick}
            />
        )
        const checkEl = wrapper.find('ul[data-test="list-component"]')
        expect(checkEl).toHaveStyleRule('transform-origin', 'bottom', {
            modifier: '&.bottom'
        })
        expect(checkEl).toHaveStyleRule('bottom', '24px', {
            modifier: '&.bottom'
        })
    })
})
