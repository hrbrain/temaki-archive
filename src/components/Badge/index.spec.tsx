import * as Enzyme from 'enzyme'
import * as React from 'react'
import { mountWithTheme } from '~/__test__/utils'
import * as Badge from './index'

describe('Badge', () => {
    let wrapper: Enzyme.ReactWrapper

    it('should be defined', () => {
        wrapper = mountWithTheme(<Badge.Component count={10} />)
        expect(wrapper.exists()).toBe(true)
    })

    it('count=0 の時は nullを返す', () => {
        wrapper = mountWithTheme(<Badge.Component count={0} />)
        expect(wrapper.isEmptyRender()).toEqual(true)
    })

    it('count=10 の時は 10を返す', () => {
        wrapper = mountWithTheme(<Badge.Component count={10} />)
        expect(wrapper.text()).toEqual('10')
    })

    it('count=99 の時は 99を返す', () => {
        wrapper = mountWithTheme(<Badge.Component count={99} />)
        expect(wrapper.text()).toEqual('99')
    })

    it('count=100 の時は 99を返す', () => {
        wrapper = mountWithTheme(<Badge.Component count={100} />)
        expect(wrapper.text()).toEqual('99')
    })
})
