import * as Enzyme from 'enzyme'
import { mountWithTheme } from '../../__test__/utils'
import * as Tag from './'
import * as React from 'react'

describe('Tag', () => {
    let wrapper: Enzyme.ReactWrapper

    it('should be defined colorType primary', () => {
        wrapper = mountWithTheme(
            <Tag.Component text={'タグ'} colorType={'primary'} />
        )
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.text()).toEqual('タグ')
    })

    it('should be defined colorType secondary', () => {
        wrapper = mountWithTheme(
            <Tag.Component text={'タグ'} colorType={'secondary'} />
        )
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.text()).toEqual('タグ')
    })

    it('should be defined colorType destructive', () => {
        wrapper = mountWithTheme(
            <Tag.Component text={'タグ'} colorType={'destructive'} />
        )
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.text()).toEqual('タグ')
    })
})
