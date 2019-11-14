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
                    onChange(0)
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

/**
 * Component
 */

type Props = {
    value: number
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
    const changeValue = useChangeNumberValueFromChangeEvent(
        onChange,
        onChangeNative,
        value
    )

    return (
        // @ts-ignore 型推論がうまくいってない
        <Presenter value={value.toString()} onChange={changeValue} {...props} />
    )
}
