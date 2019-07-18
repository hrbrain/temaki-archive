import * as Enzyme from 'enzyme'
import * as React from 'react'

import * as IconFiles from '~/basics/Icons/lib/iconFiles'
import { mountWithTheme } from '../../__test__/utils'
import Icon from './index'

describe('Icon', () => {
  let wrapper: Enzyme.ReactWrapper

  beforeEach(() => {
    wrapper = mountWithTheme(<Icon svg={IconFiles.icons.CheckBoxAll} size="24px" color="#aaa" />)
  })

  it('should be defined', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('should match before snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
