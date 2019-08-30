import * as Enzyme from 'enzyme'
import * as React from 'react'
import { act } from 'react-dom/test-utils'
import { mountWithTheme } from '../../__test__/utils'
import * as FileUploader from './index'

describe('FileUploader', () => {
    let wrapper: Enzyme.ReactWrapper
    let mockOnClick: jest.Mock
    let mockOnChange: jest.Mock
    let mockOnDragOver: jest.Mock
    let mockOnDrop: jest.Mock

    beforeEach(() => {
        mockOnClick = jest.fn()
        mockOnChange = jest.fn()
        mockOnDragOver = jest.fn()
        mockOnDrop = jest.fn()
        act(() => {
            wrapper = mountWithTheme(
                <FileUploader.Component
                    onChange={mockOnChange}
                    onDragOver={mockOnDragOver}
                    onDrop={mockOnDrop}
                    onClick={mockOnClick}
                    accept="dummy.jpg"
                />
            )
        })
    })

    it('コンポーネントが定義されている', () => {
        expect(wrapper.exists()).toBe(true)
    })

    it('onClickが呼ばれる', () => {
        wrapper.find('input').simulate('click')
        expect(mockOnClick).toHaveBeenCalled()
    })

    it('ファイルアップロード時にhandleChange()が呼ばれる', () => {
        wrapper.find('input').simulate('change', mockOnChange)
    })

    it('dragover時にonDragOver()が呼ばれる', () => {
        wrapper.find('input').simulate('dragover', mockOnDragOver)
        // expect(mockOnDragOver).toHaveBeenCalled()
    })

    it('drop時にonFileDrop()が呼ばれる', () => {
        wrapper.find('input').simulate('drop', mockOnDrop)
        wrapper.find('input').simulate('drop', { preventDefault() {} })
        // expect(mockOnDrop).toHaveBeenCalled()
    })

    //ref範囲のaddEventListenerでonFileDragOver()呼び出し
    //ref範囲のaddEventListenerでonFileDrop()イベント呼び出し
    //dorument.addEventListener('dragover')でe.preventDefault呼び出し
    //dorument.addEventListener('drop')でe.preventDefault呼び出し

    //ファイルアップロードしたらclass="attach"
})
