import * as React from 'react'
import styled, { withTheme, RequiredThemeProps } from '~/modules/theme'

import * as IconFiles from '~/lib/iconFiles'
import * as Icon from '~/components/Icon'

type Props = {
    defaultValue: number
    step: number
    min: number
    max: number
    unit: string
    rate: number
    onChangeValue: (value: number) => void
    theme: RequiredThemeProps
    className?: string
}

export const Component = withTheme(
    React.memo<Props>(props => {
        const [currentValue, setCurrentValue] = React.useState(
            props.defaultValue || 0
        )

        const clickIncrement = React.useCallback(() => {
            if (currentValue >= props.max) return
            const total = currentValue + props.step
            setCurrentValue(total)
            props.onChangeValue(total)
        }, [currentValue, props.max, props.step, props.onChangeValue])

        const clickDecrement = React.useCallback(() => {
            if (currentValue <= props.min) return
            const total = currentValue - props.step
            setCurrentValue(total)
            props.onChangeValue(total)
        }, [currentValue, props.min, props.step, props.onChangeValue])

        const displayValue = React.useMemo(() => {
            const formatValue = Math.round(currentValue * props.rate)
            return formatValue
        }, [currentValue, props.rate])

        return (
            <Wrap className={props.className}>
                <IncrementButton
                    onClick={clickIncrement}
                    data-test="incrementValue"
                >
                    <StyledIcon
                        svg={IconFiles.icons.AddIcon}
                        color={props.theme.colors.grayScale.S100}
                        size={'24px'}
                    />
                </IncrementButton>
                <Label>
                    {displayValue}
                    {props.unit}
                </Label>
                <DecrementButton
                    onClick={clickDecrement}
                    data-test="decrementValue"
                >
                    <StyledIcon
                        svg={IconFiles.icons.Subtract}
                        color={props.theme.colors.grayScale.S100}
                        size={'24px'}
                    />
                </DecrementButton>
            </Wrap>
        )
    })
)

const Wrap = styled.div`
    display: flex;
    justify-content: space-between;
    width: 138px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    border-radius: 6px;
    background: ${props => props.theme.colors.grayScale.S0};
    border: 1px solid ${props => props.theme.colors.grayScale.S10};
    color: ${props => props.theme.colors.grayScale.S100};
`

const Label = styled.span`
    font-size: 12px;
    user-select: none;
`

const StyledIcon = styled(Icon.Component)`
    display: inline-block;
    vertical-align: middle;
    height: 100%;
`

const Button = styled.div`
    cursor: pointer;
    width: 32px;
    text-align: center;
    background: ${props => props.theme.colors.grayScale.S5};
`

const IncrementButton = styled(Button)`
    border-right: 1px solid ${props => props.theme.colors.grayScale.S10};
    border-radius: 5px 0 0 5px;
`
const DecrementButton = styled(Button)`
    border-left: 1px solid ${props => props.theme.colors.grayScale.S10};
    border-radius: 0 5px 5px 0;
`
