import * as React from 'react'
import styled from '~/modules/theme'
import TextareaAutosize from 'react-textarea-autosize'

/**
 * Component
 */

type Props = {
    value?: string
    label?: string
    placeholder?: string
    minRows?: number
    maxRows?: number
    maxString?: number
    errored?: boolean
    errorMessage?: string
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    onFocus?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    onBlur?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const Component = React.memo<Props>(props => {
    return (
        <>
            <p>
                <label>{props.label}</label>
            </p>
            <p>
                <Textarea
                    placeholder={props.placeholder}
                    minRows={props.minRows}
                    maxRows={props.maxRows}
                    onChange={props.onChange}
                    onFocus={props.onFocus}
                    onBlur={props.onBlur}
                    value={props.value}
                    errored={props.errored}
                ></Textarea>
            </p>
            {props.errored && (
                <Error>
                    {props.maxString}
                    {props.errorMessage}
                </Error>
            )}
        </>
    )
})

Component.displayName = 'Textarea'

export { Component }

/**
 * Styles
 */

const Textarea = styled(TextareaAutosize)<{ errored?: boolean }>`
    border: 1px solid ${props => props.theme.colors.primary.default};
    border-radius: 6px;
    width: 280px;
    padding: 8px;
    margin-top: 4px;
    font-size: 14px;
    resize: none;
    outline: none;

    &:focus {
        border-color: ${props =>
            props.errored
                ? props.theme.colors.utilities.red
                : props.theme.colors.utilities.highlightGreen};
    }

    border-color: ${props => props.errored && props.theme.colors.utilities.red};
`

const Error = styled.p`
    color: ${props => props.theme.colors.utilities.red};
    font-size: 12px;
`
