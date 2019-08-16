import * as Enzyme from 'enzyme'
import * as React from 'react'
import { act } from 'react-dom/test-utils'
import { mountWithTheme } from '~/__test__/utils'
import * as ClickOutside from './ClickOutside'

describe('ClickOutside', () => {
    let wrapper: Enzyme.ReactWrapper
    let mockOnClick: jest.Mock

    beforeEach(() => {
        mockOnClick = jest.fn()
        act(() => {
            wrapper = mountWithTheme(
                <ClickOutside.Component onClickOutside={mockOnClick} />
            )
        })
    })

    it('コンポーネントが定義されている', () => {
        expect(wrapper.exists()).toBe(true)
    })

    // it('onClickOutsideが呼ばれる', () => {
    //     wrapper.simulate('click')
    //     expect(mockOnClick).toHaveBeenCalled()
    // })
})
