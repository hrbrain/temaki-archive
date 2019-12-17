import * as React from 'react'
import * as Buttonless from './presentors/Buttonless'
import * as Default from './presentors/Default'

/**
 * Component
 */
const DEFAULT = 'default' as const
const BUTTONLESS = 'buttonless' as const

type Props = {
    label: string
    text?: string
    variant: 'info' | 'warning'
} & (
    | {
          type: typeof DEFAULT
          onClickClose: () => void
      }
    | {
          type: typeof BUTTONLESS
      })

export const Component = React.memo<Props>((props: Props) => {
    switch (props.type) {
        case BUTTONLESS:
            return (
                <Buttonless.Component
                    label={props.label}
                    text={props.text}
                    variant={props.variant}
                />
            )
        case DEFAULT:
            return (
                <Default.Component
                    label={props.label}
                    text={props.text}
                    variant={props.variant}
                    onClickClose={props.onClickClose}
                />
            )
    }
})
