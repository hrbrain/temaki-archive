import * as React from 'react'
import styled from '~/modules/theme'
import { css } from 'styled-components'

import * as IconFiles from '~/lib/iconFiles'
import * as Icon from '~/components/Icon'

/**
 * Component
 */

type Props = {
    label: string
    text?: string
    type: 'info' | 'warning'
}

export const Component = React.memo<Props>(({ label, text, type }) => {
    switch (type) {
        case 'info':
            return (
                <InfoOuter data-test="info-toast">
                    <Icons
                        // TODO:正しいアイコンに直す
                        svg={IconFiles.icons.ChevronDown}
                        size="24px"
                        color={'white'}
                    />
                    {text ? (
                        <div>
                            <Label>{label}</Label>
                            <Text>{text}</Text>
                        </div>
                    ) : (
                        <Label>{label}</Label>
                    )}
                </InfoOuter>
            )
        case 'warning':
            return (
                <WarningOuter data-test="warning-toast">
                    <Icons
                        svg={IconFiles.icons.Warning}
                        size="24px"
                        color={'white'}
                    />
                    {text ? (
                        <div>
                            <Label>{label}</Label>
                            <Text>{text}</Text>
                        </div>
                    ) : (
                        <Label>{label}</Label>
                    )}
                </WarningOuter>
            )
    }
})

/**
 * Styles
 */

const Outer = css`
    margin: 0 0 24px 24px;
    display: inline-flex;
    align-items: start;
    padding: 12px;
    border-radius: 6px;
    box-shadow: ${props => props.theme.shadows.L5};
`

const InfoOuter = styled.div`
    background-color: ${props => props.theme.colors.utilities.highlightGreen};
    ${Outer}
`
const WarningOuter = styled.div`
    background-color: ${props => props.theme.colors.utilities.red};
    ${Outer}
`
const Icons = styled(Icon.Component)`
    top: 0;
`
const Label = styled.div`
    max-width: 280px;
    word-break: break-all;
    line-height: 24px;
    font-size: 14px;
    padding-left: 4px;
    font-weight: bold;
    color: ${props => props.theme.colors.grayScale.S0};
`
const Text = styled.div`
    max-width: 280px;
    word-break: break-all;
    white-space: pre-wrap;
    font-size: 14px;
    padding: 4px 0 0 4px;
    color: ${props => props.theme.colors.grayScale.S0};
`
