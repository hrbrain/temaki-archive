import * as React from 'react'
import styled from '~/modules/theme'

type DisplayTypeProps = 'Horizontal' | 'Vertical'

type Props = {
    scale: number
    displayType: DisplayTypeProps
    children: React.ReactNode
}

export const Component = React.memo<Props>(props => {
    return (
        <Scale scale={props.scale} displayType={props.displayType}>
            {props.children}
        </Scale>
    )
})

const Scale = styled.div<Props>`
    transform: scale(${({ scale }) => scale});
    ${props =>
        props.displayType === 'Horizontal' ? 'transform-origin: top left;' : ''}
    ${props =>
        props.displayType === 'Vertical' ? 'transform-origin: top center;' : ''}
`
