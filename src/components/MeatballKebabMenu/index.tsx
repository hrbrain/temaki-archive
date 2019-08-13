import * as React from 'react'
import styled from '~/modules/theme'

import * as IconFiles from '~/lib/iconFiles'
import * as Icon from '~/components/Icon'

/**
 * Component
 */

type Props = {
    iconSrc: string
    position: 'top' | 'bottom'
    listItems: Item[]
}

type Item = {
    item: string
    onClick: (e: React.MouseEvent) => void
}

type MeatballMenuProps = {
    position: 'top' | 'bottom'
    listItems: Item[]
}

export const MeatballMenu = ({ position, listItems }: MeatballMenuProps) => (
    <Component
        position={position}
        listItems={listItems}
        // TODO: アイコンをミートボールに変える
        iconSrc={IconFiles.icons.MenuV}
    />
)

type KebabMenuProps = {
    position: 'top' | 'bottom'
    listItems: Item[]
}

export const KebabMenu = ({ position, listItems }: KebabMenuProps) => (
    <Component
        position={position}
        listItems={listItems}
        iconSrc={IconFiles.icons.MenuV}
    />
)

export const Component = React.memo<Props>(
    ({ iconSrc, position, listItems }) => {
        const [isShow, setIsShow] = React.useState<boolean>(false)
        const handleClick = React.useCallback(
            (_: React.MouseEvent<HTMLDivElement>) => {
                setIsShow(!isShow)
            },
            [isShow]
        )
        const renderListItem = (listItem: Item) => (
            <ListItem onClick={listItem.onClick} key={listItem.item}>
                {listItem.item}
            </ListItem>
        )

        return (
            <Outer>
                <Meatball className={position} onClick={handleClick}>
                    <MeatballItem svg={iconSrc} size="24px" />
                </Meatball>
                <List className={`${[!isShow ? 'hidden' : position]}`}>
                    {listItems.map(renderListItem)}
                </List>
            </Outer>
        )
    }
)

/**
 * style
 */
const Outer = styled.div`
    height: 300px;
    position: relative;
`
const Meatball = styled.div`
    cursor: pointer;
    position: absolute;
    &.top {
        top: 0;
        right: 0;
    }
    &.bottom {
        bottom: 0;
        right: 0;
    }
`
const MeatballItem = styled(Icon.Component)``
const List = styled.ul`
    position: absolute;
    max-width: 140px;
    background: ${props => props.theme.colors.grayScale.S0};
    border-radius: 6px;
    box-shadow: ${props => props.theme.shadows.L5};
    padding: 12px;
    &.top {
        top: 24px;
        right: 0;
    }
    &.bottom {
        bottom: 24px;
        right: 0;
    }
    &.hidden {
    }
`
const ListItem = styled.li`
    cursor: pointer;
    list-style: none;
    & + & {
        margin-top: 8px;
    }
    &:hover {
        transition: 0.2s;
        color: ${props => props.theme.colors.utilities.highlightGreen};
    }
`
