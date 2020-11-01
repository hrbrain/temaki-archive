import * as Enzyme from 'enzyme'
import * as React from 'react'
import { act } from 'react-dom/test-utils'
import { mountWithTheme } from '../../__test__/utils'
import * as Theme from '../../modules/theme'
import 'jest-styled-components'

import * as Textarea from './index'

describe('textarea', () => {
    let wrapper: Enzyme.ReactWrapper
    let mockOnChange: jest.Mock
    let mockOnFocus: jest.Mock
    let mockOnBlur: jest.Mock

    beforeEach(() => {
        mockOnChange = jest.fn()
        mockOnFocus = jest.fn()
        mockOnBlur = jest.fn()
        act(() => {
            wrapper = mountWithTheme(
                <Textarea.Component
                    value={'Testing Value'}
                    onChange={mockOnChange}
                    onFocus={mockOnFocus}
                    onBlur={mockOnBlur}
                />
            )
        })
    })

    it('コンポーネントが存在しているか', () => {
        expect(wrapper.exists()).toBe(true)
    })

    it('以前のスナップショットと一致しているか', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('onChangeが呼ばれたか', () => {
        const textareaEl = wrapper.find('textarea')
        act(() => {
            textareaEl.simulate('change')
            expect(mockOnChange).toHaveBeenCalled()
        })
    })

    it('onFocusが呼ばれたか', () => {
        const textareaEl = wrapper.find('textarea')
        act(() => {
            textareaEl.simulate('focus')
            expect(mockOnFocus).toHaveBeenCalled()
        })
    })

    it('onBlurが呼ばれたか', () => {
        const textareaEl = wrapper.find('textarea')
        act(() => {
            textareaEl.simulate('blur')
            expect(mockOnBlur).toHaveBeenCalled()
        })
    })

    it('onFocus時にCSSが効いているか', () => {
        act(() => {
            expect(wrapper.find('textarea')).toHaveStyleRule(
                'border-color',
                'rgb(114,206,92)',
                {
                    modifier: ':focus'
                }
            )
        })
    })

    it('error時にCSSが効いているか', () => {
        wrapper = mountWithTheme(
            <Textarea.Component
                value={'Testing Value'}
                onChange={mockOnChange}
                onFocus={mockOnFocus}
                onBlur={mockOnBlur}
                errored
            />
        )
        expect(wrapper.find('textarea')).toHaveStyleRule(
            'border-color',
            'rgb(224,85,72)'
        )
    })

    it('errorのメッセージが表示されているか', () => {
        wrapper = mountWithTheme(
            <Textarea.Component
                value={'Testing Value'}
                onChange={mockOnChange}
                onFocus={mockOnFocus}
                onBlur={mockOnBlur}
                errored
                errorMessage="必須項目です"
            />
        )
        const errorMessageEl = wrapper.find('div[data-test="error-message"]')

        expect(errorMessageEl.exists()).toBeTruthy()
        expect(errorMessageEl.text()).toEqual('必須項目です')
    })

    it('diff時にCSSが効いているか', () => {
        wrapper = mountWithTheme(
            <Textarea.Component
                value={'Testing Value'}
                onChange={mockOnChange}
                onFocus={mockOnFocus}
                onBlur={mockOnBlur}
                diff
            />
        )

        expect(wrapper.find('textarea')).toHaveStyleRule(
            'background-color',
            Theme.defaultTheme.colorsOld.utilities.paleYellow.replace(/ /g, '')
        )
    })
})
