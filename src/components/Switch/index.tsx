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
                    <Outer>
                        <LeftText>{leftText}</LeftText>
                        <SwitchOuter>
                            <SwitchOff onClick={onClick} />
                        </SwitchOuter>
                        <RightText>{rightText}</RightText>
                    </Outer>
                )
            case true:
                return (
                    <Outer>
                        <LeftText>{leftText}</LeftText>
                        <SwitchOuter>
                            <SwitchOn onClick={onClick} />
                        </SwitchOuter>
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
const SwitchOuter = styled.div`
    position: rerative;
    width: 46px;
    height: 24px;
    border-radius: 12px;
    background: ${props => props.theme.colors.primary.P20};
`
const SwitchOff = styled.span`
    position: absolute;
    margin: 4px;
    width: 16px;
    height: 16px;
    border-radius: 8px;
    background: ${props => props.theme.colors.primary.N95};
`
// TODO: switchの位置を整える
const SwitchOn = styled.span`
    position: absolute;
    margin: 4px;
    width: 16px;
    height: 16px;
    border-radius: 8px;
    background: ${props => props.theme.colors.primary.N95};
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
