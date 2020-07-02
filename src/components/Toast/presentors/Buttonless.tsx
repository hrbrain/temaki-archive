import * as React from 'react'
import styled from '~/modules/theme'

import * as IconFiles from '~/lib/iconFiles'
import * as Icon from '~/components/Icon'
import * as modules from '~/modules/theme'
/*
 * Component
 */
type Props = {
    label: string
    variant: 'info' | 'warning' | 'progress'
    color?: string
    text?: string
    icon?: IconFileKeys
}

type IconFileKeys = keyof typeof IconFiles.icons

export const Component = React.memo<Props>(
    ({
        label,
        variant,
        text,
        color = modules.defaultTheme.colors.grayScale.S0,
        icon = IconFiles.icons.SingleCheck
    }) => {
        return (
            <Outer variant={variant} data-test={`${variant}-buttonless-toast`}>
                {variant === 'progress' ? (
                    <Icons
                        svg={IconFiles.icons.Loading}
                        size="24px"
                        color={'white'}
                    />
                ) : (
                    <Icons svg={icon} size="24px" color={'white'} />
                )}
                {text ? (
                    <>
                        <Label color={color}>{label}</Label>
                        <Text color={color}>{text}</Text>
                    </>
                ) : (
                    <Label color={color}>{label}</Label>
                )}
            </Outer>
        )
    }
)

/**
 * Styles
 */

type OuterType = {
    variant: 'info' | 'warning' | 'progress'
    highlightGreen: string
    gray: string
    red: string
}
const Outer = styled.div<{ variant: 'info' | 'warning' | 'progress' }>`
    display: inline-flex;
    align-items: start;
    padding: 12px;
    border-radius: 6px;
    box-shadow: ${props => props.theme.shadows.boxShadow.L5};
    ${props =>
        getVariantColor({
            variant: props.variant,
            highlightGreen: props.theme.colors.utilities.highlightGreen.default,
            red: props.theme.colors.utilities.red.default,
            gray: props.theme.colors.grayScale.S5
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
    } else if (props.variant === 'progress') {
        return `background-color: ${props.gray}
        `
    }
    return ''
}

const Icons = styled(Icon.Component)`
    top: 0;
`
const Label = styled.div<{ color: string }>`
    max-width: 290px;
    word-break: break-all;
    line-height: 24px;
    font-size: 14px;
    padding-left: 4px;
    font-weight: bold;
    color: ${props => props.color};
`
const Text = styled.div<{ color: string }>`
    max-width: 290px;
    word-break: break-all;
    white-space: pre-wrap;
    font-size: 14px;
    padding: 4px 0 0 4px;
    color: ${props => props.color};
`
