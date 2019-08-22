import * as React from 'react'
import styled from '~/modules/theme'

import * as IconFiles from '~/lib/iconFiles'
import * as Icon from '~/components/Icon'

type Props = {
    placeholder: string
    selected: string
    isError: boolean
    width: number
    isVisible: boolean
    handleClick?: () => void
}

export const Component = React.memo<Props>(
    ({ placeholder, selected, isError, width, isVisible, handleClick }) => {
        return (
            <Body
                data-test="body"
                isVisible={isVisible}
                isError={isError}
                onClick={handleClick}
            >
                <Text data-test="text" width={width}>
                    {showTextBySelected(selected, placeholder)}
                </Text>
                <DropDownIcon
                    className={isVisible ? 'visible' : ''}
                    svg={IconFiles.icons.DropdownOff}
                    size="24px"
                />
            </Body>
        )
    }
)

const showTextBySelected = (selected: string, placeholder: string): string => {
    if (selected === '') {
        return placeholder
    }
    return selected
}

/**
 * Styles
 */

const DropDownIcon = styled(Icon.Component)`
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    transition: 0.2s;
    &.visible {
        transform: translateY(-50%) rotate(180deg);
    }
`

type PType = {
    isVisible: boolean
    isError: boolean
}

const Body = styled.div<PType>`
    position: relative;
    display: flex;
    padding: 12px;
    border: 1px solid
        ${props => {
            if (props.isError) {
                return props.theme.colors.utilities.red
            } else if (props.isVisible) {
                return props.theme.colors.utilities.highlightGreen
            } else {
                return props.theme.colors.grayScale.S10
            }
        }};
    border-radius: 6px;
    user-select: none;
    font-size: 14px;
    cursor: pointer;
`

const Text = styled.div<{ width: number }>`
    padding-right: 4px;
    width: ${props => props.width - 52}px;
    max-width: 210px;
`
