import * as Enzyme from 'enzyme'
import * as React from 'react'
import { act } from 'react-dom/test-utils'
import { mountWithTheme } from '~/__test__/utils'
import * as ClickOutside from './ClickOutside'

describe('ClickOutside', () => {
    let wrapper: Enzyme.ReactWrapper
    let mockOnClickOutside: jest.Mock

    beforeEach(() => {
        mockOnClickOutside = jest.fn()
        act(() => {
            wrapper = mountWithTheme(
                <ClickOutside.Component onClickOutside={mockOnClickOutside} />
            )
        })
    })

    it('コンポーネントが定義されている', () => {
        expect(wrapper.exists()).toBe(true)
    })

    //TODO: onClickOutsideが呼ばれているかのテスト
    // it('範囲外を押した時にonClickOutsideが呼ばれる', () => {
    //     const clickOutside = wrapper.find('[data-test="click-outside"]')
    //     clickOutside.simulate('click')
    //     expect(mockOnClickOutside).toHaveBeenCalled()
    // })
})
