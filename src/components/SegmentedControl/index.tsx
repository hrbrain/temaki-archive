import * as React from 'react'
import styled from '~/modules/theme'

/**
 * Component
 */

export type Props = {
    items: Item[]
    selectedIndex: number
    onClickTab: (index: number) => void
}

export const Component = React.memo<Props>(
    ({ items, selectedIndex, onClickTab }) => {
        return <div>{items.map(renderItem(selectedIndex, onClickTab))}</div>
    }
)

export type Item = {
    text: string
}

const renderItem = (
    selectedIndex: number,
    onClickTab: (index: number) => void
) => (item: Item, key: number) => {
    const handleClick = React.useCallback(() => onClickTab(key), [])
    return (
        <Box
            data-test={`item${key}`}
            selected={selectedIndex === key}
            onClick={handleClick}
            key={key}
        >
            {item.text}
        </Box>
    )
}

Component.displayName = 'SegmentedControl'

/**
 * Styles
 */

const Box = styled.div<{ selected?: boolean }>`
    transition: 0.2s;
    background: ${props =>
        props.selected
            ? props.theme.colors.primary.default
            : props.theme.colors.grayScale.S0};
    color: ${props =>
        props.selected
            ? props.theme.colors.grayScale.S0
            : props.theme.colors.primary.default};
    display: inline-flex;
    text-align: center;
    padding-left: 12px;
    padding-right: 12px;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    border: 1px solid ${props => props.theme.colors.primary.default};
    border-right: 0;
    border-collapse: collapse;
    user-select: none;
    cursor: pointer;

    &:first-child {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
    }

    &:last-child {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
        border-right: 1px solid ${props => props.theme.colors.primary.default};
    }
`
