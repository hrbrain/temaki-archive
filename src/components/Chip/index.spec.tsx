import * as Enzyme from 'enzyme'
import { mountWithTheme } from '../../__test__/utils'
import * as Chip from '../Chip'
import * as React from 'react'

describe('Chip', () => {
    let wrapper: Enzyme.ReactWrapper

    it('should be defined colorType primary', () => {
        wrapper = mountWithTheme(
            <Chip.Component text={'チップ'} colorType={'primary'} />
        )
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.text()).toEqual('チップ')
    })

    it('should be defined colorType secondary', () => {
        wrapper = mountWithTheme(
            <Chip.Component text={'チップ'} colorType={'secondary'} />
        )
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.text()).toEqual('チップ')
    })

    it('should be defined colorType destructive', () => {
        wrapper = mountWithTheme(
            <Chip.Component text={'チップ'} colorType={'destructive'} />
        )
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.text()).toEqual('チップ')
    })
})
