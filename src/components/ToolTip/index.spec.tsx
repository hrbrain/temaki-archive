import * as Enzyme from 'enzyme'
import * as React from 'react'
import { mountWithTheme } from '~/__test__/utils'
import * as ToolTip from './index'

describe('ToolTip', () => {
    let wrapper: Enzyme.ReactWrapper

    it('ToolTipのコンポーネントが定義されている', () => {
        wrapper = mountWithTheme(<ToolTip.Component text={'dummy'} />)
        expect(wrapper.exists()).toBe(true)
    })

    it('上方向をさすToolTipが表示されている', () => {
        wrapper = mountWithTheme(
            <ToolTip.Component text={'dummy'} direction={'top'} />
        )
        const checkedEl = wrapper.find('div[data-test="tool-tip"]')
        expect(checkedEl).toHaveLength(1)
    })

    it('右方向をさすToolTipが表示されている', () => {
        wrapper = mountWithTheme(
            <ToolTip.Component text={'dummy'} direction={'right'} />
        )
        const checkedEl = wrapper.find('div[data-test="tool-tip"]')
        expect(checkedEl).toHaveLength(1)
    })

    it('下方向をさすToolTipが表示されている', () => {
        wrapper = mountWithTheme(
            <ToolTip.Component text={'dummy'} direction={'bottom'} />
        )
        const checkedEl = wrapper.find('div[data-test="tool-tip"]')
        expect(checkedEl).toHaveLength(1)
    })

    it('左方向をさすToolTipが表示されている', () => {
        wrapper = mountWithTheme(
            <ToolTip.Component text={'dummy'} direction={'left'} />
        )
        const checkedEl = wrapper.find('div[data-test="tool-tip"]')
        expect(checkedEl).toHaveLength(1)
    })
})
