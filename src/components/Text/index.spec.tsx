import * as Enzyme from 'enzyme'
import toJson from 'enzyme-to-json'
import * as React from 'react'
import { mountWithTheme } from '~/__test__/utils'
import Text from './index'

describe('Text', () => {
  let wrapper: Enzyme.ReactWrapper

  beforeEach(() => {
    wrapper = mountWithTheme(<Text>Hello</Text>)
  })

  it('should be defined', () => {
    expect(wrapper).toBeDefined()
  })

  it('should render collectly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
