import * as React from 'react'
import styled from '~/modules/theme'

import * as IconFiles from '~/lib/iconFiles'
import * as Icon from '~/components/Icon'
import * as ItemList from './itemList'

/**
 * Component
 */

type Props = {
    placeholder: string
    items: ItemList.Item[]
    selected: ItemList.Value[]
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
                selected={selected}
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
    selected: ItemList.Value[],
    placeholder: string
): JSX.Element[] | string => {
    if (selected.length <= 0) {
        return placeholder
    }
    return selected.map((value, index) => {
        return renderText(value, index, items)
    })
}

const renderText = (value: string, key: number, items: ItemList.Item[]) => {
    const item = items.find(item => item.value === value)
    if (item) {
        return <InnerText key={key}>{item.text}</InnerText>
    }
    throw new Error(
        `Invalid value. Could not find an item with the value ${value}`
    )
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
    selected: ItemList.Value[]
}

const Body = styled.div<BodyType>`
    position: relative;
    width: ${props => props.width}px;
    max-width: 262px;
    display: flex;
    padding: 12px;
    padding-bottom: ${props => (props.selected.length > 0 ? 8 : 12)}px;
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

const InnerText = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.colors.primary.N95};
    padding: 0 4px;
    margin-right: 8px;
    margin-bottom: 8px;
`
