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
            <Outer tabIndex={1} data-test="radio-button" {...props}>
                <RadioButton svg={IconFiles.icons.RadioOn} size="24px" />
                <Label>{text}</Label>
            </Outer>
        )
    }

    return (
        <Outer tabIndex={1} data-test="noradio-box" {...props}>
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

    & .primary {
        fill: ${props => props.theme.colors.primary.default};
    }
`
const Label = styled.span`
    // width: 20em;
    word-break: break-all;
    font-size: 14px;
    padding-left: 4px;
    height: 24px;
    line-height: 24px;
    color: ${props => props.theme.colors.text};
`
