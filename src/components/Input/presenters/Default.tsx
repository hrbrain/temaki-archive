import * as React from 'react'
import styled, { css } from '~/modules/theme'
import * as FormErrorMessage from '~/components/lib/FormErrorMessage'

type Props = {
    type?: string
    value?: string
    diff?: boolean
    name?: string
    unit?: string
    placeholder?: string
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    errored?: boolean
    errorMessage?: string
    onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
    className?: string
    decimalPlace?: number | null
}

export const Presenter: React.FC<Props> = ({ children: _, ...props }) => {
    return (
        <Wrapper className={props.className}>
            <Outer {...props} />
            {props.unit && <Unit>{props.unit}</Unit>}
            <FormErrorMessage.Component
                errored={props.errored}
                message={props.errorMessage}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: relative;
    display: inline-flex;
    flex-direction: column;

    input[type='number']::-webkit-outer-spin-button,
    input[type='number']::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type='number'] {
        -moz-appearance: textfield;
    }
`

type OuterProps = {
    value?: string
    diff?: boolean
    errored?: boolean
    unit?: string
}
const Outer = styled.input<OuterProps>`
    height: 40px;
    padding: 0 12px;
    border-radius: 6px;
    border: solid 1px ${props => props.theme.colors.grayScale.S10};
    color: ${props => props.theme.colors.main.grayScale[600]};
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
    
    ${props =>
        props.unit
            ? css`
                  /* フォント数 * フォントサイズ + Unitの左右Padding + これのPadding */
                  padding-right: ${Number(props.unit.length) * 14 +
                      12 * 2 +
                      12}px;
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

const Unit = styled.div`
    position: absolute;
    top: 1px;
    right: 1px;

    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100% - 2px);
    padding: 0 12px;

    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    background-color: ${props => props.theme.colors.grayScale.S10};
`
