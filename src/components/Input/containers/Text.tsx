import * as React from 'react'
import { ContainerType } from '~/types/utils'

import * as Input from '../index'

/**
 * Utils
 */

const useChangeStringValueFromChangeEvent = (
    onChange: ((value: Input.StringValue) => void) | undefined,
    onChangeNative:
        | ((e: React.ChangeEvent<HTMLInputElement>) => void)
        | undefined
) =>
    React.useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            e.persist()

            if (onChangeNative) {
                onChangeNative(e)
            }
            if (onChange) {
                onChange(e.target.value)
            }
        },
        [onChange, onChangeNative]
    )

/**
 * Component
 */

type Props = {
    value?: Input.StringValue
    name?: string
    onChange?: (value: Input.StringValue) => void
    onChangeNative?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
type InjectProps = {
    value?: Input.StringValue
    prevValue?: Input.StringValue
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export const Container: ContainerType<Props, InjectProps> = ({
    Presenter,
    value,
    onChange,
    onChangeNative,
    ...props
}) => {
    const changeValue = useChangeStringValueFromChangeEvent(
        onChange,
        onChangeNative
    )

    // @ts-ignore Propsの型推論がうまくいかない
    return <Presenter value={value} onChange={changeValue} {...props} />
}
