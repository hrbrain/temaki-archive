import * as ReactDates from 'react-dates'
import * as Moment from 'moment'

const isInclusivelyBeforeDay = (date: Date) => (day: Moment.Moment) => {
    return ReactDates.isInclusivelyBeforeDay(day, Moment(date))
}

const isInclusivelyAfterDay = (date: Date) => (day: Moment.Moment) => {
    return ReactDates.isInclusivelyAfterDay(day, Moment(date))
}

export const Utils = {
    isInclusivelyAfterDay,
    isInclusivelyBeforeDay
}
