import * as React from 'react'
import styled from '~/modules/theme'

/**
 * Component
 */

export type TabItemType = {
    text: string
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}

type TabItemProps = {
    selected: boolean
} & TabItemType

export type Props = {
    selectedIndex: number
    tabItems: TabItemType[]
}

const Component = React.memo<Props>(({ tabItems, selectedIndex }) => {
    const renderTabItem = (tabItem: TabItemType, index: number) => {
        return (
            <TabItem
                selected={selectedIndex === index}
                text={tabItem.text}
                onClick={tabItem.onClick}
                key={index}
            ></TabItem>
        )
    }

    return <>{tabItems.map(renderTabItem)}</>
})

export const TabItem = React.memo<TabItemProps>(
    ({ text, selected, ...props }) => {
        return (
            <Box selected={selected} {...props}>
                {text}
            </Box>
        )
    }
)

Component.displayName = 'Tab'

export { Component }

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
