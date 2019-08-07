import * as React from 'react'
import styled from '~/modules/theme'

/**
 * Component
 */

type Props = {
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void
    isClicked: boolean
    leftText: string
    rightText: string
}

export const Component = React.memo<Props>(
    ({ onClick, isClicked, leftText, rightText }) => {
        if (isClicked) {
            return (
                <Outer data-test="switch-on">
                    <LeftText>{leftText}</LeftText>
                    <Switch data-test="switch" onClick={onClick}>
                        <SwitchItem />
                    </Switch>
                    <RightText>{rightText}</RightText>
                </Outer>
            )
        }
        return (
            <Outer data-test="switch-off">
                <LeftText>{leftText}</LeftText>
                <Switch
                    className="activeOuter"
                    data-test="switch"
                    onClick={onClick}
                >
                    <SwitchItem className="activeSwitch" />
                </Switch>
                <RightText>{rightText}</RightText>
            </Outer>
        )
    }
)

/**
 * Styles
 */

const Outer = styled.div`
    display: inline-fix;
`
const Switch = styled.div`
    position: relative;
    width: 46px;
    height: 24px;
    border-radius: 12px;
    cursor: pointer;
    background: ${props => props.theme.colors.primary.default};
    transition: 0.2s;
    &.activeOuter {
        background: ${props => props.theme.colors.primary.N60};
    }
`
const SwitchItem = styled.span`
    position: absolute;
    left: 0;
    margin: 4px;
    width: 16px;
    height: 16px;
    border-radius: 8px;
    background: ${props => props.theme.colors.grayScale.S0};
    transition: 0.2s;
    &.activeSwitch {
        left: 22px;
    }
`
const LeftText = styled.span`
    margin-right: 8px;
    line-height: 24px;
    max-width: 8em;
    white-space: nowrap;
    overflow: hidden;
    word-break: break-all;
    display: inline-block;
    font-size: 14px;
`
const RightText = styled.span`
    margin-left: 8px;
    line-height: 24px;
    max-width: 8em;
    white-space: nowrap;
    overflow: hidden;
    word-break: break-all;
    display: inline-block;
    font-size: 14px;
`