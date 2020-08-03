import * as React from 'react'
import styled, { ThemeConsumer } from '~/modules/theme'

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
}

export const Component = React.memo<Props>(
    ({ text, checked, onClick, disabled }) => {
        if (disabled) {
            return (
                <Outer
                    disabled={disabled}
                    data-test="radio-disabled"
                    onClick={onClick}
                >
                    <RadioButton
                        svg={IconFiles.icons.RadioDisabled}
                        size="24px"
                    />
                    <DisabledLabel>{text}</DisabledLabel>
                </Outer>
            )
        }
        if (checked) {
            return (
                <Outer data-test="radio-on" onClick={onClick}>
                    <ThemeConsumer>
                        {theme => (
                            <RadioButton
                                svg={IconFiles.icons.RadioOn}
                                size="24px"
                                color={theme.colors.primary.default}
                            />
                        )}
                    </ThemeConsumer>
                </Outer>
            )
        }

        return (
            <Outer data-test="radio-off" onClick={onClick}>
                <ThemeConsumer>
                    {theme => (
                        <RadioButton
                            svg={IconFiles.icons.RadioOff}
                            size="24px"
                            color={theme.colors.primary.default}
                        />
                    )}
                </ThemeConsumer>
                <Label>{text}</Label>
            </Outer>
        )
    }
)

/**
 * Styles
 */

const Outer = styled.div<{ disabled?: boolean }>`
    display: inline-flex;
    align-items: center;
    cursor: ${props => (props.disabled ? 'auto' : 'pointer')};
`

const RadioButton = styled(Icon.Component)`
    color: ${props => props.theme.colors.primary.default};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 24px;
    width: 24px;
`
const Label = styled.span`
    max-width: 280px;
    word-break: break-all;
    font-size: 14px;
    padding-left: 4px;
    height: 24px;
    line-height: 24px;
    color: ${props => props.theme.colors.primary.P95};
`
const DisabledLabel = styled(Label)`
    color: ${props => props.theme.colors.primary.N60};
`
