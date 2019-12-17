import * as Enzyme from 'enzyme'
import * as React from 'react'

import { mountWithTheme } from '../../__test__/utils'
import * as Toast from './index'

let mockOnClick: jest.Mock
describe('Toast', () => {
    let wrapper: Enzyme.ReactWrapper

    it('Toastコンポーネントが定義されいている', () => {
        wrapper = mountWithTheme(
            <Toast.Component
                label={'123'}
                variant={'info'}
                type={'default'}
                onClickClose={mockOnClick}
            />
        )
        expect(wrapper.exists()).toBe(true)
    })

    it('infoのToast(Closeボタンあり)が表示される', () => {
        wrapper = mountWithTheme(
            <Toast.Component
                label={'123'}
                variant={'info'}
                type={'default'}
                onClickClose={mockOnClick}
            />
        )
        const info = wrapper.find('div[data-test="info-default-toast"]')
        expect(info).toHaveLength(1)
    })

    it('warningのToast(Closeボタンあり)が表示される', () => {
        wrapper = mountWithTheme(
            <Toast.Component
                label={'123'}
                variant={'warning'}
                type={'default'}
                onClickClose={mockOnClick}
            />
        )
        const warning = wrapper.find('div[data-test="warning-default-toast"]')
        expect(warning).toHaveLength(1)
    })
    it('infoのToast(Closeボタンなし)が表示される', () => {
        wrapper = mountWithTheme(
            <Toast.Component
                label={'123'}
                variant={'info'}
                type={'buttonless'}
                onClickClose={mockOnClick}
            />
        )
        const info = wrapper.find('div[data-test="info-buttonless-toast"]')
        expect(info).toHaveLength(1)
    })

    it('warningのToast(Closeボタンなし)が表示される', () => {
        wrapper = mountWithTheme(
            <Toast.Component
                label={'123'}
                variant={'warning'}
                type={'buttonless'}
                onClickClose={mockOnClick}
            />
        )
        const warning = wrapper.find(
            'div[data-test="warning-buttonless-toast"]'
        )
        expect(warning).toHaveLength(1)
    })
})
