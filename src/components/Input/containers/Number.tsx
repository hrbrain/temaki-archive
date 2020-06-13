import * as React from 'react'
import { ContainerType } from '~/types/utils'

import * as Input from '../index'

const firstDecimalPlace = 1
const secondDecimalPlace = 2

const keyCodeUp = 38
const keyCodeDown = 40

/**
 * Utils
 */

const useChangeNumberValueFromChangeEvent = (
    onChange: ((value: Input.NumberValue) => void) | undefined,
    onChangeNative:
        | ((e: React.ChangeEvent<HTMLInputElement>) => void)
        | undefined,
    value: Input.NumberValue,
    decimalPlace?: number | null
) =>
    React.useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            e.persist()
            if (onChangeNative) {
                onChangeNative(e)
            }
            if (onChange) {
                const tgtValue = e.target.value
                if (tgtValue === '') {
                    onChange(0)
                    return
                }

                const num = Number(tgtValue)
                if (isNaN(num)) {
                    return
                }

                if (decimalPlace !== null) {
                    onChange(Number(num.toFixed(decimalPlace)))
                    return
                }

                onChange(num)
            }
        },
        [onChange, onChangeNative, value, decimalPlace]
    )

/**
 * Component
 */

type Props = {
    value: number
    onChange?: (value: Input.NumberValue) => void
    onChangeNative?: (e: React.ChangeEvent<HTMLInputElement>) => void
    decimalPlace?: number | null
}
type InjectProps = {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    value?: Input.StringValue
}
export const Container: ContainerType<Props, InjectProps> = ({
    Presenter,
    value,
    onChange,
    onChangeNative,
    decimalPlace,
    ...props
}) => {
    const changeValue = useChangeNumberValueFromChangeEvent(
        onChange,
        onChangeNative,
        value,
        decimalPlace
    )

    const formattedStep = React.useCallback((dp: number) => {
        switch (dp) {
            case firstDecimalPlace:
                return 0.1 // 小数第1位
            case secondDecimalPlace:
                return 0.01 // 小数第2位
            case 0: // 整数
            default:
                return 1
        }
    }, [])

    const keyDown = React.useCallback(
        (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.keyCode === keyCodeUp || e.keyCode === keyCodeDown) {
                e.preventDefault()
            }
        },
        [changeValue]
    )

    return (
        // @ts-ignore 型推論がうまくいってない
        <Presenter
            value={value.toString()}
            onChange={changeValue}
            step={formattedStep(decimalPlace || 0)}
            {...props}
            onKeyDown={keyDown}
        />
    )
}
