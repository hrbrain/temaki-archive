import * as React from 'react'
import styled, { defaultTheme } from '~/modules/theme'

import * as IconFiles from '~/lib/iconFiles'
import * as Icon from '~/components/Icon'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------

type Props = {
    items: Item[]
    value: Value
    onClickItem: (value: Value) => void
    className?: string
    isVisible?: boolean
    onBlurSearchValue?: () => void
}

export const Component = React.memo((props: Props) => {
    const showItem = props.items.map(
        renderItem(props.value, props.onClickItem, props.onBlurSearchValue)
    )
    return (
        <ItemList data-test="itemList" className={props.className}>
            {props.isVisible ? showItem : null}
        </ItemList>
    )
})

const renderItem = (
    selected: Value,
    onClickItem: (value: Value) => void,
    onBlurSearchValue?: () => void
) => (item: Item, index: number) => {
    return (
        <ItemComponent
            item={item}
            key={index}
            selected={selected}
            onClickItem={onClickItem}
            onBlurSearchValue={onBlurSearchValue}
        />
    )
}

/**
 * ItemComponent
 */

export type Item = {
    value: Value
    text: string
    remarks?: string
    disabled?: boolean
}
export type Value = string

type ItemProps = {
    item: Item
    selected: Value
    onClickItem: (value: Value) => void
    onBlurSearchValue?: () => void
}

const ItemComponent = React.memo<ItemProps>(props => {
    const handleClick = React.useCallback(() => {
        if (props.onBlurSearchValue !== undefined) props.onBlurSearchValue()
        props.onClickItem(props.item.value)
    }, [props.onClickItem, props.item, props.onBlurSearchValue])
    const noop = () => {}
    return (
        <StyledItem onClick={props.item.disabled ? noop : handleClick}>
            <Icon.Component
                svg={IconFiles.icons.SingleCheck}
                size="24px"
                color={
                    props.item.value === props.selected
                        ? defaultTheme.colors.primary.default
                        : defaultTheme.colors.grayScale.S10
                }
            />
            <Text disabled={props.item.disabled}>
                {props.item.text}
                {props.item.remarks && (
                    <RemarksText>{props.item.remarks}</RemarksText>
                )}
            </Text>
        </StyledItem>
    )
})

/**
 * Styles
 */

const ItemList = styled.ul`
    background: ${props => props.theme.colors.grayScale.S0};
    border-radius: 6px;
    box-shadow: ${props => props.theme.shadows.dropShadow.L5};
    max-height: 204px;
    overflow-y: auto;
    padding: 12px;
    z-index: 1;
`

const StyledItem = styled.li`
    list-style-type: none;
    user-select: none;
    font-size: 14px;
    display: flex;
    cursor: pointer;
    &:hover {
        color: ${props => props.theme.colors.primary.default};
    }
    & + & {
        margin-top: 12px;
    }
`

const Text = styled.div<{ disabled?: boolean }>`
    padding-left: 4px;
    ${props =>
        props.disabled &&
        `color: ${props.theme.colors.grayScale.S20};
        cursor: not-allowed;`}
`

const RemarksText = styled.div`
    font-size: 12px;
    word-wrap: anywhere;
`
