import * as React from 'react'
import styled, { withTheme, RequiredThemeProps } from '~/modules/theme'

import * as IconFiles from '~/lib/iconFiles'
import * as Icon from '~/components/Icon'

/**
 * Component
 */

type Props = {
    text: string
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void
    disabled?: boolean
    checked?: boolean
    theme: RequiredThemeProps
}

export const Component = withTheme(
    React.memo<Props>(({ text, checked, onClick, disabled, theme }) => {
        if (disabled) {
            return (
                <Outer
                    disabled={true}
                    data-test="radio-disabled"
                    onClick={onClick}
                >
                    <RadioButton
                        svg={IconFiles.icons.RadioDisabled}
                        size="24px"
                        color={theme.colors.grayScale.S20}
                    />
                    <DisabledLabel>{text}</DisabledLabel>
                </Outer>
            )
        }
        if (checked) {
            return (
                <Outer
                    data-test="radio-on"
                    disabled={disabled}
                    onClick={onClick}
                >
                    <RadioButton
                        svg={IconFiles.icons.RadioOn}
                        color={
                            disabled
                                ? theme.colors.grayScale.S20
                                : theme.colors.primary.default
                        }
                        size="24px"
                    />
                    <Label disabled={disabled}>{text}</Label>
                </Outer>
            )
        }

        return (
            <Outer data-test="radio-off" disabled={disabled} onClick={onClick}>
                <RadioButton
                    svg={IconFiles.icons.RadioOff}
                    size="40px"
                    color={
                        disabled
                            ? theme.colors.grayScale.S20
                            : theme.colors.primary.default
                    }
                />
                <Label disabled={disabled}>{text}</Label>
            </Outer>
        )
    })
)

/**
 * Styles
 */

const Outer = styled.div<{ disabled?: boolean }>`
    display: inline-flex;
    align-items: center;
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`

const RadioButton = styled(Icon.Component)<{
    color?: string
}>`
    color: ${props =>
        props.color ? props.color : props.theme.colors.primary.default};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 24px;
    width: 24px;
`
const Label = styled.span<{ disabled?: boolean }>`
    max-width: 280px;
    word-break: break-all;
    font-size: 14px;
    padding-left: 4px;
    height: 24px;
    line-height: 24px;
    color: ${props =>
        props.disabled
            ? props.theme.colors.grayScale.S20
            : props.theme.colors.primary.P95};
`
const DisabledLabel = styled.span`
    max-width: 280px;
    word-break: break-all;
    font-size: 14px;
    padding-left: 4px;
    height: 24px;
    line-height: 24px;
    color: ${props => props.theme.colors.grayScale.S20};
`
