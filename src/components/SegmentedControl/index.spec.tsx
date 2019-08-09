import * as Enzyme from 'enzyme'
import * as React from 'react'
// import { act } from 'react-dom/test-utils'
import { mountWithTheme } from '~/__test__/utils'
import * as SegmentedControl from './index'

describe('SegmentedControl', () => {
    let wrapper: Enzyme.ReactWrapper
    let mockOnClick: jest.Mock
    let data: SegmentedControl.SegmentedControlItemType[]

    beforeEach(() => {
        mockOnClick = jest.fn()
        data = [
            {
                text: '最初のタブ',
                onClick: mockOnClick
            },
            {
                text: '真ん中のタブ',
                onClick: mockOnClick
            },
            {
                text: '最後のタブ',
                onClick: mockOnClick
            }
        ]
        wrapper = mountWithTheme(
            <SegmentedControl.Component
                selectedIndex={0}
                segmentedControlItems={data}
            />
        )
    })

    it('should be defined', () => {
        expect(wrapper.exists()).toBe(true)
    })

    it('should call onClick by users click', () => {
        wrapper.simulate('click')
        expect(mockOnClick).toHaveBeenCalled()
    })
})
