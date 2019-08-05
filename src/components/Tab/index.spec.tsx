import * as Enzyme from 'enzyme'
import * as React from 'react'
// import { act } from 'react-dom/test-utils'
import { mountWithTheme } from '~/__test__/utils'
import * as Tab from './index'

describe('Tab', () => {
    let wrapper: Enzyme.ReactWrapper
    let mockOnClick: jest.Mock
    let data: Tab.TabItemType[]

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
            <Tab.Component selectedIndex={0} tabItems={data} />
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
