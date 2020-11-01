import * as React from 'react'
import styled from '~/modules/theme'

/**
 * Component
 */

type Props = {
    text: string
    direction?: 'top' | 'right' | 'bottom' | 'left'
}
const Component = React.memo<Props>(({ text, direction, ...props }) => {
    return (
        <Outer data-test="tool-tip" {...props} direction={direction}>
            <Text>{text}</Text>
        </Outer>
    )
})

Component.displayName = 'Tooltip'

export { Component }

/**
 * Styles
 */

const Outer: any = styled.div`
    display: inline-flex;
    align-items: center;
    background: ${props => props.theme.colorsOld.grayScale.S5};
    border-radius: 6px;
    filter: drop-shadow(${props => props.theme.shadows.dropShadow.L5});
    position: relative;
    ${(props: any) => props.direction}: 6px;

    ${(props: any) =>
        props.direction === 'top' &&
        `
            &::before {
                content: '';
                position: absolute;
                right: 0;
                top: -6px;
                left: 0;
                width: 0;
                height: 0;
                margin: auto;

                border-right: 6px solid transparent;
                border-bottom: 6px solid ${props.theme.colorsOld.grayScale.S5};
                border-left: 6px solid transparent;
            }
        `};

    ${(props: any) =>
        props.direction === 'right' &&
        `
            &::before {
                content: '';
                position: absolute;
                right: 0;
                width: 0;
                height: 0;
                margin-right: -6px;
        
                border-left: 6px solid ${props.theme.colorsOld.grayScale.S5};
                border-top: 6px solid transparent;
                border-bottom: 6px solid transparent;
            }
        `};

    ${(props: any) =>
        props.direction === 'bottom' &&
        `
            &::before {
                content: '';
                position: absolute;
                right: 0;
                bottom: -6px;
                left: 0;
                width: 0;
                height: 0;
                margin: auto;
        
                border-top: 6px solid ${props.theme.colorsOld.grayScale.S5};
                border-right: 6px solid transparent;
                border-left: 6px solid transparent;
            }
        `};

    ${(props: any) =>
        props.direction === 'left' &&
        `
            &::before {
                content: '';
                position: absolute;
                width: 0;
                height: 0;
                margin-left: -6px;
        
                border-right: 6px solid ${props.theme.colorsOld.grayScale.S5};
                border-top: 6px solid transparent;
                border-bottom: 6px solid transparent;
            }
        `};
`

const Text = styled.span`
    height: 100%;
    font-size: 14px;
    padding: 8px 12px;
    color: ${props => props.theme.colorsOld.text.default};
    max-width: 280px;
    word-break: break-all;
`
