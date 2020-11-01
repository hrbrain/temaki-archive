import * as React from 'react'
import styled from '~/modules/theme'

/**
 * Component
 */

export type Props = {
    items: Item[]
    selectedIndex: number
    onClickTab: (index: number) => void
    className?: string
    itemsWidth?: string
}

export const Component = React.memo<Props>(
    ({ items, selectedIndex, onClickTab, className, itemsWidth }) => {
        return (
            <div className={className}>
                {items.map(renderItem(selectedIndex, onClickTab, itemsWidth))}
            </div>
        )
    }
)

export type Item = {
    text: string
}

const renderItem = (
    selectedIndex: number,
    onClickTab: (index: number) => void,
    itemWidth?: string
) => (item: Item, key: number) => {
    const handleClick = React.useCallback(() => onClickTab(key), [])
    return (
        <Box
            data-test={`item${key}`}
            selected={selectedIndex === key}
            onClick={handleClick}
            key={key}
            itemWidth={itemWidth}
        >
            {item.text}
        </Box>
    )
}

Component.displayName = 'SegmentedControl'

/**
 * Styles
 */

const Box = styled.div<{ selected?: boolean; itemWidth?: string }>`
    transition: 0.2s;
    background: ${props =>
        props.selected
            ? props.theme.colorsOld.primary.default
            : props.theme.colorsOld.grayScale.S0};
    color: ${props =>
        props.selected
            ? props.theme.colorsOld.grayScale.S0
            : props.theme.colorsOld.primary.default};
    display: inline-flex;
    text-align: center;
    padding-left: 12px;
    padding-right: 12px;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    border: 1px solid ${props => props.theme.colorsOld.primary.default};
    border-right: 0;
    border-collapse: collapse;
    user-select: none;
    cursor: pointer;
    width: ${props => props.itemWidth || '100%'};
    justify-content: center;
    align-items: center;

    &:first-child {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
    }

    &:last-child {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
        border-right: 1px solid
            ${props => props.theme.colorsOld.primary.default};
    }
`
