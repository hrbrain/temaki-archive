import * as React from 'react'
import styled from '~/modules/theme'

//------------------------------------------------------------------------------
// props
//------------------------------------------------------------------------------

type Props = {
    svg: string
    size?: {
        width?: string
        height?: string
    }
}

//------------------------------------------------------------------------------
// component
//------------------------------------------------------------------------------

export const Component = (props: Props) => (
    <Wrap size={props.size} dangerouslySetInnerHTML={{ __html: props.svg }} />
)

//------------------------------------------------------------------------------
// styles
//------------------------------------------------------------------------------

type WrapProps = {
    size: Props['size']
}
const Wrap = styled.div<WrapProps>`
    height: ${props => (props.size && props.size.height) || 'auto'};
    width: ${props => (props.size && props.size.width) || '100%'};
    & svg {
        height: ${props => (props.size && props.size.height) || 'auto'};
        width: ${props => (props.size && props.size.width) || '100%'};
    }
`
