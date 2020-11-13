import * as React from 'react'
import styled from '~/modules/theme'

import * as Index from '../index'
import * as Styles from '../lib/styles'

/**
 * Component
 */

type Props = {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    type: 'submit' | 'reset' | 'button'
    className: string | undefined
    dataTest: string | undefined
} & OuterProps
export const Component: React.FC<Props> = ({ children, ...props }) => {
    return (
        <Outer
            onClick={props.onClick}
            type={props.type}
            height={props.height}
            width={props.width}
            colorType={props.colorType}
            disabled={props.colorType === 'disabled'}
            className={props.className}
            data-test={props.dataTest}
        >
            {children}
        </Outer>
    )
}

/**
 * Styles
 */

type OuterProps = {
    height?: string
    width?: string
    colorType: Index.BoxColorTypeProp
}
const Outer = styled.button<OuterProps>`
    ${Styles.rippleEffectMixin};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    border-style: none;
    padding: 0 ${(props: OuterProps) => (props.width ? '0' : '16px')};
    cursor: pointer;
    height: ${(props: OuterProps) => props.height || '40px'};
    width: ${(props: OuterProps) => props.width || 'auto'};
    box-shadow: none;
    outline: none;
    font-size: 14px;

    /* size */
    &.small {
        height: ${(props: OuterProps) => props.height || '32px'};
    }

    ${props => {
        switch (props.colorType) {
            case 'primary':
                return Styles.createCSSFromColorType({
                    base: props.theme.colors.primary.default,
                    hovered: props.theme.colors.main.primary[700],
                    activated: props.theme.colors.main.primary[900],
                    text: props.theme.colors.grayScale.S0
                })
            case 'primary ghost':
                return Styles.createCSSFromColorType({
                    base: 'inherit',
                    hovered: props.theme.colors.primary.N80,
                    activated: props.theme.colors.primary.N60,
                    text: props.theme.colors.primary.default,
                    border: props.theme.colors.primary.default
                })
            case 'secondary':
                return Styles.createCSSFromColorTypeSecondary({
                    base: props.theme.colors.grayScale.S5,
                    hovered: props.theme.colors.grayScale.S20,
                    activated: props.theme.colors.grayScale.S40,
                    text: props.theme.colors.grayScale.S100,
                    border: props.theme.colors.grayScale.S10
                })
            case 'secondary ghost':
                return Styles.createCSSFromColorType({
                    base: 'inherit',
                    hovered: props.theme.colors.grayScale.S20,
                    activated: props.theme.colors.grayScale.S40,
                    text: props.theme.colors.grayScale.S100,
                    border: props.theme.colors.grayScale.S50
                })
            case 'destructive':
                return Styles.createCSSFromColorType({
                    base: props.theme.colors.utilities.red.default,
                    hovered: 'rgb(179, 68, 58)',
                    activated: 'rgb(133, 51, 43)',
                    text: props.theme.colors.grayScale.S0
                })
            case 'destructive ghost':
                return Styles.createCSSFromColorType({
                    base: 'inherit',
                    hovered: 'rgb(250, 221, 218)',
                    activated: 'rgb(244, 187, 182)',
                    text: props.theme.colors.utilities.red.default,
                    border: props.theme.colors.utilities.red.default
                })
            case 'disabled':
                return Styles.createCSSFromColorType({
                    base: props.theme.colors.grayScale.S20,
                    hovered: props.theme.colors.grayScale.S20,
                    activated: props.theme.colors.grayScale.S20,
                    text: props.theme.colors.grayScale.S0
                })
            default:
                return ''
        }
    }}
`
