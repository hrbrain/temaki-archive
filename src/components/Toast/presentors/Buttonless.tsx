import * as React from 'react'
import styled from '~/modules/theme'

import * as IconFiles from '~/lib/iconFiles'
import * as Icon from '~/components/Icon'

/*
 * Component
 */
type Props = {
    label: string
    text?: string
    variant: 'info' | 'warning'
}

export const Component = React.memo<Props>(props => {
    return (
        <Outer
            variant={props.variant}
            data-test={`${props.variant}-buttonless-toast`}
        >
            <Icons
                svg={IconFiles.icons.SingleCheck}
                size="24px"
                color={'white'}
            />
            {props.text ? (
                <div>
                    <Label>{props.label}</Label>
                    <Text>{props.text}</Text>
                </div>
            ) : (
                <Label>{props.label}</Label>
            )}
        </Outer>
    )
})

/**
 * Styles
 */

type OuterType = {
    variant: 'info' | 'warning'
    highlightGreen: string
    red: string
}
const Outer = styled.div<{ variant: 'info' | 'warning' }>`
    display: inline-flex;
    align-items: start;
    padding: 12px;
    border-radius: 6px;
    box-shadow: ${props => props.theme.shadows.boxShadow.L5};
    ${props =>
        getVariantColor({
            variant: props.variant,
            highlightGreen: props.theme.colors.utilities.highlightGreen.default,
            red: props.theme.colors.utilities.red.default
        })}
`
const getVariantColor = (props: OuterType) => {
    if (props.variant === 'info') {
        return `
      background-color: ${props.highlightGreen};
    `
    } else if (props.variant === 'warning') {
        return `
        background-color: ${props.red};
    `
    }
    return ''
}

const Icons = styled(Icon.Component)`
    top: 0;
`

const Label = styled.div`
    max-width: 290px;
    word-break: break-all;
    line-height: 24px;
    font-size: 14px;
    padding-left: 4px;
    font-weight: bold;
    color: ${props => props.theme.colors.grayScale.S0};
`
const Text = styled.div`
    max-width: 290px;
    word-break: break-all;
    white-space: pre-wrap;
    font-size: 14px;
    padding: 4px 0 0 4px;
    color: ${props => props.theme.colors.grayScale.S0};
`
