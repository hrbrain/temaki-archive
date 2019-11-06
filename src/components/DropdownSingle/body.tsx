import * as React from 'react'
import styled from '~/modules/theme'

import * as IconFiles from '~/lib/iconFiles'
import * as Icon from '~/components/Icon'
import * as ItemList from './ItemList'

/**
 * Component
 */

type Props = {
    placeholder: string
    items: ItemList.Item[]
    selected: ItemList.Value
    isError: boolean
    width: number
    isVisible: boolean
    handleClick?: () => void
}

export const Component = React.memo<Props>(
    ({
        placeholder,
        items,
        selected,
        isError,
        width,
        isVisible,
        handleClick
    }) => {
        return (
            <Body
                data-test="body"
                isVisible={isVisible}
                isError={isError}
                onClick={handleClick}
                width={width}
            >
                <Text data-test="text" width={width}>
                    {showTextBySelected(items, selected, placeholder)}
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

const showTextBySelected = (
    items: ItemList.Item[],
    selected: ItemList.Value,
    placeholder: string
): string => {
    const text = items.find(item => item.value === selected)
    if (text && text.text) {
        return text.text
    }
    return placeholder
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

type BodyType = {
    isVisible: boolean
    isError: boolean
    width: number
}

const Body = styled.div<BodyType>`
    position: relative;
    width: ${props => props.width}px;
    max-width: 262px;
    display: flex;
    padding: 12px;
    border: 1px solid
        ${props => {
            if (props.isError) {
                return props.theme.colors.utilities.red.default
            } else if (props.isVisible) {
                return props.theme.colors.utilities.highlightGreen.default
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
