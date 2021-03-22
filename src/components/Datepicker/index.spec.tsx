import * as Enzyme from 'enzyme'
import * as React from 'react'
import { mountWithTheme } from '~/__test__/utils'
import * as DatePicker from './index'
import * as Moment from 'moment'

const today = '2019-12-25'
const pastDay = '2019-12-24'
const futureDay = '2019-12-26'

describe('DatePicker', () => {
    let wrapper: Enzyme.ReactWrapper
    let mockOnChange: jest.Mock

    it('dateが存在する場合、DatePickerコンポーネントが定義されている', () => {
        wrapper = mountWithTheme(
            <DatePicker.Component
                date={new Date(today)}
                onChange={mockOnChange}
                width="100%"
            />
        )
        expect(wrapper.exists()).toBe(true)
    })

    it('dateがnullの場合、DatePickerコンポーネントが定義されている', () => {
        wrapper = mountWithTheme(
            <DatePicker.Component
                date={null}
                onChange={mockOnChange}
                width="100%"
            />
        )
        expect(wrapper.exists()).toBe(true)
    })

    describe('Utils#isInclusivelyBeforeDay', () => {
        it('過去の日付を渡す', () => {
            const result = DatePicker.Utils.isInclusivelyBeforeDay(
                new Date(today)
            )(Moment(new Date(pastDay)))

            expect(result).toBeTruthy()
        })

        it('現在の日付を渡す', () => {
            const result = DatePicker.Utils.isInclusivelyBeforeDay(
                new Date(today)
            )(Moment(new Date(today)))

            expect(result).toBeTruthy()
        })

        it('未来の日付を渡す', () => {
            const result = DatePicker.Utils.isInclusivelyBeforeDay(
                new Date(today)
            )(Moment(new Date(futureDay)))

            expect(result).toBeFalsy()
        })
    })

    describe('Utils#isInclusivelyAfterDay', () => {
        it('過去の日付を渡す', () => {
            const result = DatePicker.Utils.isInclusivelyAfterDay(
                new Date(today)
            )(Moment(new Date(pastDay)))

            expect(result).toBeFalsy()
        })

        it('現在の日付を渡す', () => {
            const result = DatePicker.Utils.isInclusivelyAfterDay(
                new Date(today)
            )(Moment(new Date(today)))

            expect(result).toBeTruthy()
        })

        it('未来の日付を渡す', () => {
            const result = DatePicker.Utils.isInclusivelyAfterDay(
                new Date(today)
            )(Moment(new Date(futureDay)))

            expect(result).toBeTruthy()
        })
    })
})
