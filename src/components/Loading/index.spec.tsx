import * as Enzyme from 'enzyme'
import * as React from 'react'
import { mountWithTheme } from '~/__test__/utils'
import * as Loading from '.'

describe('Loading', () => {
    let wrapper: Enzyme.ReactWrapper

    beforeEach(() => {
        wrapper = mountWithTheme(<Loading.Component />)
    })

    it('should be defined', () => {
        expect(wrapper).toBeDefined()
    })
})
