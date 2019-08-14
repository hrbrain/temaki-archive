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
    // onClick: (e: React.MouseEvent<HTMLDivElement>) => void
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

const Component = React.memo<Props>(({ iconSrc, position, listItems }) => {
    const [isShow, setIsShow] = React.useState<boolean>(false)
    const handleClick = React.useCallback(
        (_: React.MouseEvent) => {
            setIsShow(!isShow)
        },
        [isShow]
    )
    const renderListItem = (listItem: Item) => {
        const listClick = React.useCallback(
            (e: React.MouseEvent) => {
                listItem.onClick(e)
                handleClick(e)
            },
            [isShow]
        )
        return (
            <ListItem onClick={listClick} key={listItem.item}>
                {listItem.item}
            </ListItem>
        )
    }

    return (
        <Outer>
            <Menu className={position} onClick={handleClick}>
                <MenuItem svg={iconSrc} size="24px" />
            </Menu>
            <List className={`${position} ${!isShow ? 'hidden' : ''}`}>
                {listItems.map(renderListItem)}
            </List>
        </Outer>
    )
})

/**
 * style
 */
const Outer = styled.div`
    position: relative;
    height: 80vh;
`
const Menu = styled.div`
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
const MenuItem = styled(Icon.Component)``

const List = styled.ul`
    position: absolute;
    display: block;
    right: 0;
    max-width: 140px;
    background: ${props => props.theme.colors.grayScale.S0};
    border-radius: 6px;
    box-shadow: ${props => props.theme.shadows.L5};
    padding: 12px;
    transition: 0.2s;
    visibility: visible;
    transform: scaleY(1);
    $position = top;
    &.top {
        transform-origin: top;
        top: 24px;
    }
    &.bottom {
        transform-origin: bottom;
        bottom: 24px;
    }
    &.hidden {
        visibility: hidden;
        transform: scaleY(0);
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
