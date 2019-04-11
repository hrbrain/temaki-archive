import * as React from 'react'
import styled from '~/modules/theme'

import colors from '~/lib/colors'
import { ColorTypeProp } from '../index'
import { buttonBaseMixin, createCSSFromColorType, rippleEffectMixin } from '../lib/styles'

/**
 * Component
 */

type Props = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  iconSrc?: string
  isLoading?: boolean
} & OuterProps
const Presentor: React.FC<Props> = ({ iconSrc, isLoading, ...props }) => (
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
  ${(props: OuterProps) =>
    props.colorType === 'primary'
      ? createCSSFromColorType(colors.primary.default, colors.primary.N20, colors.primary.N40, colors.white)
      : ''}
`

const Icon = styled.img`
  display: block;
  width: 24px;
  height: 24px;
`

export default Presentor
