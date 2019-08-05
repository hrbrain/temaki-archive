import * as React from 'react'
import styled from '~/modules/theme'

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
    if (type === 'info') {
        return (
            <InfoOuter>
                <Icons
                    // TODO:正しいアイコンに直す
                    svg={IconFiles.icons.ChevronDown}
                    size="24px"
                    color={'white'}
                    />
                <div>
                    <Label>{label}</Label>
                    <Text>{text}</Text>
                </div>
            </InfoOuter>
        )
    }

    if (type === 'warning') {
        return (
            <WarningOuter>
                <Icons
                    svg={IconFiles.icons.Warning}
                    size="24px"
                    color={'white'}
                    />
                <div>
                    <Label>{label}</Label>
                    <Text>{text}</Text>
                </div>
            </WarningOuter>
        )
    }

    // ここには入らないよss
    return null
})

/**
 * Styles
 */

const InfoOuter = styled.div`
    display: inline-flex;
    align-items: start;
    background-color: ${props => props.theme.colors.utilities.highlightGreen};
    padding: 12px;
    border-radius: 6px;
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.16);
`
const WarningOuter = styled.div`
    display: inline-flex;
    align-items: start;
    background-color: ${props => props.theme.colors.utilities.red};
    padding: 12px;
    border-radius: 6px;
    box-shadow: ${props => props.theme.shadows.L5};
`
const Icons = styled(Icon.Component)`
    top: 0;
`
const Label = styled.div`
    font-size: 14px;
    padding-left: 4px;
    font-weight: bold;
    color: white;
    width: 100%;
`
const Text = styled.div`
    white-space: pre-wrap;
    font-size: 14px;
    padding: 4px 0 0 4px;
    color: white;
`
