import * as React from 'react'
import styled, { ThemeConsumer, RequiredThemeProps } from '~/modules/theme'

import * as Index from '../index'
import * as Styles from '../lib/styles'

import * as Icon from '~/components/Icon'

/**
 * Component
 */

type Props = {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    svg: string | undefined
    colorType: string | undefined
    isLoading: boolean | undefined
    type: 'submit' | 'reset' | 'button'
    className: string | undefined
    dataTest: string | undefined
} & OuterProps
export const Component = ({ svg, ...props }: Props) => (
    <Outer
        type={props.type}
        onClick={props.onClick}
        colorType={props.colorType}
        className={props.className}
        data-test={props.dataTest}
    >
        <ThemeConsumer>{renderIcon(svg, props.colorType)}</ThemeConsumer>
    </Outer>
)

const renderIcon = (svg?: string, colorType?: string) => (
    theme: RequiredThemeProps
): React.ReactElement | null => {
    if (!svg) {
        return null
    }

    if (!colorType) {
        return null
    }

    let color = ''

    switch (colorType) {
        case 'primary':
            color = theme.colors.grayScale.S0
            break
        case 'secondary':
            color = theme.colors.grayScale.S100
            break
    }
    return <Icon.Component svg={svg} size="24px" color={color} />
}

/**
 * Styles
 */

type OuterProps = {
    colorType: Index.CircleColorTypeProp
}
const Outer = styled.button<OuterProps>`
    ${Styles.rippleEffectMixin}
    ${Styles.buttonBaseMixin}
  width: 48px;
    height: 48px;
    border-radius: 50%;
    box-shadow: 0 5px 11px rgba(0, 0, 0, 0.16);

    /* colors */
    ${props => {
        switch (props.colorType) {
            case 'primary':
                return Styles.createCSSFromColorType(
                    props.theme.colors.primary.default,
                    props.theme.colors.primary.N20,
                    props.theme.colors.primary.N40,
                    props.theme.colors.grayScale.S0
                )
            case 'secondary':
                return Styles.createCSSFromColorType(
                    props.theme.colors.grayScale.S5,
                    props.theme.colors.grayScale.S20,
                    props.theme.colors.grayScale.S40,
                    props.theme.colors.grayScale.S100,
                    props.theme.colors.grayScale.S50
                )
            default:
                return ''
        }
    }}
`
