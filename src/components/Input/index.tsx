import * as React from 'react'

import NumberContainer from './containers/Number'
import TextContainer from './containers/Text'
import Default from './presenters/Default'

/**
 * Utils
 */
export type NumberValue = number | undefined | null
export type StringValue = string | undefined | null

// TypeScript v3.4 が使い物になったら変えて下さい
const TEXT = 'text' as 'text'
const NUMBER = 'number' as 'number'

/**
 * Component
 */

type Props = {
  type?: string
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangeNative?: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  errored?: boolean
} & (
  | {
      format: typeof TEXT
      value?: string
      onChange?: (value: StringValue) => void
    }
  | {
      format: typeof NUMBER
      value?: number
      onChange?: (value: NumberValue) => void
    })
const Input = React.memo<Props>(({ children, ...props }) => {
  switch (props.format) {
    case NUMBER:
      return <NumberContainer Presenter={Default} {...props} />
    case TEXT:
      return <TextContainer Presenter={Default} {...props} />
  }
})

export default Input
