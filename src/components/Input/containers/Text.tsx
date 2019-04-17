import * as React from 'react'
import { ContainerType } from '~/types/utils'

import * as Input from '../index'

/**
 * Utils
 */

const useChangeStringValueFromChangeEvent = (
  onChange: ((value: Input.StringValue) => void) | undefined,
  onChangeNative: ((e: React.ChangeEvent<HTMLInputElement>) => void) | undefined
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
    [onChange]
  )

/**
 * Component
 */

type Props = {
  value?: Input.StringValue
  onChange?: (value: Input.StringValue) => void
  onChangeNative?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
type InjectProps = {
  value?: Input.StringValue
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const Text: ContainerType<Props, InjectProps> = ({ Presenter, value, onChange, onChangeNative, ...props }) => {
  const changeValue = useChangeStringValueFromChangeEvent(onChange, onChangeNative)

  // @ts-ignore
  return <Presenter value={value} onChange={changeValue} {...props} />
}

export default Text
