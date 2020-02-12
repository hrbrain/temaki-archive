import * as React from 'react'
import styled, { css } from '~/modules/theme'
import * as FormErrorMessage from '~/components/lib/FormErrorMessage'

type Props = {
    type?: string
    value?: string
    diff?: boolean
    name?: string
    placeholder?: string
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    errored?: boolean
    errorMessage?: string
    onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}
export const Presenter: React.FC<Props> = ({ children: _, ...props }) => {
    return (
        <Wrapper>
            <Outer {...props} />
            <FormErrorMessage.Component
                errored={props.errored}
                message={props.errorMessage}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div``

type OuterProps = {
    value?: string
    diff?: boolean
    errored?: boolean
}

const Outer = styled.input<OuterProps>`
    height: 40px;
    padding: 0 12px;
    border-radius: 6px;
    border: solid 1px ${props => props.theme.colors.grayScale.S10};
    transition: 0.15s border-color;

    ${props =>
        props.errored &&
        css`
            border-color: ${props.theme.colors.utilities.red.default};
        `}

    ${props =>
        props.diff
            ? css`
                  background: ${props.theme.colors.utilities.paleYellow};
              `
            : ''}

    &:focus {
        outline: none;
        border-color: ${props =>
            props.theme.colors.utilities.highlightGreen.default};
    }

    &::placeholder {
        color: ${props => props.theme.colors.grayScale.S20};
    }
`
