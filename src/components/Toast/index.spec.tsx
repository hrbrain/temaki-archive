import * as Enzyme from 'enzyme'
import * as React from 'react'

import { mountWithTheme } from '../../__test__/utils'
import * as Toast from './index'

describe('Toast', () => {
    let wrapper: Enzyme.ReactWrapper

    it('Toastコンポーネントが定義されいている', () => {
        wrapper = mountWithTheme(
            <Toast.Component label={'123'} type={'info'} />
        )
        expect(wrapper.exists()).toBe(true)
    })

    it('infoのToastが表示される', () => {
        wrapper = mountWithTheme(
            <Toast.Component label={'123'} type={'info'} />
        )
        const info = wrapper.find('div[data-test="info-toast"]')
        expect(info).toHaveLength(1)
    })

    it('warningのToastが表示される', () => {
        wrapper = mountWithTheme(
            <Toast.Component label={'123'} type={'warning'} />
        )
        const warning = wrapper.find('div[data-test="warning-toast"]')
        expect(warning).toHaveLength(1)
    })
})
