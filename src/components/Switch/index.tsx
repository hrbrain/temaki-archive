import * as React from 'react'
import styled from '~/modules/theme'

/**
 * Component
 */

type Props = {
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
    switching: boolean
    leftText?: string
    rightText?: string
}

export const Component = React.memo<Props>(
    ({ onClick, switching, leftText, rightText }) => {
        switch (switching) {
            case false:
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
            case true:
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
    background: ${props => props.theme.colors.primary.default};
    transition: 0.2s;
    &.activeOuter {
        position: relative;
        width: 46px;
        height: 24px;
        border-radius: 12px;
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
        position: absolute;
        left: 22px;
        margin: 4px;
        width: 16px;
        height: 16px;
        border-radius: 8px;
        background: ${props => props.theme.colors.grayScale.S0};
    }
`
const LeftText = styled.span`
    padding-right: 8px;
    display: flex;
    font-size: 14px;
`
const RightText = styled.span`
    padding-left: 8px;
    display: flex;
    font-size: 14px;
`
