import * as Antd from 'antd'
/**
 * AntDesign内でglobalStyleが存在するため(https://github.com/ant-design/ant-design/issues/9363)
 * この方法を取っているが、localだと挙動が遅い
 * lessの変数とかを圧縮した結果がdistのcss
 * -> dist内のcssにグローバルcss的なものが入ってる。antは将来的にグローバルcss辞める予定。
 * -> そのためコンポーネント毎にcssを上書きするような書き方にしないといけない
 * -> styled-components がハッシュ化されるので上書きしてもハッシュ化されてしまっている…？lessが変数つかってるとかでバッティングしてるっぽい…
 */
// import 'antd/lib/date-picker/style/index.css'
import locale from 'antd/es/date-picker/locale/ja_JP'
import './lib/styles.less'

import * as React from 'react'
import styled from '~/modules/theme'

// 日本時間で固定
import 'moment/locale/ja'
import * as moment from 'moment'
import * as IconFiles from '~/lib/iconFiles'
import * as Icon from '~/components/Icon'
import * as ErrorMessage from '~/components/lib/FormErrorMessage'
import * as Button from '~/components/Button'

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
    selectedColor?: string
    defaultHoverColor?: string
    showTime?: boolean
}

// 週の始まり
moment.locale('ja', {
    week: {
        dow: 1
    } as any
})

export const Component = React.memo<Props>(props => {
    const conversionToMomentType = React.useCallback(
        (date: Date | null): moment.Moment | null | undefined => {
            return date ? moment(date) : null
        },
        [props.date]
    )

    // const handleOnDateChange = React.useCallback(
    //     (date: null | Moment.Moment) => {
    //         if (!date) return props.onChange(null)

    //         // 必ず12時が帰ってくるので9時にして返す（UTC上での0時）
    //         date.hour(9)
    //         return props.onChange(date.toDate())
    //     },
    //     [props.date, props.onChange]
    // )

    const calendarIconRender = React.useMemo(() => {
        return <Icon.Component svg={IconFiles.icons.Calendar} size="24px" />
    }, [])

    // const footer = React.useMemo(() => {
    //     return () => {
    //         return (
    //             <ApplicateButton
    //                 onClick={() => handleOnDateChange(props.date)}
    //                 variant="box"
    //             >
    //                 適用
    //             </ApplicateButton>
    //         )
    //     }
    // }, [props.date])

    const renderFooter = React.useMemo(() => {
        return () => {
            const date = conversionToMomentType(props.date) || null
            if (!date) return
            return (
                <ApplicateButton
                    // onClick={() => handleOnDateChange(date)}
                    variant="box"
                >
                    適用
                </ApplicateButton>
            )
        }
    }, [props.date])

    return (
        <Outer
            width={props.width}
            defaultHoverColor={props.defaultHoverColor}
            selectedColor={props.selectedColor}
            errored={props.errored}
        >
            <Antd.DatePicker
                locale={locale}
                placeholder={props.placeholderText}
                format={props.displayFormat || 'YYYY年M月D日'}
                showToday={false}
                suffixIcon={calendarIconRender}
                value={conversionToMomentType(props.date)}
                size={'large'}
                renderExtraFooter={renderFooter}
                showTime={props.showTime}
            />
            <ErrorMessage.Component
                message={props.errorMessage}
                errored={props.errored}
            />
        </Outer>
    )
})

/**
 * Styles
 */

type OuterProps = {
    width: string
    errored?: boolean
    selectedRangeColor?: string
    selectedColor?: string
    selectedHoverColor?: string
    defaultHoverColor?: string
}

const Outer = styled.div<OuterProps>`
    & {
        cursor: pointer;
        .ant-picker {
            padding: 8.5px 12px;
            border-color: ${props =>
                props.errored
                    ? props.theme.colors.utilities.red.default
                    : props.theme.colors.grayScale.S10};
            border-radius: 6px;
            box-sizing: border-box;
        }
        .ant-picker-large .ant-picker-input > input {
            font-size: 14px;
        }
        .ant-picker:hover,
        .ant-picker-focused {
            border-color: #7dd467;
            box-shadow: none;
        }
        .ant-picker-input > input {
            margin-left: 28px;
            color: #333333;
            line-height: 1.5;
        }
        .ant-picker-suffix {
            position: absolute;
            margin-left: 0;
        }
        .ant-picker-clear,
        .ant-picker-clear .anticon {
            display: none;
        }
        .ant-picker-cell {
            &::before {
                width: 32px;
                height: 32px;
            }
            .ant-picker-cell-inner {
                width: 32px;
                height: 32px;
                min-width: 32px;
                line-height: 32px;
            }
        }
        .ant-picker-content {
            td {
                min-width: 32px;
                width: 32px;
                height: 32px;
            }
        }
    }
`

const ApplicateButton = styled(Button.Component)``
