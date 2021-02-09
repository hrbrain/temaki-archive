import * as React from 'react'
import styled, { css } from '~/modules/theme'
import * as Container from '../container'

//------------------------------------------------------------------------------
// component
//------------------------------------------------------------------------------

export const Component = (props: Container.DefaultProps) => {
    return (
        <div className={props.className}>
            {props.items.map(
                renderItem(
                    props.selectedIndex,
                    props.onClickTab,
                    props.itemsWidth
                )
            )}
        </div>
    )
}

//------------------------------------------------------------------------------
// renderItem
//------------------------------------------------------------------------------

const renderItem = (
    selectedIndex: number,
    onClickTab: (index: number) => void,
    itemWidth?: string
) => (item: Container.DefaultProps['items'][number], index: number) => {
    const handleClick = React.useCallback(() => onClickTab(index), [])

    return (
        <Item
            data-test={`default-item${index}`}
            selected={selectedIndex === index}
            onClick={handleClick}
            key={`${item.text}-${index}`}
            itemWidth={itemWidth}
        >
            {item.text}
        </Item>
    )
}

//------------------------------------------------------------------------------
// styles
//------------------------------------------------------------------------------

const style = css<{
    selected?: boolean
    itemWidth?: Container.CommonProps['itemsWidth']
}>`
    ${() => Container.commonStyle};

    ${props => props.selected && Container.selectedStyle};
`

const Item = styled.div`
    ${style}
`
