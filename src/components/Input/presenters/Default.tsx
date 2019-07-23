import * as React from 'react'
import styled, { css } from '~/modules/theme'

type Props = {
    type?: string
    value?: string
    onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
} & OuterProps
const Default: React.FC<Props> = ({ children, ...props }) => {
    return <Outer {...props} />
}

type OuterProps = {
    errored?: boolean
}
const Outer = styled.input<OuterProps>`
    padding: 10px 12px;
    border-radius: 6px;
    border: solid 1px ${props => props.theme.colors.grayScale.S10};
    transition: 0.15s border-color;

    ${props =>
        props.errored &&
        css`
            border-color: ${props.theme.colors.utilities.red};
        `}

    &:focus {
        outline: none;
    }
`

export default Default
