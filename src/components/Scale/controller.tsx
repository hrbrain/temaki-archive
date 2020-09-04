import * as React from 'react'
import styled, { withTheme, RequiredThemeProps } from '~/modules/theme'

import * as IconFiles from '~/lib/iconFiles'
import * as Icon from '~/components/Icon'

type Props = {
    scale: number
    onChangeScale: (scale: number) => void
    theme: RequiredThemeProps
}

export const Component = withTheme(
    React.memo<Props>(({ scale, onChangeScale, theme }) => {
        const clickIncrement = React.useCallback(() => {
            if (scale >= 1) return
            onChangeScale(scale + 0.05)
        }, [scale])

        const clickDecrement = React.useCallback(() => {
            if (scale <= 0.25) return
            onChangeScale(scale - 0.05)
        }, [scale])

        const displayValue = React.useMemo(() => {
            return `${Math.round(scale * 100)}.00%`
        }, [scale])

        return (
            <ScaleWrap>
                <ScaleButtonLeft onClick={clickIncrement}>
                    <StyledIcon
                        svg={IconFiles.icons.AddIcon}
                        color={theme.colors.primary.default}
                        size={'24px'}
                    />
                </ScaleButtonLeft>
                <ScaleLabel>{displayValue}</ScaleLabel>
                <ScaleButtonRight onClick={clickDecrement}>
                    <StyledIcon svg={IconFiles.icons.Subtract} size={'24px'} />
                </ScaleButtonRight>
            </ScaleWrap>
        )
    })
)

const ScaleWrap = styled.div`
    display: flex;
    justify-content: space-between;
    width: 138px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    border-radius: 6px;
    background: ${props => props.theme.colors.grayScale.S0};
    border: 1px solid ${props => props.theme.colors.grayScale.S10};
`

const ScaleLabel = styled.span`
    font-size: 12px;
    user-select: none;
    color: ${props => props.theme.colors.primary.default};
`

const ScaleButton = styled.div`
    cursor: pointer;
    width: 32px;
    text-align: center;
    background: ${props => props.theme.colors.grayScale.S5};
`

const StyledIcon = styled(Icon.Component)`
    display: inline-block;
    vertical-align: middle;
    height: 100%;
`

const ScaleButtonLeft = styled(ScaleButton)`
    border-right: 1px solid ${props => props.theme.colors.grayScale.S10};
    border-radius: 5px 0 0 5px;
`
const ScaleButtonRight = styled(ScaleButton)`
    border-left: 1px solid ${props => props.theme.colors.grayScale.S10};
    border-radius: 0 5px 5px 0;
`
