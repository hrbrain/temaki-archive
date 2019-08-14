import * as React from 'react'
import styled from '~/modules/theme'

/**
 * Component
 */

type Props = {
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void
    checked: boolean
    text: { on: string; off: string }
}

export const Component = React.memo<Props>(({ onClick, checked, text }) => {
    if (checked) {
        return (
            <Outer data-test="switch-on">
                <Text>{text.off}</Text>
                <Switch
                    className="activeOuter"
                    data-test="switch"
                    onClick={onClick}
                >
                    <SwitchItem className="activeSwitch" />
                </Switch>
                <Text>{text.on}</Text>
            </Outer>
        )
    }
    return (
        <Outer data-test="switch-off">
            <Text>{text.off}</Text>
            <Switch data-test="switch" onClick={onClick}>
                <SwitchItem />
            </Switch>
            <Text>{text.on}</Text>
        </Outer>
    )
})

/**
 * Styles
 */

const Outer = styled.div`
    display: inline-fix;
`
const Switch = styled.div`
    margin: 0 8px;
    position: relative;
    width: 46px;
    height: 24px;
    border-radius: 12px;
    cursor: pointer;
    background: ${props => props.theme.colors.primary.N60};
    transition: 0.2s;
    &.activeOuter {
        background: ${props => props.theme.colors.primary.default};
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
const Text = styled.span`
    line-height: 24px;
    max-width: 112px;
    white-space: nowrap;
    overflow: hidden;
    word-break: break-all;
    display: inline-block;
    font-size: 14px;
`
