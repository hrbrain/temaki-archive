import * as React from 'react'

import * as NumberContainer from './containers/Number'
import * as TextContainer from './containers/Text'
import * as Presenter from './presenters/Default'

/**
 * Utils
 */
export type NumberValue = number
export type StringValue = string

const TEXT = 'text' as const
const NUMBER = 'number' as const

/**
 * Component
 */

type Props = {
    type?: string
    name?: string
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
    onChangeNative?: (e: React.ChangeEvent<HTMLInputElement>) => void
    diff?: boolean
    placeholder?: string
    errored?: boolean
    errorMessage?: string
} & (
    | {
          format: typeof TEXT
          value: StringValue
          onChange: (value: StringValue) => void
      }
    | {
          format: typeof NUMBER
          value: NumberValue
          onChange: (value: NumberValue) => void
      })
export const Component = React.memo<Props>(({ children: _, ...props }) => {
    switch (props.format) {
        case NUMBER:
            return (
                <NumberContainer.Container
                    Presenter={Presenter.Presenter}
                    {...props}
                />
            )
        case TEXT:
            return (
                <TextContainer.Container
                    Presenter={Presenter.Presenter}
                    {...props}
                />
            )
    }
})
