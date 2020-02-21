import * as React from 'react'
import styled, { ThemeConsumer, RequiredThemeProps } from '~/modules/theme'

import * as Index from '../index'
import * as Styles from '../lib/styles'

import * as Icon from '~/components/Icon'

/**
 * Component
 */

type Props = {
    svg: string | undefined
    colorType: Index.TextColorTypeProp | undefined
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    nativeType: 'submit' | 'reset' | 'button'
    className: string | undefined
    dataTest: string | undefined
}
export const Component: React.FC<Props> = ({
    svg,
    colorType,
    children,
    ...props
}) => (
    <Outer
        type={props.nativeType}
        onClick={props.onClick}
        className={props.className}
        data-test={props.dataTest}
    >
        {renderIcon(svg, colorType)}
        {renderText(svg, colorType, children)}
    </Outer>
)

function renderIcon(
    svg?: string,
    colorType?: string
): React.ReactElement | null {
    if (!svg) {
        return null
    }
    return (
        <ThemeConsumer>
            {theme => (
                <Icon.Component
                    svg={svg}
                    size="24px"
                    color={selectIconColor(theme, colorType)}
                />
            )}
        </ThemeConsumer>
    )
}

function renderText(
    svg?: string,
    colorType?: string,
    children?: React.ReactNode
): React.ReactElement | null {
    if (!children) {
        return null
    }
    return (
        <Text colorType={colorType} svg={svg} data-test="text-button-child">
            {children}
        </Text>
    )
}

function selectIconColor(theme: RequiredThemeProps, colorType?: string) {
    switch (colorType) {
        case 'primary':
            return theme.colors.primary.default
        case 'destructive':
            return theme.colors.utilities.red.default
        default:
            return theme.colors.text.default
    }
}

/**
 * Styles
 */

const Outer = styled.button`
    background: transparent;
    ${Styles.buttonBaseMixin}
    ${Styles.rippleEffectMixin}
    height: 24px;
    width: auto;
`

type TextType = {
    colorType?: string
    svg?: string
}

const Text = styled.span<TextType>`
    color: ${props => {
        switch (props.colorType) {
            case 'primary':
                return props.theme.colors.primary.default
            case 'destructive':
                return props.theme.colors.utilities.red.default
            default:
                return props.theme.colors.text
        }
    }};
    padding-left: ${props => (props.svg ? '4px' : '0')};
    font-size: 14px;
    font-weight: normal;
    white-space: nowrap;
`
