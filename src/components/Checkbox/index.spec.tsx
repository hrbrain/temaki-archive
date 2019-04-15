import * as Enzyme from 'enzyme'
import * as React from 'react'
import { act } from 'react-dom/test-utils'
import { mountWithTheme } from '~/__test__/utils'
import Checkbox from './index'

describe('Checkbox', () => {
  let wrapper: Enzyme.ReactWrapper
  let mockOnClick: jest.Mock

  beforeEach(() => {
    mockOnClick = jest.fn()
    act(() => {
      wrapper = mountWithTheme(<Checkbox onClick={mockOnClick} />)
    })
  })

  it('should be defined', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('should match previous snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
