import * as React from 'react'
import styled from '~/modules/theme'
import TextareaAutosize from 'react-textarea-autosize'

/**
 * Component
 */

type Props = {
    value?: string
    placeholder?: string
    minRows?: number
    maxRows?: number
    errored?: boolean
    onChange?: (value: string) => void
    onChangeNative?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    onFocus?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    onBlur?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    diff?: boolean
}

const Component = React.memo<Props>(props => {
    const [value, setValue] = React.useState(props.value)
    const changeValue = React.useCallback(
        (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            e.persist()
            props.onChangeNative && props.onChangeNative(e)
            props.onChange && props.onChange(e.target.value)
            setValue(e.target.value)
        },
        [props.onChange, props.onChangeNative]
    )

    React.useLayoutEffect(() => {
        setValue(props.value)
    }, [props.value])

    return (
        <Textarea
            value={value}
            placeholder={props.placeholder}
            minRows={props.minRows}
            maxRows={props.maxRows}
            errored={props.errored}
            onChange={changeValue}
            onFocus={props.onFocus}
            onBlur={props.onBlur}
            diff={props.diff}
        />
    )
})

Component.displayName = 'Textarea'

export { Component }

/**
 * Styles
 */

const Textarea = styled(TextareaAutosize)<{
    errored?: boolean
    diff?: boolean
}>`
    border: 1px solid ${props => props.theme.colors.grayScale.S10};
    border-radius: 6px;
    width: 280px;
    padding: 8px;
    margin-top: 4px;
    font-size: 14px;
    resize: none;
    outline: none;
    color: ${props => props.theme.colors.grayScale.S100};
    &::placeholder {
        color: ${props => props.theme.colors.grayScale.S20};
    }

    &:focus {
        border-color: ${props =>
            props.errored
                ? props.theme.colors.utilities.red.default
                : props.theme.colors.utilities.highlightGreen.default};
    }

    border-color: ${props =>
        props.errored && props.theme.colors.utilities.red.default};

    background-color: ${props =>
        props.diff ? props.theme.colors.utilities.paleYellow : `inherit`};
`
