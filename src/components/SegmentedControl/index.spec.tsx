import * as Enzyme from 'enzyme'
import * as React from 'react'
import { mountWithTheme } from '~/__test__/utils'
import * as SegmentedControl from './index'

describe('SegmentedControl', () => {
    let wrapper: Enzyme.ReactWrapper
    let mockOnClickTab: jest.Mock
    let data: SegmentedControl.Item[]

    beforeEach(() => {
        mockOnClickTab = jest.fn()
        data = [
            {
                text: '最初のタブ'
            },
            {
                text: '真ん中のタブ'
            },
            {
                text: '最後のタブ'
            }
        ]
        wrapper = mountWithTheme(
            <SegmentedControl.Component
                selectedIndex={0}
                items={data}
                onClickTab={mockOnClickTab}
            />
        )
    })

    it('should be defined', () => {
        expect(wrapper.exists()).toBe(true)
    })

    it('should call onClick by users click', () => {
        wrapper.find('div[data-test="item0"]').simulate('click')
        expect(mockOnClickTab).toHaveBeenCalled()
    })
})
