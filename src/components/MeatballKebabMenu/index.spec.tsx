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
        expect(checkEl).toHaveStyleRule('transform-origin', 'top', {
            modifier: '&.top'
        })
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
        expect(checkEl).toHaveStyleRule('transform-origin', 'bottom', {
            modifier: '&.bottom'
        })
    })

    describe('hidden-vertical', () => {
        it('positionがtopのときにhidden-verticalになる', () => {
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
            const checkEl = wrapper.find('ul[data-test="list-component"]')
            expect(checkEl).toHaveStyleRule('visibility', 'hidden', {
                modifier: '&.hidden-vertical'
            })
            expect(checkEl).toHaveStyleRule('transform', 'scaleY(0)', {
                modifier: '&.hidden-vertical'
            })
        })

        it('positionがbottomのときにhidden-verticalになる', () => {
            act(() => {
                wrapper = mountWithTheme(
                    <MeatballKebabMenu.Component
                        type={'meatball'}
                        position={'bottom'}
                        listItems={item}
                        onClick={mockOnClick}
                    />
                )
            })
            const checkEl = wrapper.find('ul[data-test="list-component"]')
            expect(checkEl).toHaveStyleRule('visibility', 'hidden', {
                modifier: '&.hidden-vertical'
            })
            expect(checkEl).toHaveStyleRule('transform', 'scaleY(0)', {
                modifier: '&.hidden-vertical'
            })
        })

        it('positionがleftのときにhidden-horizontalになる', () => {
            act(() => {
                wrapper = mountWithTheme(
                    <MeatballKebabMenu.Component
                        type={'meatball'}
                        position={'left'}
                        listItems={item}
                        onClick={mockOnClick}
                    />
                )
            })
            const checkEl = wrapper.find('ul[data-test="list-component"]')
            expect(checkEl).toHaveStyleRule('visibility', 'hidden', {
                modifier: '&.hidden-horizontal'
            })
            expect(checkEl).toHaveStyleRule('transform', 'scaleX(0)', {
                modifier: '&.hidden-horizontal'
            })
        })

        it('positionがrightのときにhidden-horizontalになる', () => {
            act(() => {
                wrapper = mountWithTheme(
                    <MeatballKebabMenu.Component
                        type={'meatball'}
                        position={'right'}
                        listItems={item}
                        onClick={mockOnClick}
                    />
                )
            })
            const checkEl = wrapper.find('ul[data-test="list-component"]')
            expect(checkEl).toHaveStyleRule('visibility', 'hidden', {
                modifier: '&.hidden-horizontal'
            })
            expect(checkEl).toHaveStyleRule('transform', 'scaleX(0)', {
                modifier: '&.hidden-horizontal'
            })
        })
    })
})
