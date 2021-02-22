import * as Enzyme from 'enzyme'
import * as React from 'react'
import { createMemoryHistory } from 'history'
import { mountWithTheme, WithRouter } from '~/__test__/utils'
import * as SegmentedControl from './index'

describe('SegmentedControl', () => {
    let wrapper: Enzyme.ReactWrapper

    describe('default', () => {
        let items: SegmentedControl.DefaultComponentItem[]
        let mockOnClickTab: jest.Mock
        beforeEach(() => {
            mockOnClickTab = jest.fn()
            items = [
                {
                    text: '最初のタブ'
                },
                {
                    text: '真ん中のタブ'
                },
                {
                    text: '最後のタブ'
                }
            ]
        })
        it('typeが指定されていない場合はDefault presenterがレンダリングされる', () => {
            wrapper = mountWithTheme(
                <SegmentedControl.Component
                    selectedIndex={0}
                    items={items}
                    onClickTab={mockOnClickTab}
                    className="m-10"
                />
            )

            expect(wrapper.exists()).toBe(true)
        })

        it('typeにdefaultが指定されるとDefault presenterがレンダリングされる', () => {
            wrapper = mountWithTheme(
                <SegmentedControl.Component
                    type="default"
                    selectedIndex={0}
                    items={items}
                    onClickTab={mockOnClickTab}
                    className="m-10"
                />
            )

            expect(wrapper.exists()).toBe(true)
        })

        it('onClickTabがクリックできる', () => {
            wrapper = mountWithTheme(
                <SegmentedControl.Component
                    type="default"
                    selectedIndex={0}
                    items={items}
                    onClickTab={mockOnClickTab}
                    className="m-10"
                />
            )

            wrapper.find('div[data-test="default-item0"]').simulate('click')
            expect(mockOnClickTab).toHaveBeenCalled()
        })
    })
    describe('link', () => {
        let items: SegmentedControl.LinkComponentItem[]
        beforeEach(() => {
            items = [
                {
                    text: '最初のタブ',
                    to: '/first'
                },
                {
                    text: '真ん中のタブ',
                    to: '/middle'
                },
                {
                    text: '最後のタブ',
                    to: '/last'
                }
            ]
        })
        it('typeにlinkが指定されるとLink presenterがレンダリングされる', () => {
            const history = createMemoryHistory()

            wrapper = mountWithTheme(
                <WithRouter history={history}>
                    <SegmentedControl.Component
                        type="link"
                        items={items}
                        className="m-10"
                    />
                </WithRouter>
            )

            expect(wrapper.exists()).toBe(true)
        })

        /**
         * TODO: aタグをクリックしたときのテスト方法が不明なので、分かったら書く
         * @see: https://github.com/enzymejs/enzyme/issues/1426#issuecomment-353335738
         */
        it.todo(
            'a[data-test="link-item1"]をクリックすると、pathnameが/middleになる'
        )
    })
})
