import * as Enzyme from 'enzyme'
import * as React from 'react'
import { act } from 'react-dom/test-utils'
import { mountWithTheme } from '~/__test__/utils'
import * as RadioButton from './index'

describe('RadioButton', () => {
    let wrapper: Enzyme.ReactWrapper
    let mockOnClick: jest.Mock

    beforeEach(() => {
        mockOnClick = jest.fn()
        act(() => {
            wrapper = mountWithTheme(
                <RadioButton.Component onClick={mockOnClick} text={'123'} />
            )
        })
    })

    it('should be defind', () => {
        expect(wrapper.exists()).toBe(true)
    })

    it('onClickを呼び出す', () => {
        wrapper.simulate('click')
        expect(mockOnClick).toHaveBeenCalled()
    })

    it('RadioOnアイコンを表示する', () => {
        wrapper = mountWithTheme(
            <RadioButton.Component checked onClick={mockOnClick} text={'123'} />
        )
        const checkedEl = wrapper.find('div[data-test="radio-on"]')
        expect(checkedEl).toHaveLength(1)
    })

    it('RadioOffアイコンを表示する', () => {
        const el = wrapper.find('div[data-test="radio-off"]')
        expect(el).toHaveLength(1)
    })
})
