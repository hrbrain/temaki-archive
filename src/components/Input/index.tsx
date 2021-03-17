import * as React from 'react'

import * as NumberContainer from './containers/Number'
import * as TextContainer from './containers/Text'
import * as Presenter from './presenters/Default'

//------------------------------------------------------------------------------
// Utils
//------------------------------------------------------------------------------
export type NumberValue = number
export type StringValue = string

const TEXT = 'text' as const
const NUMBER = 'number' as const

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------

type CommonProps<T> = T extends {
    format: infer InferFormat
    value: infer InferValue
    onChange: (arg: infer InferArg) => void
}
    ? {
          name?: string
          unit?: string
          onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
          onChangeNative?: (e: React.ChangeEvent<HTMLInputElement>) => void
          diff?: boolean
          placeholder?: string
          disabled?: boolean
          errored?: boolean
          errorMessage?: string
          onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void
          onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
          className?: string
          decimalPlace?: number | null
          format: InferFormat
          value: InferValue
          onChange: (arg: InferArg) => void
          type?: string
      }
    : never

type TextProps = CommonProps<{
    format: typeof TEXT
    value: StringValue | null
    onChange: (value: StringValue) => void
}>

type NumberProps = CommonProps<{
    format: typeof NUMBER
    value: NumberValue | StringValue | null
    onChange: (value: NumberValue) => void
    type?: typeof NUMBER
}>

type Props = TextProps | NumberProps

const removeNullValue = (value: null | number | string) => {
    switch (value) {
        case null:
            return ''
        default:
            return value
    }
}

export const Component = React.memo<Props>(props => {
    const primitiveValue = removeNullValue(props.value)
    const [value, setValue] = React.useState(primitiveValue)
    const changeValue = React.useCallback(
        (value: string | number) => {
            props.onChange(value as never)
            setValue(value)
        },
        [props.onChange]
    )

    React.useLayoutEffect(() => {
        /** なぜか初期表示でprops.valueがnullになって渡ってくる。*/
        if (props.value === null) return
        setValue(props.value)
    }, [props.value])

    switch (props.format) {
        case NUMBER:
            return (
                <NumberContainer.Container
                    {...props}
                    onChange={changeValue}
                    /* valueはsetStateで両方の型が入る可能性があって推論は両方の型になる */
                    value={value}
                    Presenter={Presenter.Presenter}
                    decimalPlace={props.decimalPlace}
                />
            )
        case TEXT:
            return (
                <TextContainer.Container
                    {...props}
                    type={props.type}
                    onChange={changeValue}
                    /* valueはsetStateで両方の型が入る可能性があって推論は両方の型になる */
                    value={value as string}
                    Presenter={Presenter.Presenter}
                />
            )
    }
})
