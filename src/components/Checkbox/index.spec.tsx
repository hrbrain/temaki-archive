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

  it('should call onClick by users click', () => {
    wrapper.simulate('click')
    expect(mockOnClick).toHaveBeenCalled()
  })

  it('should render nocheck icon', () => {
    const el = wrapper.find('div[data-test="nocheck-box"]')
    expect(el).toHaveLength(1)
  })

  it('should render checked icon by checked props', () => {
    wrapper = mountWithTheme(<Checkbox checked onClick={mockOnClick} />)
    const checkedEl = wrapper.find('div[data-test="checked-box"]')
    expect(checkedEl).toHaveLength(1)
  })

  it('should render indeterminate icon by indeterminate props', () => {
    wrapper = mountWithTheme(<Checkbox indeterminate onClick={mockOnClick} />)
    const indeEl = wrapper.find('div[data-test="indeterminate-box"]')
    expect(indeEl).toHaveLength(1)
  })
})
