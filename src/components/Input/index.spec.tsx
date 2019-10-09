import * as Enzyme from 'enzyme'
import * as React from 'react'
import { act } from 'react-dom/test-utils'
import { mountWithTheme } from '../../__test__/utils'
// import { defaultTheme } from '../../modules/theme'
import 'jest-styled-components'

import * as Input from './index'

describe('Input format of text', () => {
    let wrapper: Enzyme.ReactWrapper
    let mockValue: string
    let mockOnChange: jest.Mock
    let mockOnChangeNative: jest.Mock
    let mockOnBlur: jest.Mock

    beforeEach(() => {
        mockOnChange = jest.fn()
        mockOnChangeNative = jest.fn()
        mockOnBlur = jest.fn()
        mockValue = 'Testing Value'
        act(() => {
            wrapper = mountWithTheme(
                <Input.Component
                    format="text"
                    value={mockValue}
                    onChange={mockOnChange}
                    onChangeNative={mockOnChangeNative}
                    onBlur={mockOnBlur}
                />
            )
        })
    })

    it('should be defined', () => {
        expect(wrapper.exists()).toBe(true)
    })

    it('should match previous snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('should render provided value correctly', () => {
        const inputEl = wrapper.find('input')
        const value = inputEl.prop('value')
        expect(value === mockValue).toBe(true)
    })

    // tslint:disable-next-line
    it("should call onChange method on change input's value", () => {
        const inputEl = wrapper.find('input')
        act(() => {
            inputEl.simulate('change', { target: { value: 'Just changed' } })
            expect(mockOnChangeNative).toHaveBeenCalled()
            expect(mockOnChange).toHaveBeenCalledWith('Just changed')
        })
    })

    it('should call onBlur method on blur from input', () => {
        const inputEl = wrapper.find('input')
        act(() => {
            inputEl.simulate('blur', { target: { value: '' } })
            expect(mockOnBlur).toHaveBeenCalled()
        })
    })

    it('should match previous snapshot when provided errored prop', () => {
        wrapper = mountWithTheme(<Input.Component format="text" errored />)
        const inputEl = wrapper.find('input')
        expect(inputEl).toMatchSnapshot()
    })

    it('should change background-color when provided edited prop', () => {
        wrapper = mountWithTheme(<Input.Component format="text" edited />)
        const inputEl = wrapper.find('input')
        expect(inputEl).toHaveStyleRule('background', 'rgb(255,255,233)')
    })
})

describe('Input format of number', () => {
    let wrapper: Enzyme.ReactWrapper
    let mockOnChange: jest.Mock
    let mockOnChangeNative: jest.Mock
    let mockOnBlur: jest.Mock
    let mockValue: number

    beforeEach(() => {
        mockOnChange = jest.fn()
        mockOnChangeNative = jest.fn()
        mockOnBlur = jest.fn()
        mockValue = 145

        act(() => {
            wrapper = mountWithTheme(
                <Input.Component
                    format="number"
                    value={mockValue}
                    onChange={mockOnChange}
                    onChangeNative={mockOnChangeNative}
                    onBlur={mockOnBlur}
                />
            )
        })
    })

    it('should be defined', () => {
        expect(wrapper.exists()).toBe(true)
    })

    it('should match previous snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('should render provided value correctly', () => {
        const inputEl = wrapper.find('input')
        const value = inputEl.prop('value')
        expect(value === mockValue.toString()).toBe(true)
    })

    // tslint:disable-next-line
    it("should call onChange method on change input's value", () => {
        const inputEl = wrapper.find('input')
        act(() => {
            inputEl.simulate('change', { target: { value: '200' } })
            expect(mockOnChange).toHaveBeenCalledWith(200)
            expect(mockOnChangeNative).toHaveBeenCalled()
        })
    })

    it('should call onChange method with null when be written value is empty', () => {
        const inputEl = wrapper.find('input')
        act(() => {
            inputEl.simulate('change', { target: { value: '' } })
            expect(mockOnChange).toHaveBeenCalledWith(null)
        })
    })

    it('should not call onChange method with previous value when be written value is type of string', () => {
        const inputEl = wrapper.find('input')
        act(() => {
            inputEl.simulate('change', {
                target: { value: 'Wrong Value so this is string' }
            })
            expect(mockOnChange).not.toHaveBeenCalled()
        })
    })

    it('should call onBlur method on blur input', () => {
        const inputEl = wrapper.find('input')
        act(() => {
            inputEl.simulate('blur', { target: { value: '200' } })
            expect(mockOnBlur).toHaveBeenCalled()
        })
    })

    it('should match previous snapshot when provided errored prop', () => {
        wrapper = mountWithTheme(<Input.Component format="text" errored />)
        const inputEl = wrapper.find('input')
        expect(inputEl).toMatchSnapshot()
    })

    it('should change background-color when provided edited prop', () => {
        wrapper = mountWithTheme(<Input.Component format="text" edited />)
        const inputEl = wrapper.find('input')
        expect(inputEl).toHaveStyleRule('background', 'rgb(255,255,233)')
    })
})
