import * as React from 'react'
import styled from '~/modules/theme'

import { ColorTypeProp } from '../index'
import {
    buttonBaseMixin,
    createCSSFromColorType,
    rippleEffectMixin
} from '../lib/styles'

/**
 * Component
 */

type Props = {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    iconSrc?: string
    isLoading?: boolean
} & OuterProps
export const Component: React.FC<Props> = ({ iconSrc, ...props }) => (
    <Outer {...props}>
        <Icon src={iconSrc} />
    </Outer>
)

/**
 * Styles
 */

type OuterProps = {
    colorType: ColorTypeProp
}
const Outer = styled.button<OuterProps>`
    ${rippleEffectMixin}
    ${buttonBaseMixin}
  width: 48px;
    height: 48px;
    border-radius: 50%;
    box-shadow: 0 5px 11px rgba(0, 0, 0, 0.16);

    /* colors */
    ${props =>
        props.colorType === 'primary'
            ? createCSSFromColorType(
                  props.theme.colors.primary.default,
                  props.theme.colors.primary.N20,
                  props.theme.colors.primary.N40,
                  '#FFF'
              )
            : ''}
`

const Icon = styled.img`
    display: block;
    width: 24px;
    height: 24px;
`
