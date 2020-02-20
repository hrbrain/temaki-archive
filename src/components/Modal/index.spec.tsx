import * as Enzyme from 'enzyme'
import * as React from 'react'
import { act } from 'react-dom/test-utils'
import { mountWithTheme } from '~/__test__/utils'
import * as Modal from './body'

describe('Modal component', () => {
    let wrapper: Enzyme.ReactWrapper
    let title = 'ロール作成'
    let buttons = [
        {
            variant: 'box' as const,
            colorType: 'primary' as const,
            text: '登録'
        }
    ]
    let mockOnClose: jest.Mock

    beforeEach(() => {
        mockOnClose = jest.fn()
        act(() => {
            wrapper = mountWithTheme(
                <Modal.Component
                    title={title}
                    buttons={buttons}
                    onClose={mockOnClose}
                >
                    コンテンツ
                </Modal.Component>
            )
        })
    })

    it('should be defined', () => {
        expect(wrapper).toBeDefined()
    })

    it('should call onClose', () => {
        act(() => {
            wrapper.find('div[data-test="closeIcon"]').simulate('click')
        })
        expect(mockOnClose).toHaveBeenCalled()
    })

    it('Should render a ', () => {
        buttons.forEach((_, index) => {
            expect(wrapper.find(`button.button${index}`)).toHaveLength(1)
        })
    })
})
