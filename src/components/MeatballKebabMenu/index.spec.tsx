import * as Enzyme from 'enzyme'
import * as React from 'react'
import { act } from 'react-dom/test-utils'
import { mountWithTheme } from '~/__test__/utils'
import * as MeatballKebabMenu from './index'

describe('MeatballKebabMenu', () => {
    let wrapper: Enzyme.ReactWrapper
    let mockOnClick: jest.Mock

    beforeEach(() => {
        mockOnClick = jest.fn()
        // item = [
        //     {
        //         text: 'リスト１',
        //         onClick: mockOnClick
        //     },
        //     {
        //         text: 'リスト２',
        //         onClick: mockOnClick
        //     },
        //     {
        //         text: 'リスト３',
        //         onClick: mockOnClick
        //     }
        // ]
    })

    it('コンポーネントが定義されている', () => {
        expect(wrapper.exists()).toBe(true)
    })

    //TODO: MenuのonClickが呼ばれる

    it('ListItemのonClickが呼ばれる', () => {
        wrapper.simulate('click')
        expect(mockOnClick).toHaveBeenCalled()
    })

    //TODO: メニューアイコンがtopに表示される
    //TODO: メニューアイコンがbottomに表示される
    //TODO: リストがtopに表示される
    //TODO: リストがbottomに表示される
})
