import * as React from 'react'
import styled from '~/modules/theme'

import * as IconFiles from '~/lib/iconFiles'
import * as Icon from '~/components/Icon'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------

type Props = {
    items: Item[]
    values: Value[]
    onClickItem: (value: Value) => void
    className?: string
    isVisible?: boolean
}

export const Component = React.memo<Props>(props => {
    const showItem = props.items.map(
        renderItem(props.values, props.onClickItem)
    )
    return (
        <ItemList
            data-test="itemList"
            className={props.className}
            isVisible={props.isVisible}
        >
            <ListInner>{props.isVisible ? showItem : null}</ListInner>
        </ItemList>
    )
})

const renderItem = (selected: Value[], onClickItem: (value: Value) => void) => (
    item: Item,
    index: number
) => {
    return (
        <ItemComponent
            item={item}
            key={`${index}-${item.value}`}
            selected={selected}
            onClickItem={onClickItem}
        />
    )
}

//------------------------------------------------------------------------------
// ItemComponent
//------------------------------------------------------------------------------

export type Item = {
    text: string
    value: Value
    remarks?: string
}
export type Value = string

type ItemProps = {
    item: Item
    selected: Value[]
    onClickItem: (value: Value) => void
}

const ItemComponent = React.memo<ItemProps>(props => {
    const handleClick = React.useCallback(() => {
        props.onClickItem(props.item.value)
    }, [props.onClickItem, props.item])
    return (
        <ListItem onClick={handleClick}>
            <CheckIcon
                svg={
                    props.selected.indexOf(props.item.value) >= 0
                        ? IconFiles.icons.CheckBoxOn
                        : IconFiles.icons.CheckBoxOff
                }
                size="24px"
            />
            <Text>
                {props.item.text}
                {props.item.remarks && (
                    <RemarksText>{props.item.remarks}</RemarksText>
                )}
            </Text>
        </ListItem>
    )
})

//------------------------------------------------------------------------------
// Styles
//------------------------------------------------------------------------------

const ItemList = styled.ul<{ isVisible?: boolean }>`
    display: block;
    background: ${props => props.theme.colors.grayScale.S0};
    border-radius: 6px;
    box-shadow: ${props => props.theme.shadows.dropShadow.L5};
    max-height: 204px;
    overflow-y: auto;
    z-index: 1;
`

const ListInner = styled.div`
    padding: 12px;
`

const ListItem = styled.li`
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

const CheckIcon = styled(Icon.Component)`
    & #fill {
        fill: ${props => props.theme.colors.primary.default};
        & .disabled {
            fill: ${props => props.theme.colors.grayScale.S20};
        }
    }
`

const Text = styled.div`
    padding-left: 4px;
    word-break: break-word;
`

const RemarksText = styled.div`
    font-size: 12px;
    word-wrap: anywhere;
`
