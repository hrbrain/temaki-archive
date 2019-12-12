import * as React from 'react'
import * as ReactDOM from 'react-dom'

import * as Button from '~/components/Button'
import * as Body from './body'

type Props = {
    isOpen: boolean
    title: string
    buttons?: (Button.Props & { text: string })[]
    onClose: () => void
}

const root = document.getElementById('modal') as HTMLDivElement

export const Component: React.FC<Props> = props => {
    if (props.isOpen) {
        return ReactDOM.createPortal(
            <Body.Component
                title={props.title}
                buttons={props.buttons}
                onClose={props.onClose}
            >
                {props.children}
            </Body.Component>,
            root
        )
    }
    return null
}
