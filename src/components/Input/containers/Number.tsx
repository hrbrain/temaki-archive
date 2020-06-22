import * as React from 'react'
import { ContainerType } from '~/types/utils'

import * as Input from '../index'

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
                    onChange('' as any)
                    return
                }

                if (tgtValue === '-') {
                    onChange(tgtValue as any)
                    return
                }

                const num = Number(tgtValue)
                if (isNaN(num)) {
                    return
                }

                if (decimalPlace && decimalPlace > 0) {
                    if (tgtValue.endsWith('.')) {
                        onChange(tgtValue.replace(/[^0-9.\-]/g, '') as any)
                        return
                    }
                    const num = Number(tgtValue)
                    if (isNaN(num)) {
                        return
                    }

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

    return (
        // @ts-ignore 型推論がうまくいってない
        <Presenter value={value} onChange={changeValue} {...props} />
    )
}
