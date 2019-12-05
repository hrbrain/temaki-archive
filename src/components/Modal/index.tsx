import * as React from 'react'
import * as ReactDOM from 'react-dom'

import * as Button from '~/components/Button'
import * as Body from './body'

type Props = {
    title: string
    buttons?: (Button.Props & { text: string })[]
    onClose: () => void
}

const portalId = document.getElementById('modal') as HTMLDivElement

export const Component: React.FC<Props> = props => {
    return ReactDOM.createPortal(
        <Body.Component
            title={props.title}
            buttons={props.buttons}
            onClose={props.onClose}
        />,
        portalId
    )
}
