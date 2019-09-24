import * as React from 'react'
import styled from '~/modules/theme'

import * as Styles from '../lib/styles'

import * as Icon from '~/components/Icon'

/**
 * Component
 */

type Props = {
    svg?: string
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}
export const Component: React.FC<Props> = ({ svg, children, ...props }) => (
    <Outer {...props}>
        {renderIcon(svg)}
        <Text data-test="text-button-child">{children}</Text>
    </Outer>
)

function renderIcon(svg?: string): React.ReactElement | null {
    if (!svg) {
        return null
    }
    return <Icon.Component svg={svg} size="24px" />
}

/**
 * Styles
 */

const Outer = styled.button`
    ${Styles.buttonBaseMixin}
    ${Styles.rippleEffectMixin}
  height: 24px;
    width: auto;
`

const Text = styled.span`
    color: ${props => props.theme.colors.text};
    font-size: 14px;
    font-weight: normal;
    white-space: nowrap;
`
