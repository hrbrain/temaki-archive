import * as React from 'react'
import styled, { defaultTheme } from '~/modules/theme'

import * as IconFiles from '~/lib/iconFiles'
import * as Icon from '~/components/Icon'

type ItemListProps = {
    items: Item[]
    selected: string
    onClickItem: (text: string) => void
    className?: string
    isVisible: boolean
}

const ItemListComponent = React.memo<ItemListProps>(
    ({ items, selected, onClickItem, className, isVisible }) => {
        return (
            <ul
                data-test="itemList"
                className={`${className} ${isVisible ? '' : 'hide'}`}
            >
                {items.map(renderItem(selected, onClickItem))}
            </ul>
        )
    }
)

const renderItem = (selected: string, onClickItem: (text: string) => void) => (
    item: Item,
    index: number
) => {
    return (
        <Item
            text={item.text}
            key={index}
            selected={selected}
            onClickItem={onClickItem}
        />
    )
}

/**
 * ItemComponent
 */

export type Item = {
    text: string
}

type ItemProps = {
    selected: string
    onClickItem: (text: string) => void
} & Item

const Item = React.memo<ItemProps>(props => {
    const handleClick = React.useCallback(() => {
        props.onClickItem(props.text)
    }, [])

    return (
        <Li onClick={handleClick}>
            <Icon.Component
                svg={IconFiles.icons.SingleCheck}
                size="24px"
                color={
                    props.text === props.selected
                        ? defaultTheme.colors.primary.default
                        : defaultTheme.colors.grayScale.S10
                }
            />
            <LiText>{props.text}</LiText>
        </Li>
    )
})

/**
 * Styles
 */

export const ItemList = styled(ItemListComponent)<{ width: number }>`
    position: absolute;
    background: ${props => props.theme.colors.grayScale.S0};
    border-radius: 6px;
    margin-top: 4px;
    box-shadow: ${props => props.theme.shadows.dropShadow.L5};
    width: ${props => props.width}px;
    max-width: 262px;
    max-height: 204px;
    overflow: auto;
    visibility: visible;
    transform: scaley(1);
    transform-origin: top;
    transition: 0.2s;
    &:last-child {
        padding-bottom: 12px;
    }
    &.hide {
        visibility: hidden;
        transform: scaley(0);
    }
`

const Li = styled.li`
    list-style-type: none;
    padding: 12px 12px 0 12px;
    user-select: none;
    font-size: 14px;
    display: flex;
    cursor: pointer;
`

const LiText = styled.div`
    padding-left: 4px;
`
