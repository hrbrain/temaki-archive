import * as React from 'react'
import * as Buttonless from './presentors/Buttonless'
import * as Default from './presentors/Default'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
const DEFAULT = 'default' as const
const BUTTONLESS = 'buttonless' as const

type Variant = 'warning' | 'info' | 'progress'

type Props = {
    label: string
    text?: string
    color?: string
    icon?: string
    variant: Variant
} & (
    | {
          type: typeof DEFAULT
          onClickClose: () => void
      }
    | {
          type: typeof BUTTONLESS
      }
)

export const Component = React.memo<Props>((props: Props) => {
    switch (props.type) {
        case BUTTONLESS:
            return (
                <Buttonless.Component
                    label={props.label}
                    text={props.text}
                    color={props.color}
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
