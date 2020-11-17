/* eslint-disable import/no-duplicates */
import * as Enzyme from 'enzyme'
import * as React from 'react'
import { act } from 'react-dom/test-utils'
import { mountWithTheme } from '../../__test__/utils'
import 'jest-styled-components'

import * as MeatballKebabMenu from './index'

describe('MeatballKebabMenu', () => {
    let wrapper: Enzyme.ReactWrapper
    let mockOnClick: jest.Mock
    let item: MeatballKebabMenu.Item[]

    beforeEach(() => {
        mockOnClick = jest.fn()
        item = [
            {
                item: 'リスト１',
                onClick: mockOnClick
            },
            {
                item: 'リスト２',
                onClick: mockOnClick
            },
            {
                item: 'リスト３',
                onClick: mockOnClick
            }
        ]
        act(() => {
            wrapper = mountWithTheme(
                <MeatballKebabMenu.Component
                    type={'meatball'}
                    position={'top'}
                    listItems={item}
                    onClick={mockOnClick}
                />
            )
        })
    })

    it('コンポーネントが定義されている', () => {
        expect(wrapper.exists()).toBe(true)
    })

    it('MenuのonClickが呼ばれる', () => {
        wrapper.find('div[data-test="menu-component"]').simulate('click')
        expect(mockOnClick).toHaveBeenCalled()
    })

    it('ListItemのonClickが呼ばれる', () => {
        wrapper.find('li[data-test="list-item0"]').simulate('click')
        expect(mockOnClick).toHaveBeenCalled()
    })

    it('top時のリストが正常に表示される', () => {
        const checkEl = wrapper.find('ul[data-test="list-component"]')

        expect(checkEl).toHaveStyleRule('transform-origin', 'top')
        expect(checkEl).toHaveStyleRule('visibility', 'hidden')
        expect(checkEl).toHaveStyleRule('transform', 'scaleY(0)')
    })

    it('bottom時のリストが正常に表示される', () => {
        wrapper = mountWithTheme(
            <MeatballKebabMenu.Component
                type={'meatball'}
                listItems={[{ item: 'dummy', onClick: mockOnClick }]}
                position={'bottom'}
                onClick={mockOnClick}
            />
        )

        const checkEl = wrapper.find('ul[data-test="list-component"]')

        expect(checkEl).toHaveStyleRule('transform-origin', 'bottom')
        expect(checkEl).toHaveStyleRule('visibility', 'hidden')
        expect(checkEl).toHaveStyleRule('transform', 'scaleY(0)')
    })

    it('left時のリストが正常に表示される', () => {
        wrapper = mountWithTheme(
            <MeatballKebabMenu.Component
                type={'meatball'}
                listItems={[{ item: 'dummy', onClick: mockOnClick }]}
                position={'left'}
                onClick={mockOnClick}
            />
        )

        const checkEl = wrapper.find('ul[data-test="list-component"]')

        expect(checkEl).toHaveStyleRule('transform-origin', 'left')
        expect(checkEl).toHaveStyleRule('visibility', 'hidden')
        expect(checkEl).toHaveStyleRule('transform', 'scaleX(0)')
    })

    it('right時のリストが正常に表示される', () => {
        wrapper = mountWithTheme(
            <MeatballKebabMenu.Component
                type={'meatball'}
                listItems={[{ item: 'dummy', onClick: mockOnClick }]}
                position={'right'}
                onClick={mockOnClick}
            />
        )

        const checkEl = wrapper.find('ul[data-test="list-component"]')

        expect(checkEl).toHaveStyleRule('transform-origin', 'right')
        expect(checkEl).toHaveStyleRule('visibility', 'hidden')
        expect(checkEl).toHaveStyleRule('transform', 'scaleX(0)')
    })
})
