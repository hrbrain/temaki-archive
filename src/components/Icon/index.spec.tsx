import * as Enzyme from 'enzyme'
import * as React from 'react'

import * as IconFiles from '../../lib/iconFiles'
import { mountWithTheme } from '../../__test__/utils'
import * as Icon from './index'

describe('Icon', () => {
    let wrapper: Enzyme.ReactWrapper

    beforeEach(() => {
        wrapper = mountWithTheme(
            <Icon.Component
                svg={IconFiles.icons.CheckBoxAll}
                size="24px"
                color="#aaa"
            />
        )
    })

    it('should be defined', () => {
        expect(wrapper.exists()).toBeTruthy()
    })
})
