import * as Enzyme from 'enzyme'
import * as React from 'react'
import { act } from 'react-dom/test-utils'
import { mountWithTheme } from '~/__test__/utils'
import * as Switch from './index'

describe('Switch', () => {
    let wrapper: Enzyme.ReactWrapper
    let mockOnClick: jest.Mock

    beforeEach(() => {
        mockOnClick = jest.fn()
        act(() => {
            wrapper = mountWithTheme(
                <Switch.Component
                    onClick={mockOnClick}
                    checked={false}
                    text={{ on: 'text', off: 'text' }}
                />
            )
        })
    })

    it('コンポーネントが定義されている', () => {
        expect(wrapper.exists()).toBe(true)
    })

    it('onClickを呼び出す', () => {
        wrapper.find('div[data-test="switch"]').simulate('click')
        expect(mockOnClick).toHaveBeenCalled()
    })

    it('SwitchがOFFの状態', () => {
        wrapper = mountWithTheme(
            <Switch.Component
                onClick={mockOnClick}
                checked={false}
                text={{ on: 'text', off: 'text' }}
            />
        )
        const off = wrapper.find('div[data-test="switch-off"]')
        expect(off).toHaveLength(1)
    })

    it('SwitchがONの状態', () => {
        wrapper = mountWithTheme(
            <Switch.Component
                onClick={mockOnClick}
                checked={true}
                text={{ on: 'text', off: 'text' }}
            />
        )
        const on = wrapper.find('div[data-test="switch-on"]')
        expect(on).toHaveLength(1)
    })
})
