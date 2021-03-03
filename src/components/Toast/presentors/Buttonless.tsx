import * as React from 'react'
import styled from '~/modules/theme'

import * as IconFiles from '~/lib/iconFiles'
import * as Icon from '~/components/Icon'
/*
 * Component
 */
type Variant = 'warning' | 'info' | 'progress'

type Props = {
    label: string
    variant: Variant
    color?: string
    text?: string
    icon?: IconFileKeys
}

type IconFileKeys = keyof typeof IconFiles.icons

export const Component = React.memo<Props>(
    ({ label, variant, text, icon = IconFiles.icons.SingleCheck }) => {
        return (
            <Outer variant={variant} data-test={`${variant}-buttonless-toast`}>
                {variant === 'progress' ? (
                    <Icons
                        svg={IconFiles.icons.Loading}
                        size="24px"
                        color={'white'}
                    />
                ) : (
                    <Icons svg={icon} size="24px" color={'white'} />
                )}
                {text ? (
                    <div>
                        <Label variant={variant}>{label}</Label>
                        <Text variant={variant}>{text}</Text>
                    </div>
                ) : (
                    <Label variant={variant}>{label}</Label>
                )}
            </Outer>
        )
    }
)

//------------------------------------------------------------------------------
// Styles
//------------------------------------------------------------------------------

type OuterType = {
    variant: Variant
    highlightGreen: string
    grayScaleS5: string
    red: string
}
const Outer = styled.div<{ variant: Variant }>`
    display: inline-flex;
    align-items: start;
    padding: 12px;
    border-radius: 6px;
    box-shadow: ${props => props.theme.shadows.boxShadow.L5};
    ${props =>
        getVariantColor({
            variant: props.variant,
            highlightGreen: props.theme.colors.utilities.highlightGreen.default,
            red: props.theme.colors.utilities.red.default,
            grayScaleS5: props.theme.colors.grayScale.S5
        })}
`

const getVariantColor = (props: OuterType) => {
    switch (props.variant) {
        case 'info':
            return `background-color: ${props.highlightGreen};`
        case 'progress':
            return `background-color: ${props.grayScaleS5};`
        case 'warning':
            return `background-color: ${props.red};`
        default:
            throw Error('not provided type')
    }
}

const getVariantFontColor = ({
    variant,
    textDefault,
    grayScaleS0
}: {
    variant: Variant
    textDefault: string
    grayScaleS0: string
}) => {
    switch (variant) {
        case 'info':
            return `color: ${grayScaleS0};`
        case 'progress':
            return `color: ${textDefault};`
        case 'warning':
            return `color: ${grayScaleS0};`
        default:
            throw Error('not provided type')
    }
}

const Icons = styled(Icon.Component)`
    top: 0;
`
const Label = styled.div<{ variant: Variant }>`
    max-width: 290px;
    word-break: break-all;
    line-height: 24px;
    font-size: 14px;
    padding-left: 4px;
    font-weight: bold;
    ${props =>
        getVariantFontColor({
            variant: props.variant,
            grayScaleS0: `${props.theme.colors.grayScale.S0}`,
            textDefault: `${props.theme.colors.text.default}`
        })}
`
const Text = styled(Label)`
    line-height: normal;
    font-weight: normal;
    white-space: pre-wrap;
    padding: 4px 0 0 4px;
`
