import * as React from 'react'
import styled, { withTheme, RequiredThemeProps } from '~/modules/theme'
import * as ReactDates from 'react-dates'
import 'react-dates/initialize'
// 日本時間で固定
import 'moment/locale/ja'
import * as Moment from 'moment'
import * as IconFiles from '~/lib/iconFiles'
import * as Icon from '~/components/Icon'
import * as ErrorMessage from '~/components/lib/FormErrorMessage'

/**
 * Component
 */

type Props = {
    displayFormat?: string
    monthFormat?: string
    date: Date | null
    onChange: (date: Date | null) => void
    width: string
    errored?: boolean
    errorMessage?: string
    placeholderText?: string
    disabled?: boolean
    selectedColor?: string
    defaultHoverColor?: string
    theme: RequiredThemeProps
    isOutsideRange?: (day: any) => boolean
}

const isInclusivelyBeforeDay = (date: Date) => (day: any) => {
    return ReactDates.isInclusivelyBeforeDay(day, Moment(date))
}

const isInclusivelyAfterDay = (date: Date) => (day: any) => {
    return ReactDates.isInclusivelyAfterDay(day, Moment(date))
}

export const Util = {
    isInclusivelyAfterDay,
    isInclusivelyBeforeDay
}

export const Component = withTheme(
    React.memo<Props>(props => {
        const [focused, setFocused] = React.useState<boolean>(false)

        const conversionToMomentType = React.useCallback(
            (date: Date | null) => {
                return date ? Moment(date) : null
            },
            [props.date]
        )

        const toggleFocus = React.useCallback(() => {
            setFocused(!focused)
        }, [focused])

        const handleOnDateChange = React.useCallback(
            (date: null | Moment.Moment) => {
                if (!date) {
                    return props.onChange(null)
                }

                // 必ず12時が帰ってくるので9時にして返す（UTC上での0時）
                date.hour(9)
                return props.onChange(date.toDate())
            },
            [props.date, props.onChange]
        )

        const calendarIconRender = React.useMemo(() => {
            const color = props.disabled
                ? props.theme.colors.grayScale.S50
                : props.theme.colors.text.default
            return (
                <Icon.Component
                    color={color}
                    svg={IconFiles.icons.Calendar}
                    size="24px"
                />
            )
        }, [props.disabled])

        const ChevronLeftIconRender = React.useMemo(() => {
            return (
                <Icon.Component svg={IconFiles.icons.ChevronLeft} size="24px" />
            )
        }, [])

        const ChevronRightIconRender = React.useMemo(() => {
            return (
                <Icon.Component
                    svg={IconFiles.icons.ChevronRight}
                    size="24px"
                />
            )
        }, [])

        const allowAllDays = React.useCallback((day: any) => {
            if (props.isOutsideRange) {
                return props.isOutsideRange(day)
            }
            return false
        }, [])

        return (
            <Outer
                width={props.width}
                defaultHoverColor={props.defaultHoverColor}
                selectedColor={props.selectedColor}
                disabled={props.disabled}
                errored={props.errored}
            >
                <ReactDates.SingleDatePicker
                    id={'date'}
                    date={conversionToMomentType(props.date)}
                    focused={focused}
                    disabled={props.disabled}
                    placeholder={props.placeholderText}
                    customInputIcon={calendarIconRender}
                    displayFormat={props.displayFormat || 'YYYY年M月D日'}
                    numberOfMonths={1}
                    monthFormat={props.monthFormat || 'YYYY[年]M[月]'}
                    onDateChange={handleOnDateChange}
                    onFocusChange={toggleFocus}
                    navPrev={ChevronLeftIconRender}
                    navNext={ChevronRightIconRender}
                    enableOutsideDays={true}
                    isOutsideRange={allowAllDays}
                />
                <ErrorMessage.Component
                    message={props.errorMessage}
                    errored={props.errored}
                />
            </Outer>
        )
    })
)

/**
 * Styles
 */
type OuterProps = {
    width: string
    disabled?: boolean
    errored?: boolean
    selectedRangeColor?: string
    selectedColor?: string
    selectedHoverColor?: string
    defaultHoverColor?: string
}
const Outer = styled.div<OuterProps>`
    & {
        .PresetDateRangePicker_panel {
            padding: 0 22px 11px;
        }
        .PresetDateRangePicker_button {
            position: relative;
            height: 100%;
            text-align: center;
            background: 0 0;
            border: 2px solid #00a699;
            color: #00a699;
            padding: 4px 12px;
            margin-right: 8px;
            font: inherit;
            font-weight: 700;
            line-height: normal;
            overflow: visible;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            cursor: pointer;
        }
        .PresetDateRangePicker_button:active {
            outline: 0;
        }
        .PresetDateRangePicker_button__selected {
            color: #fff;
            background: #00a699;
        }
        .SingleDatepicker {
            width: 100%;
        }
        .SingleDatePickerInput {
            height: 40px;
            border: solid 1px
                ${props =>
                    props.errored
                        ? props.theme.colors.utilities.red.default
                        : props.theme.colors.grayScale.S10};
            border-radius: 6px;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: flex-start;
            align-items: center;
            width: ${props => props.width};
            padding: 0 12px;
            transition: all 0.15s;
        }
        .SingleDatePickerInput__withBorder {
        }
        .SingleDatePickerInput__rtl {
        }
        .SingleDatePickerInput__disabled {
            font-style: normal;
            color: ${props => props.theme.colors.main.grayScale[400]};
            cursor: not-allow;
            border: 1px solid ${props => props.theme.colors.main.grayScale[400]};
            background: ${props => props.theme.colors.main.grayScale[400]};
        }
        .SingleDatePickerInput__block {
        }
        .SingleDatePickerInput__showClearDate {
        }
        .SingleDatePickerInput_clearDate {
        }
        .SingleDatePickerInput_clearDate__default:focus,
        .SingleDatePickerInput_clearDate__default:hover {
        }
        .SingleDatePickerInput_clearDate__small {
        }
        .SingleDatePickerInput_clearDate__hide {
        }
        .SingleDatePickerInput_clearDate_svg {
        }
        .SingleDatePickerInput_clearDate_svg__small {
        }
        .SingleDatePickerInput_calendarIcon {
            border: none;
            outline: none;
            padding: 0 4px 0 0;
            cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
            background: ${props =>
                props.disabled
                    ? props.theme.colors.main.grayScale[400]
                    : props.theme.colors.main.grayScale[100]};
        }
        .SingleDatePickerInput_calendarIcon_svg {
            cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
        }
        .SingleDatePicker {
            position: relative;
            display: inline-block;
        }
        .SingleDatePicker > div {
            height: 100%;
            width: 100%;
        }
        .SingleDatePicker__block {
            display: block;
        }
        .SingleDatePicker_picker {
            z-index: 1;
            background-color: #fff;
            position: absolute;
            top: 48px !important;
        }
        .SingleDatePicker_picker__rtl {
            direction: rtl;
        }
        .SingleDatePicker_picker__directionLeft {
            left: 0;
        }
        .SingleDatePicker_picker__directionRight {
            right: 0;
        }
        .SingleDatePicker_picker__portal {
            background-color: rgba(0, 0, 0, 0.3);
            position: fixed;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
        }
        .SingleDatePicker_picker__fullScreenPortal {
            background-color: #fff;
        }
        .SingleDatePicker_closeButton {
            background: 0 0;
            border: 0;
            color: inherit;
            font: inherit;
            line-height: normal;
            overflow: visible;
            cursor: pointer;
            position: absolute;
            top: 0;
            right: 0;
            padding: 15px;
            z-index: 2;
        }
        .SingleDatePicker_closeButton:focus,
        .SingleDatePicker_closeButton:hover {
            color: darken(#cacccd, 10%);
            text-decoration: none;
        }
        .SingleDatePicker_closeButton_svg {
            height: 15px;
            width: 15px;
            fill: #cacccd;
        }
        .DayPickerKeyboardShortcuts_buttonReset {
            display: none;
        }
        .DayPickerKeyboardShortcuts_buttonReset:active {
            outline: 0;
        }
        .DayPickerKeyboardShortcuts_show {
            width: 33px;
            height: 26px;
            position: absolute;
            z-index: 2;
        }
        .DayPickerKeyboardShortcuts_show::before {
            content: '';
            display: block;
            position: absolute;
        }
        .DayPickerKeyboardShortcuts_show__bottomRight {
            bottom: 0;
            right: 0;
        }
        .DayPickerKeyboardShortcuts_show__bottomRight::before {
            border-top: 26px solid transparent;
            border-right: 33px solid #00a699;
            bottom: 0;
            right: 0;
        }
        .DayPickerKeyboardShortcuts_show__bottomRight:hover::before {
            border-right: 33px solid #008489;
        }
        .DayPickerKeyboardShortcuts_show__topRight {
            top: 0;
            right: 0;
        }
        .DayPickerKeyboardShortcuts_show__topRight::before {
            border-bottom: 26px solid transparent;
            border-right: 33px solid #00a699;
            top: 0;
            right: 0;
        }
        .DayPickerKeyboardShortcuts_show__topRight:hover::before {
            border-right: 33px solid #008489;
        }
        .DayPickerKeyboardShortcuts_show__topLeft {
            top: 0;
            left: 0;
        }
        .DayPickerKeyboardShortcuts_show__topLeft::before {
            border-bottom: 26px solid transparent;
            border-left: 33px solid #00a699;
            top: 0;
            left: 0;
        }
        .DayPickerKeyboardShortcuts_show__topLeft:hover::before {
            border-left: 33px solid #008489;
        }
        .DayPickerKeyboardShortcuts_showSpan {
            color: #fff;
            position: absolute;
        }
        .DayPickerKeyboardShortcuts_showSpan__bottomRight {
            bottom: 0;
            right: 5px;
        }
        .DayPickerKeyboardShortcuts_showSpan__topRight {
            top: 1px;
            right: 5px;
        }
        .DayPickerKeyboardShortcuts_showSpan__topLeft {
            top: 1px;
            left: 5px;
        }
        .DayPickerKeyboardShortcuts_panel {
            overflow: auto;
            background: #fff;
            border: 1px solid #dbdbdb;
            border-radius: 2px;
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            z-index: 2;
            padding: 22px;
            margin: 33px;
            text-align: left;
        }
        .DayPickerKeyboardShortcuts_title {
            font-size: 14px;
            font-weight: 700;
            margin: 0;
        }
        .DayPickerKeyboardShortcuts_list {
            list-style: none;
            padding: 0;
            font-size: 14px;
        }
        .DayPickerKeyboardShortcuts_close {
            position: absolute;
            right: 22px;
            top: 22px;
            z-index: 2;
        }
        .DayPickerKeyboardShortcuts_close:active {
            outline: 0;
        }
        .DayPickerKeyboardShortcuts_closeSvg {
            height: 15px;
            width: 15px;
            fill: #cacccd;
        }
        .DayPickerKeyboardShortcuts_closeSvg:focus,
        .DayPickerKeyboardShortcuts_closeSvg:hover {
            fill: #82888a;
        }
        td.CalendarDay {
            width: 32px !important;
            height: 32px !important;
            padding: 6px 6px;
        }
        td.CalendarDay__default {
            width: 44px;
            height: 44px;
            marging-top: 12px;
            marging-bottom: 12px;
        }
        .CalendarDay {
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            cursor: pointer;
            font-size: 14px;
            text-align: center;
            margin-top: 12px;
            margin-bottom: 12px;
        }
        .CalendarDay:active {
            outline: 0;
        }
        .CalendarDay__defaultCursor {
            cursor: default;
        }
        .CalendarDay__default {
            color: ${props => props.theme.colors.grayScale.S100};
            background: #fff;
        }
        .CalendarDay__default:hover {
            background: ${props =>
                props.defaultHoverColor
                    ? `${props.defaultHoverColor}`
                    : '#e4e7e7'};
            color: inherit;
        }
        .CalendarDay__hovered_offset {
            background: #f4f5f5;
            border: 1px double #e4e7e7;
            color: inherit;
        }
        .CalendarDay__outside {
            border: 0;
            background: #fff;
            color: #d6d6d6;
        }
        .CalendarDay__outside:hover {
            border: 0;
        }
        .CalendarDay__blocked_minimum_nights {
            background: #fff;
            border: 1px solid #eceeee;
            color: #cacccd;
        }
        .CalendarDay__blocked_minimum_nights:active,
        .CalendarDay__blocked_minimum_nights:hover {
            background: #fff;
            color: #cacccd;
        }
        .CalendarDay__highlighted_calendar {
            background: #ffe8bc;
            color: ${props => props.theme.colors.grayScale.S100};
        }
        .CalendarDay__highlighted_calendar:active,
        .CalendarDay__highlighted_calendar:hover {
            background: #ffce71;
            color: ${props => props.theme.colors.grayScale.S100};
        }
        .CalendarDay__selected_span {
            background: #66e2da;
            border: 1px double #33dacd;
            color: #fff;
        }
        .CalendarDay__selected_span:active,
        .CalendarDay__selected_span:hover {
            background: #33dacd;
            border: 1px double #33dacd;
            color: #fff;
        }
        .CalendarDay__selected,
        .CalendarDay__selected:active,
        .CalendarDay__selected:hover {
            background: ${props =>
                props.selectedColor ? `${props.selectedColor}` : '#222222'};
            color: #fff;
            border-radius: 70px;
        }
        .CalendarDay__hovered_span,
        .CalendarDay__hovered_span:hover {
            background: #b2f1ec;
            border: 1px double #80e8e0;
            color: #007a87;
        }
        .CalendarDay__hovered_span:active {
            background: #80e8e0;
            border: 1px double #80e8e0;
            color: #007a87;
        }
        .CalendarDay__blocked_calendar,
        .CalendarDay__blocked_calendar:active,
        .CalendarDay__blocked_calendar:hover {
            background: #cacccd;
            border: 1px solid #cacccd;
            color: #82888a;
        }
        .CalendarDay__blocked_out_of_range,
        .CalendarDay__blocked_out_of_range:active,
        .CalendarDay__blocked_out_of_range:hover {
            background: #fff;
            color: #cacccd;
        }
        .CalendarDay__hovered_start_first_possible_end {
            background: #eceeee;
            border: 1px double #eceeee;
        }
        .CalendarDay__hovered_start_blocked_min_nights {
            background: #eceeee;
            border: 1px double #e4e7e7;
        }
        .CalendarMonth {
            padding: 0px 0px !important;
            background: #fff;
            text-align: center;
            vertical-align: top;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
        .CalendarMonth_table {
            border-collapse: collapse;
            border-spacing: 0;
            margin-top: 40px;
        }
        .CalendarMonth_verticalSpacing {
            border-collapse: separate;
        }
        .CalendarMonth_caption {
            color: ${props => props.theme.colors.grayScale.S100};
            font-size: 14px;
            text-align: center;
            padding-top: 10px;
            padding-bottom: 12px;
            caption-side: initial;
        }
        .CalendarMonth_caption strong {
            font-weight: bold;
        }
        .CalendarMonth_caption__verticalScrollable {
            padding-top: 12px;
            padding-bottom: 7px;
        }
        .CalendarMonthGrid {
            background: #fff;
            text-align: left;
            z-index: 0;
        }
        .CalendarMonthGrid__animating {
            z-index: 1;
        }
        .CalendarMonthGrid__horizontal {
            position: absolute;
            left: 9px;
        }
        .CalendarMonthGrid__vertical {
            margin: 0 auto;
        }
        .CalendarMonthGrid__vertical_scrollable {
            margin: 0 auto;
            overflow-y: scroll;
        }
        .CalendarMonthGrid_month__horizontal {
            display: inline-block;
            vertical-align: top;
            min-height: 100%;
        }
        .CalendarMonthGrid_month__hideForAnimation {
            position: absolute;
            z-index: -1;
            opacity: 0;
            pointer-events: none;
        }
        .CalendarMonthGrid_month__hidden {
            visibility: hidden;
        }
        div.DayPickerNavigation div:first-of-type {
            padding-left: 7px;
        }
        div.DayPickerNavigation div:last-of-type {
            padding-right: 22px;
        }

        .DayPickerNavigation {
            justify-content: space-between;
            display: flex;
            position: relative;
            z-index: 2;
        }
        .DayPickerNavigation__horizontal {
            height: 0;
        }
        .DayPickerNavigation__verticalDefault {
            position: absolute;
            width: 100%;
            height: 52px;
            bottom: 0;
            left: 0;
        }
        .DayPickerNavigation__verticalScrollableDefault {
            position: relative;
        }
        .DayPickerNavigation__bottom {
            height: auto;
        }
        .DayPickerNavigation__bottomDefault {
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            display: -webkit-box;
            display: -moz-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-justify-content: space-between;
            justify-content: space-between;
        }
        .DayPickerNavigation_button {
            padding-right: 12px;
            padding-top: 8px;
            padding-left: 12px;
            cursor: pointer;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            border: 0;
            margin: 0;
        }
        .DayPickerNavigation_button__default {
            border: 1px solid #e4e7e7;
            background-color: #fff;
            color: #757575;
        }
        .DayPickerNavigation_button__default:focus,
        .DayPickerNavigation_button__default:hover {
            border: 1px solid #c4c4c4;
        }
        .DayPickerNavigation_button__default:active {
            background: #f2f2f2;
        }
        .DayPickerNavigation_button__disabled {
            cursor: not-allowed;
            font-style: normal;
            color: ${props => props.theme.colors.grayScale.S50};
            border: 1px solid ${props => props.theme.colors.main.grayScale[400]};
            background: ${props => props.theme.colors.main.grayScale[400]};
        }
        .DayPickerNavigation_button__disabled:focus,
        .DayPickerNavigation_button__disabled:hover {
            cursor: not-allowed;
            border: 1px solid ${props => props.theme.colors.main.grayScale[400]};
        }
        .DayPickerNavigation_button__disabled:active {
            background: 0 0;
        }
        .DayPickerNavigation_button__horizontalDefault {
            position: absolute;
            top: 18px;
            line-height: 0.78;
            border-radius: 3px;
            padding: 6px 9px;
        }
        .DayPickerNavigation_bottomButton__horizontalDefault {
            position: static;
            margin: -10px 22px 30px;
        }
        .DayPickerNavigation_leftButton__horizontalDefault {
            left: 22px;
        }
        .DayPickerNavigation_rightButton__horizontalDefault {
            right: 22px;
        }
        .DayPickerNavigation_button__verticalDefault {
            padding: 5px;
            background: #fff;
            box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
            position: relative;
            display: inline-block;
            text-align: center;
            height: 100%;
            width: 50%;
        }
        .DayPickerNavigation_nextButton__verticalDefault {
            border-left: 0;
        }
        .DayPickerNavigation_nextButton__verticalScrollableDefault {
            width: 100%;
        }
        .DayPickerNavigation_svg__horizontal {
            height: 19px;
            width: 19px;
            fill: #82888a;
            display: block;
        }
        .DayPickerNavigation_svg__vertical {
            height: 42px;
            width: 42px;
            fill: ${props => props.theme.colors.grayScale.S100};
        }
        .DayPickerNavigation_svg__disabled {
            fill: #f2f2f2;
        }
        .DayPicker {
            background: #fff;
            position: relative;
            text-align: left;
            width: 245px !important;
        }
        .DayPicker__horizontal {
            background: #fff;
        }
        .DayPicker__horizontal > div > div:first-child {
            width: 258px !important;
        }
        .DayPicker__verticalScrollable {
            height: 100%;
        }
        .DayPicker__hidden {
            visibility: hidden;
        }
        .DayPicker__withBorder {
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05),
                0 0 0 1px rgba(0, 0, 0, 0.07);
            border-radius: 3px;
        }
        .DayPicker_portal__horizontal {
            box-shadow: none;
            position: absolute;
            left: 50%;
            top: 50%;
        }
        .DayPicker_portal__vertical {
            position: initial;
        }
        .DayPicker_focusRegion {
            outline: 0;
        }
        .DayPicker_calendarInfo__horizontal,
        .DayPicker_wrapper__horizontal {
            display: inline-block;
            vertical-align: top;
        }
        .DayPicker_weekHeaders {
            position: relative;
            left: -9px !important;
        }
        .DayPicker_weekHeaders__horizontal {
            margin-left: 9px;
        }
        .DayPicker_weekHeader {
            border-bottom: solid 1px rgb(234, 234, 234);
            border-top: solid 1px rgb(234, 234, 234);
            position: absolute;
            top: 39px;
            z-index: 2;
            text-align: left;
            padding: 0px 11px 0px 10px !important;
        }
        .DayPicker_weekHeader__vertical {
            left: 50%;
        }
        .DayPicker_weekHeader__verticalScrollable {
            top: 0;
            display: table-row;
            border-bottom: 1px solid #dbdbdb;
            background: #fff;
            margin-left: 0;
            left: 0;
            width: 100%;
            text-align: center;
        }
        .DayPicker_weekHeader_ul {
            list-style: none;
            padding-left: 0;
            padding-right: 0;
            font-size: 14px;
        }
        .DayPicker_weekHeader_li {
            display: inline-block;
            text-align: center;
            margin-top: 8px;
            margin-bottom: 8px;
            width: 32px !important;
        }
        .DayPicker_weekHeader_li > small {
            font-size: 14px;
        }
        .DayPicker_transitionContainer {
            position: relative;
            overflow: hidden;
            border-radius: 6px;
            width: 245px !important;
        }
        .DayPicker_transitionContainer__horizontal {
            -webkit-transition: height 0.2s ease-in-out;
            -moz-transition: height 0.2s ease-in-out;
            transition: height 0.2s ease-in-out;
        }
        .DayPicker_transitionContainer__vertical {
            width: 100%;
        }
        .DayPicker_transitionContainer__verticalScrollable {
            padding-top: 20px;
            height: 100%;
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            overflow-y: scroll;
        }
        .DayPicker_transitionContainer__vertical {
            width: 100%;
        }
        .DayPicker_transitionContainer__verticalScrollable {
            padding-top: 20px;
            height: 100%;
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            overflow-y: scroll;
        }
        .DateInput {
            height: 100%;
            background-color: transparent;
            margin: 0;
            position: relative;
            vertical-align: middle;
            display: contents;
            text-align: left;
        }
        .DateInput__small {
            width: 97px;
        }
        .DateInput__block {
            width: 100%;
        }
        .DateInput__disabled {
            background: #f2f2f2;
            color: #f2f2f2;
        }
        .DateInput_input {
            text-align: left;
            background-color: transparent;
            border: none;
            font-weight: 200;
            line-height: 24px;
            color: ${props => props.theme.colors.grayScale.S100};
            height: 100%;
            width: 112px;
            font-size: 14px;
        }
        .DateInput_input::placeholder {
            color: ${props => props.theme.colors.grayScale.S50};
        }
        .DateInput_input__small {
            font-size: 14px;
            line-height: 18px;
            letter-spacing: 0.2px;
            padding: 7px 7px 5px;
        }
        .DateInput_input__regular {
            font-weight: auto;
        }
        .DateInput_input__readOnly {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
        .DateInput_input__disabled {
            cursor: not-allowed;
            font-style: normal;
            color: ${props => props.theme.colors.grayScale.S50};
            border: 1px solid ${props => props.theme.colors.main.grayScale[400]};
            background: ${props => props.theme.colors.main.grayScale[400]};
        }
        .DateInput_input__disabled::placeholder {
            color: ${props => props.theme.colors.grayScale.S50};
        }
        .DateInput_input__focused {
            outline: none;
            border-color: ${props =>
                props.theme.colors.utilities.highlightGreen};
        }
        .DateInput_screenReaderMessage {
            border: 0;
            clip: rect(0, 0, 0, 0);
            height: 1px;
            margin: -1px;
            overflow: hidden;
            padding: 0;
            position: absolute;
            width: 1px;
        }
        .DateInput_fang {
            display: none;
            position: absolute;
            width: 20px;
            height: 10px;
            left: 22px;
            z-index: 2;
        }
        .DateInput_fangShape {
            fill: #fff;
        }
        .DateInput_fangStroke {
            stroke: #dbdbdb;
            fill: transparent;
        }
        .DateRangePickerInput {
            background-color: #fff;
            display: inline-block;
        }
        .DateRangePickerInput__disabled {
            background: #f2f2f2;
        }
        .DateRangePickerInput__withBorder {
            border-radius: 2px;
            border: 1px solid #dbdbdb;
        }
        .DateRangePickerInput__rtl {
            direction: rtl;
        }
        .DateRangePickerInput__block {
            display: block;
        }
        .DateRangePickerInput__showClearDates {
            padding-right: 30px;
        }
        .DateRangePickerInput_arrow {
            display: inline-block;
            vertical-align: middle;
            color: ${props => props.theme.colors.grayScale.S100};
            width: 12px;
        }
        .DateRangePickerInput_arrow_svg {
            vertical-align: middle;
            fill: ${props => props.theme.colors.grayScale.S100};
            height: 24px;
            width: 24px;
        }
        .DateRangePickerInput_clearDates {
            background: 0 0;
            border: 0;
            color: inherit;
            font: inherit;
            line-height: normal;
            overflow: visible;
            cursor: pointer;
            padding: 10px;
            margin: 0 10px 0 5px;
            position: absolute;
            right: 0;
            top: 50%;
            -webkit-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);
        }
        .DateRangePickerInput_clearDates__small {
            padding: 6px;
        }
        .DateRangePickerInput_clearDates_default:focus,
        .DateRangePickerInput_clearDates_default:hover {
            background: #dbdbdb;
            border-radius: 50%;
        }
        .DateRangePickerInput_clearDates__hide {
            visibility: hidden;
        }
        .DateRangePickerInput_clearDates_svg {
            fill: #82888a;
            height: 12px;
            width: 15px;
            vertical-align: middle;
        }
        .DateRangePickerInput_clearDates_svg__small {
            height: 9px;
        }
        .DateRangePickerInput_calendarIcon {
            background: 0 0;
            border: 0;
            color: inherit;
            font: inherit;
            line-height: normal;
            overflow: visible;
            cursor: pointer;
            display: inline-block;
            vertical-align: middle;
            padding: 10px;
            margin: 0 5px 0 10px;
        }
        .DateRangePickerInput_calendarIcon_svg {
            fill: #82888a;
            height: 15px;
            width: 14px;
            vertical-align: middle;
        }
        .DateRangePicker {
            position: relative;
            display: inline-block;
        }
        .DateRangePicker__block {
            display: block;
        }
        .DateRangePicker_picker {
            z-index: 1;
            background-color: #fff;
            position: absolute;
        }
        .DateRangePicker_picker__rtl {
            direction: rtl;
        }
        .DateRangePicker_picker__directionLeft {
            left: 0;
        }
        .DateRangePicker_picker__directionRight {
            right: 0;
        }
        .DateRangePicker_picker__portal {
            background-color: rgba(0, 0, 0, 0.3);
            position: fixed;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
        }
        .DateRangePicker_picker__fullScreenPortal {
            background-color: #fff;
        }
        .DateRangePicker_closeButton {
            background: 0 0;
            border: 0;
            color: inherit;
            font: inherit;
            line-height: normal;
            overflow: visible;
            cursor: pointer;
            position: absolute;
            top: 0;
            right: 0;
            padding: 15px;
            z-index: 2;
        }
        .DateRangePicker_closeButton:focus,
        .DateRangePicker_closeButton:hover {
            color: darken(#cacccd, 10%);
            text-decoration: none;
        }
        .DateRangePicker_closeButton_svg {
            height: 15px;
            width: 15px;
            fill: #cacccd;
        }
    }
`
