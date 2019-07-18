import * as React from 'react'
import styled from '~/modules/theme'

import { ColorTypeProp } from '../index'
import { createCSSFromColorType, rippleEffectMixin } from '../lib/styles'

/**
 * Component
 */

type Props = {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
} & OuterProps
const Presentor: React.FC<Props> = ({ children, ...props }) => {
    return <Outer {...props}>{children}</Outer>
}

/**
 * Styles
 */

type OuterProps = {
    height?: string
    width?: string
    colorType: ColorTypeProp
}
const Outer = styled.button<OuterProps>`
    ${rippleEffectMixin};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    border-style: none;
    padding: 0 ${(props: OuterProps) => (props.width ? '0' : '16px')};
    cursor: pointer;
    height: ${(props: OuterProps) => props.height || '44px'};
    width: ${(props: OuterProps) => props.width || 'auto'};
    box-shadow: none;
    outline: none;
    font-size: 14px;

    /* size */
    &.small {
        height: ${(props: OuterProps) => props.height || '32px'};
    }

    /* color */
    ${props =>
        props.colorType === 'primary'
            ? createCSSFromColorType(
                  props.theme.colors.primary.default,
                  props.theme.colors.primary.P20,
                  props.theme.colors.primary.P40,
                  '#FFF'
              )
            : ''}
`

export default Presentor
