import * as React from 'react'
import * as Buttonless from './presentors/Buttonless'
import * as Default from './presentors/Default'

/**
 * Component
 */

type Props = {
    label: string
    text?: string
    variant: 'info' | 'warning'
    onClickClose: () => void
    type: 'default' | 'buttonless'
}

export const Component = React.memo<Props>((props: Props) => {
    switch (props.type) {
        case 'buttonless':
            return (
                <Buttonless.Component
                    label={props.label}
                    text={props.text}
                    variant={props.variant}
                    onClickClose={props.onClickClose}
                />
            )
        case 'default':
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
