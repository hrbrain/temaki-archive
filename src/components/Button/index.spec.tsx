import * as Enzyme from 'enzyme'
import * as React from 'react'
import { act } from 'react-dom/test-utils'
import Button from './index'

describe('Button', () => {
  let wrapper: Enzyme.ShallowWrapper
  let mockOnClick: jest.Mock

  beforeEach(() => {
    mockOnClick = jest.fn()
    act(() => {
      wrapper = Enzyme.shallow(
        <Button type="box" onClick={mockOnClick}>
          OK
        </Button>
      )
    })
  })

  it('should be defined', () => {
    expect(wrapper).toBeDefined()
  })

  it('should match previous snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call onClick method by users click', () => {
    act(() => {
      wrapper.simulate('click')
    })
    expect(mockOnClick).toHaveBeenCalled()
  })
})
