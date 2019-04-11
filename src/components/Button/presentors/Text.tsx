import * as React from 'react'
import styled from '~/modules/theme'

import colors from '~/lib/colors'
import { buttonBaseMixin, rippleEffectMixin } from '../lib/styles'

/**
 * Component
 */

type Props = {
  iconSrc?: string
}
const Presentor: React.FC<Props> = ({ iconSrc, children, ...props }) => (
  <Outer {...props}>
    <Icon src={iconSrc} />
    <Text>{children}</Text>
  </Outer>
)

/**
 * Styles
 */

const Outer = styled.button`
  ${buttonBaseMixin}
  ${rippleEffectMixin}
  height: 24px;
  width: auto;
`

const Icon = styled.img`
  width: 24px;
  height: 24px;
`

const Text = styled.span`
  color: ${colors.text};
  font-size: 14px;
  font-weight: normal;
`

export default Presentor
