import * as Enzyme from 'enzyme'
import toJson from 'enzyme-to-json'
import * as React from 'react'
import Text from '..'

describe('Text', () => {
  let wrapper: Enzyme.ShallowWrapper

  beforeEach(() => {
    wrapper = Enzyme.shallow(<Text>Hello</Text>)
  })

  it('should be defined', () => {
    expect(wrapper).toBeDefined()
  })

  it('should render collectly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
