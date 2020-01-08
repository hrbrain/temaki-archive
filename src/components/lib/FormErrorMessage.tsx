import * as React from 'react'
import styled from '~/modules/theme'

type Props = {
    errored?: boolean
    message?: string
}
export const Component = (props: Props): React.ReactElement => {
    if (!props.errored || !props.message) return <></>

    return <Outer data-test="error-message">{props.message}</Outer>
}
Component.displayName = 'FormErrorMessage'

const Outer = styled.div`
    margin-top: 4px;
    color: ${props => props.theme.colors.utilities.red.default};
    font-size: ${props => props.theme.typography.pc.body.default};
`
