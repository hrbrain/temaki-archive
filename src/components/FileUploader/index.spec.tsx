import * as Enzyme from 'enzyme'
import * as React from 'react'
import { act } from 'react-dom/test-utils'
import { mountWithTheme } from '../../__test__/utils'
import * as FileUploader from './index'
import 'jest-styled-components'

declare var File: {
    prototype: File
    new (
        fileBits: BlobPart[],
        fileName: string,
        options?: FilePropertyBag
    ): File
}

describe('FileUploader', () => {
    let wrapper: Enzyme.ReactWrapper
    let mockOnClick: jest.Mock
    let mockOnDragOver: jest.Mock
    let mockOnDrop: jest.Mock
    let mockOnChange: jest.Mock

    beforeEach(() => {
        mockOnClick = jest.fn()
        mockOnDragOver = jest.fn()
        mockOnDrop = jest.fn()
        mockOnChange = jest.fn()
        act(() => {
            wrapper = mountWithTheme(
                <FileUploader.Component
                    onDragOver={mockOnDragOver}
                    onDrop={mockOnDrop}
                    onChange={mockOnChange}
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
        const el = wrapper.find('input')
        el.simulate('click')
        expect(mockOnClick).toHaveBeenCalled()
    })

    // "onChange他イベント"と"stateによっての分岐"テストが通らないので一時コメントアウト

    it('ファイルアップロード時にhandleChange()が呼ばれる', () => {
        const changeEl = wrapper.find('input')
        changeEl.simulate('change', {
            target: { files: { item: () => new File([], 'file') } }
        })
        expect(mockOnChange).toHaveBeenCalled()
    })

    it('dragover時にonDragOver()が呼ばれる', () => {
        const dragEl = wrapper.find('input')
        act(() => {
            dragEl.simulate('dragover', {
                dataTransfer: { files: { item: () => new File([], 'files') } }
            })
            expect(mockOnDragOver).toHaveBeenCalled()
        })
    })

    it('drop時にonFileDrop()が呼ばれる', () => {
        const dropEl = wrapper.find('input')
        act(() => {
            dropEl.simulate('drop', {
                dataTransfer: { files: { item: () => new File([], 'files') } }
            })
            expect(mockOnDrop).toHaveBeenCalled()
        })
    })
})
