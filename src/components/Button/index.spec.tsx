import * as Enzyme from 'enzyme'
import * as React from 'react'
import { act } from 'react-dom/test-utils'
import { mountWithTheme } from '~/__test__/utils'
import * as Button from './index'
import * as IconFiles from '~/lib/iconFiles'

describe('Button type of box', () => {
    let wrapper: Enzyme.ReactWrapper
    let mockOnClick: jest.Mock

    beforeEach(() => {
        mockOnClick = jest.fn()
        act(() => {
            wrapper = mountWithTheme(
                <Button.Component variant="box" onClick={mockOnClick}>
                    OK
                </Button.Component>
            )
        })
    })

    it('should be defined', () => {
        expect(wrapper).toBeDefined()
    })

    it('should call onClick method by users click', () => {
        act(() => {
            wrapper.simulate('click')
        })
        expect(mockOnClick).toHaveBeenCalled()
    })

    it('should render children from props children', () => {
        const child = wrapper.children()
        expect(child.text() === 'OK').toBe(true)
    })
})

describe('Button type of circle', () => {
    let wrapper: Enzyme.ReactWrapper
    let mockOnClick: jest.Mock

    beforeEach(() => {
        mockOnClick = jest.fn()
        act(() => {
            wrapper = mountWithTheme(
                <Button.Component
                    variant="circle"
                    onClick={mockOnClick}
                    svg={IconFiles.icons.CheckBoxAll}
                />
            )
        })
    })

    it('should be defined', () => {
        expect(wrapper).toBeDefined()
    })

    it('should call onClick method by users click', () => {
        act(() => {
            wrapper.simulate('click')
        })
        expect(mockOnClick).toHaveBeenCalled()
    })
})

describe('Button type of text', () => {
    let wrapper: Enzyme.ReactWrapper
    let mockOnClick: jest.Mock

    beforeEach(() => {
        mockOnClick = jest.fn()
        act(() => {
            wrapper = mountWithTheme(
                <Button.Component
                    variant="text"
                    svg={IconFiles.icons.CheckBoxAll}
                    onClick={mockOnClick}
                >
                    OK
                </Button.Component>
            )
        })
    })

    it('should be defined', () => {
        expect(wrapper.exists()).toBe(true)
    })

    it('should call onClick by users click', () => {
        wrapper.simulate('click')
        expect(mockOnClick).toHaveBeenCalled()
    })

    it('should render children from props children', () => {
        const textEl = wrapper.find('span[data-test="text-button-child"]')
        expect(textEl.exists()).toBe(true)
        const text = textEl.text()
        expect(text === 'OK').toBe(true)
    })
})
