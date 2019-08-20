import * as Enzyme from 'enzyme'
import * as React from 'react'
import { act } from 'react-dom/test-utils'
import { mountWithTheme } from '~/__test__/utils'
import * as ClickOutside from './ClickOutside'

describe('ClickOutside', () => {
    let wrapper: Enzyme.ReactWrapper
    let mockOnClick: jest.Mock
    let mockOnClickOutside: jest.Mock

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

    it('範囲外を押した時にonClickが呼ばれる', () => {
        mockOnClickOutside = jest.fn()
        wrapper = mountWithTheme(
            <div data-test="click-outside" onClick={mockOnClickOutside}>
                <ClickOutside.Component onClickOutside={mockOnClick} />
            </div>
        )
        wrapper.find('div[data-test="click-outside"]').simulate('click')
        expect(mockOnClickOutside).toHaveBeenCalled()
    })
})
