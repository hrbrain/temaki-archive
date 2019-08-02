import * as React from 'react'
import styled from '~/modules/theme'

import * as IconFiles from '~/lib/iconFiles'
import * as Icon from '~/components/Icon'

/**
 * Component
 */

type Props = {
    text: string
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void
    checked: boolean
}

export const Component = React.memo<Props>(({ text, checked, ...props }) => {
    if (checked) {
        return (
            <Outer {...props}>
                <RadioButton svg={IconFiles.icons.RadioOn} size="24px" />
                <Label>{text}</Label>
            </Outer>
        )
    }

    return (
        <Outer {...props}>
            <RadioButton svg={IconFiles.icons.RadioOff} size="24px" />
            <Label>{text}</Label>
        </Outer>
    )
})

/**
 * Styles
 */

const Outer = styled.div`
    display: inline-flex;
    align-items: center;
    cursor: pointer;
`

const RadioButton = styled(Icon.Component)`
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
    color: ${props => props.theme.colors.text};
`
