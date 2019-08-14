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
                />
            )
        })
        act(() => {
            wrapper = mountWithTheme(
                <KebabMenu.Component
                    position={'top'}
                    listItems={item}
                    iconSrc={IconFiles.icons.MenuV}
                />
            )
        })
    })

    it('コンポーネントが定義されている', () => {
        expect(wrapper.exists()).toBe(true)
    })

    //TODO: MenuのonClickが呼ばれる

    it('ListItemのonClickが呼ばれる', () => {
        wrapper.find('li[data-test="listItem0"]').simulate('click')
        expect(mockOnClick).toHaveBeenCalled()
    })

    //TODO: メニューアイコンがtopに表示される
    //TODO: メニューアイコンがbottomに表示される
    //TODO: リストがtopに表示される
    //TODO: リストがbottomに表示される
})
