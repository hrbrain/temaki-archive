import * as React from 'react'
import styled from '~/modules/theme'

import * as Index from '../index'
import * as Styles from '../lib/styles'

/**
 * Component
 */

type Props = {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    nativeType: 'submit' | 'reset' | 'button'
    className: string | undefined
    dataTest: string | undefined
} & OuterProps
export const Component: React.FC<Props> = ({ children, ...props }) => {
    return (
        <Outer
            onClick={props.onClick}
            type={props.nativeType}
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

    /* color */
    ${props => {
        switch (props.colorType) {
            case 'primary':
                return Styles.createCSSFromColorType(
                    props.theme.colors.primary.default,
                    props.theme.colors.primary.N20,
                    props.theme.colors.primary.N40,
                    props.theme.colors.grayScale.S0
                )
            case 'primary ghost':
                return Styles.createCSSFromColorType(
                    'inherit',
                    props.theme.colors.primary.N80,
                    props.theme.colors.primary.N60,
                    props.theme.colors.primary.default,
                    props.theme.colors.primary.default
                )
            case 'secondary':
                return Styles.createCSSFromColorType(
                    props.theme.colors.grayScale.S5,
                    props.theme.colors.grayScale.S20,
                    props.theme.colors.grayScale.S40,
                    props.theme.colors.grayScale.S100,
                    props.theme.colors.grayScale.S10
                )
            case 'secondary ghost':
                return Styles.createCSSFromColorType(
                    'inherit',
                    props.theme.colors.grayScale.S20,
                    props.theme.colors.grayScale.S40,
                    props.theme.colors.grayScale.S100,
                    props.theme.colors.grayScale.S50
                )
            case 'destructive':
                return Styles.createCSSFromColorType(
                    props.theme.colors.utilities.red.default,
                    'rgb(179, 68, 58)',
                    'rgb(133, 51, 43)',
                    props.theme.colors.grayScale.S0
                )
            case 'destructive ghost':
                return Styles.createCSSFromColorType(
                    'inherit',
                    'rgb(250, 221, 218)',
                    'rgb(244, 187, 182)',
                    props.theme.colors.utilities.red.default,
                    props.theme.colors.utilities.red.default
                )
            case 'disabled':
                return Styles.createCSSFromColorType(
                    props.theme.colors.grayScale.S20,
                    props.theme.colors.grayScale.S20,
                    props.theme.colors.grayScale.S20,
                    props.theme.colors.grayScale.S0
                )
            default:
                return ''
        }
    }}
`
