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

    beforeEach(() => {
        act(() => {
            wrapper = mountWithTheme(
                <StepNumber.Component
                    defaultValue={mockScale}
                    min={mockMin}
                    max={mockMax}
                    step={mockStep}
                    unit={mockUnit}
                    rate={mockRate}
                />
            )
        })
    })
    it('コンポーネントが定義されている', () => {
        expect(wrapper).toBeDefined()
    })

    it('increment', () => {
        act(() => {
            const increment = wrapper
                .find('div[data-test="incrementValue"]')
                .simulate('click')
            expect(increment).toHaveLength(1)
        })
    })

    it('decrement', () => {
        act(() => {
            const decrement = wrapper
                .find('div[data-test="decrementValue"]')
                .simulate('click')
            expect(decrement).toHaveLength(1)
        })
    })
})
