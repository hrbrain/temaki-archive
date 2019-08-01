import * as React from 'react'
import styled from '~/modules/theme'

// import * as IconFiles from '~/lib/iconFiles'
// import * as Icon from '~/components/Icon'

/**
 * Component
 */

type Props = {
    text?: string
    direction?: 'top' | 'right' | 'bottom' | 'left'
}
export const Component = React.memo<Props>(({ text, direction, ...props }) => {
    if (direction === 'top') {
        return null
    }

    return (
        <Outer {...props}>
            <Text>{text}</Text>
        </Outer>
    )
})

/**
 * Styles
 */

const Outer = styled.div`
    margin-top: 30px;
    margin-left: 30px;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    background: pink;
    border-radius: 10px;
    box-shadow: 0px 5px 5px 5px rgba(0, 0, 0, 0.1);
    position: relative;

    // ===== 矢印 =====

    // 下
    &::before {
        content: '';
        position: absolute;
        right: 0;
        bottom: -6px;
        left: 0;
        width: 0px;
        height: 0px;
        margin: auto;

        border-style: solid;
        border-color: pink transparent transparent transparent;
        border-width: 6px 6px 0 6px;
    }
    // 上
    &::before {
        content: '';
        position: absolute;
        right: 0;
        top: -6px;
        left: 0;
        width: 0px;
        height: 0px;
        margin: auto;

        border-right: 6px solid transparent;
        border-bottom: 6px solid pink;
        border-left: 6px solid transparent;
    }
    // 右
    &::before {
        content: '';
        position: absolute;
        display: block;
        width: 0;
        height: 0;
        bottom: 20px;
        top: 20px;
        margin-right: -12px;

        border-left: 6px solid pink;
        border-top: 6px solid transparent;
        border-bottom: 6px solid transparent;
    }
    // 左
    &::before {
        content: '';
        position: absolute;
        display: block;
        width: 0;
        height: 0;
        left: 0;
        bottom: 20px;
        top: 20px;
        margin-left: -12px;

        border-right: 6px solid pink;
        border-top: 6px solid transparent;
        border-bottom: 6px solid transparent;
    }
`

const Text = styled.span`
    height: 100%;
    font-size: 14px;
    padding: 12px 50px 12px 12px;
    color: ${props => props.theme.colors.text};
`
