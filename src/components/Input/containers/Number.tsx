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
    value: Input.NumberValue
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
                    onChange(null)
                    return
                }

                const num = Number(tgtValue)
                if (isNaN(num)) {
                    return
                }

                onChange(num)
            }
        },
        [onChange, onChangeNative, value]
    )

const useStringValue = (value: Input.NumberValue) =>
    React.useMemo(() => {
        if (value === undefined || value === null) {
            return null
        }
        return value.toString()
    }, [value])

/**
 * Component
 */

type Props = {
    value?: number | null
    onChange?: (value: Input.NumberValue) => void
    onChangeNative?: (e: React.ChangeEvent<HTMLInputElement>) => void
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
    ...props
}) => {
    const valueStr = useStringValue(value)
    const changeValue = useChangeNumberValueFromChangeEvent(
        onChange,
        onChangeNative,
        value
    )

    // @ts-ignore Propsの型推論がうまくいかない
    return <Presenter value={valueStr} onChange={changeValue} {...props} />
}
