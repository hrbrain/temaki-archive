import * as React from 'react'
import * as Enzyme from 'enzyme'
import { act } from 'react-dom/test-utils'
import { mountWithTheme } from '~/__test__/utils'
import * as ScaleController from './controller'
import * as ScaleRange from './range'

describe('ScaleController Component', () => {
    let wrapper: Enzyme.ReactWrapper
    let mockScale: number
    let mockMin: number
    let mockMax: number
    let mockStep: number
    let mockOnChangeScale: jest.Mock

    let mockDisplayType: 'Vertical' | 'Horizontal'

    beforeEach(() => {
        mockOnChangeScale = jest.fn()
        act(() => {
            wrapper = mountWithTheme(
                <>
                    <ScaleController.Component
                        scale={mockScale}
                        min={mockMin}
                        max={mockMax}
                        step={mockStep}
                        onChangeScale={mockOnChangeScale}
                    />
                    <ScaleRange.Component
                        scale={mockScale}
                        displayType={mockDisplayType}
                    >
                        コンテンツ
                    </ScaleRange.Component>
                </>
            )
        })
    })
    it('コンポーネントが定義されている', () => {
        expect(wrapper).toBeDefined()
    })

    it('Scaleがincrementされた状態', () => {
        act(() => {
            const increment = wrapper
                .find('div[data-test="incrementScale"]')
                .simulate('click')
            expect(increment).toHaveLength(1)
        })
    })

    it('Scaleがdecrementされた状態', () => {
        act(() => {
            const decrement = wrapper
                .find('div[data-test="decrementScale"]')
                .simulate('click')
            expect(decrement).toHaveLength(1)
        })
    })
})
