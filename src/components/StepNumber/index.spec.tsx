import * as React from 'react'
import * as Enzyme from 'enzyme'
import { act } from 'react-dom/test-utils'
import { mountWithTheme } from '~/__test__/utils'
import * as StepNumber from '.'

describe('StepNumber Component', () => {
    let wrapper: Enzyme.ReactWrapper
    let mockScale: number
    let mockMin: number
    let mockMax: number
    let mockStep: number
    let mockUnit: string
    let mockRate: number

    let mockOnChangeValue: jest.Mock

    beforeEach(() => {
        mockOnChangeValue = jest.fn()
        act(() => {
            wrapper = mountWithTheme(
                <StepNumber.Component
                    defaultValue={mockScale}
                    min={mockMin}
                    max={mockMax}
                    step={mockStep}
                    unit={mockUnit}
                    rate={mockRate}
                    onChangeValue={mockOnChangeValue}
                />
            )
        })
    })

    it('コンポーネントが定義されている', () => {
        expect(wrapper).toBeDefined()
    })

    it('incrementしているか', () => {
        act(() => {
            const increment = wrapper
                .find('div[data-test="incrementValue"]')
                .simulate('click')
            expect(increment).toHaveLength(1)
        })
    })

    it('decrementしている', () => {
        act(() => {
            const decrement = wrapper
                .find('div[data-test="decrementValue"]')
                .simulate('click')
            expect(decrement).toHaveLength(1)
        })
    })

    it('incrementしたときにonChangeValueが呼ばれているか', () => {
        wrapper.find('div[data-test="incrementValue"]').simulate('click')
        expect(mockOnChangeValue).toHaveBeenCalled()
    })

    it('decrementしたときにonChangeValueが呼ばれているか', () => {
        wrapper.find('div[data-test="decrementValue"]').simulate('click')
        expect(mockOnChangeValue).toHaveBeenCalled()
    })
})
