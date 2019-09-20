import * as React from 'react'
import styled from '~/modules/theme'

/**
 * Component
 */

type Props = {
    count: number
}

export const Component = ({ count }: Props) => {
    if (count === 0) return null
    // 数値が3桁以上のの場合は99と表示させる
    const displayValue = count > 99 ? 99 : count
    return <Outer>{displayValue}</Outer>
}

const Outer = styled.div`
    width: 20px;
    height: 20px;
    line-height: 20px;
    border-radius: 50%;

    color: ${props => props.theme.colors.grayScale.S0};
    background: ${props => props.theme.colors.utilities.red};
    font-size: 12px;
    font-weight: bold;
    text-align: center;
`
