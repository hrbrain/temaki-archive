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
    onClickClose: () => void
}

export const Component = React.memo<Props>(
    ({ label, text, type, onClickClose }) => {
        switch (type) {
            case 'info':
                return (
                    <InfoOuter data-test="info-toast">
                        <Icons
                            svg={IconFiles.icons.SingleCheck}
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
                        <CloseButton onClick={onClickClose}>
                            <Icons
                                svg={IconFiles.icons.Close}
                                size="24px"
                                color="white"
                            />
                        </CloseButton>
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
    }
)

/**
 * Styles
 */

const Outer = css`
    display: inline-flex;
    align-items: start;
    padding: 12px;
    border-radius: 6px;
    box-shadow: ${props => props.theme.shadows.L5};
`

const InfoOuter = styled.div`
    background-color: ${props =>
        props.theme.colors.utilities.highlightGreen.default};
    ${Outer}
`
const WarningOuter = styled.div`
    background-color: ${props => props.theme.colors.utilities.red.default};
    ${Outer}
`
const Icons = styled(Icon.Component)`
    top: 0;
`

const buttonMixin = css`
    cursor: pointer;
`

const CloseButton = styled.span`
    ${buttonMixin}
`

const Label = styled.div`
    max-width: 290px;
    word-break: break-all;
    line-height: 24px;
    font-size: 14px;
    padding-left: 4px;
    font-weight: bold;
    color: ${props => props.theme.colors.grayScale.S0};
`
const Text = styled.div`
    max-width: 290px;
    word-break: break-all;
    white-space: pre-wrap;
    font-size: 14px;
    padding: 4px 0 0 4px;
    color: ${props => props.theme.colors.grayScale.S0};
`
