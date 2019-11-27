import * as Enzyme from 'enzyme'
import * as React from 'react'
import { act } from 'react-dom/test-utils'
import { mountWithTheme } from '../../__test__/utils'
import * as FileUploader from './index'
import 'jest-styled-components'

describe('FileUploader', () => {
    let wrapper: Enzyme.ReactWrapper
    let mockOnChange: jest.Mock

    beforeEach(() => {
        mockOnChange = jest.fn()
        act(() => {
            wrapper = mountWithTheme(
                <FileUploader.Component
                    onChange={mockOnChange}
                    fileName="hoge.png"
                />
            )
        })
    })

    it('コンポーネントが定義されている', () => {
        expect(wrapper.exists()).toBe(true)
    })
})
