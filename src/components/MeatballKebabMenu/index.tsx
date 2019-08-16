import * as React from 'react'
import styled from '~/modules/theme'

import * as IconFiles from '~/lib/iconFiles'
import * as Icon from '~/components/Icon'
import * as ClickOutside from '../../modules/ClickOutside'

/**
 * Component
 */

type Props = {
    iconSrc: string
    position: 'top' | 'bottom'
    listItems: Item[]
    onClick: (e: React.MouseEvent) => void
}

type Item = {
    item: string
    onClick: (e: React.MouseEvent) => void
}

type MeatballMenuProps = {
    position: 'top' | 'bottom'
    listItems: Item[]
    onClick: (e: React.MouseEvent) => void
}

export const MeatballMenu = ({
    position,
    listItems,
    onClick
}: MeatballMenuProps) => (
    <Component
        position={position}
        listItems={listItems}
        // TODO: アイコンをミートボールに変える
        iconSrc={IconFiles.icons.MenuV}
        onClick={onClick}
    />
)

type KebabMenuProps = {
    position: 'top' | 'bottom'
    listItems: Item[]
    onClick: (e: React.MouseEvent) => void
}

export const KebabMenu = ({ position, listItems, onClick }: KebabMenuProps) => (
    <Component
        position={position}
        listItems={listItems}
        iconSrc={IconFiles.icons.MenuV}
        onClick={onClick}
    />
)

export const Component = React.memo<Props>(
    ({ iconSrc, position, listItems, onClick }) => {
        const [isShow, setIsShow] = React.useState<boolean>(false)
        const handleClick = React.useCallback(
            (e: React.MouseEvent) => {
                setIsShow(!isShow)
                onClick(e)
            },
            [isShow]
        )
        const renderListItem = (listItem: Item, index: number) => {
            const listClick = React.useCallback(
                (e: React.MouseEvent) => {
                    listItem.onClick(e)
                    setIsShow(!isShow)
                },
                [isShow]
            )
            return (
                <ListItem
                    data-test={`listItem${index}`}
                    onClick={listClick}
                    key={listItem.item}
                >
                    {listItem.item}
                </ListItem>
            )
        }

        return (
            <Wrap>
                {/* eslint-disable-next-line react/jsx-no-bind */}
                <ClickOutside.Component onClickOutside={() => setIsShow(false)}>
                    <Menu
                        data-test="menu"
                        className={position}
                        onClick={handleClick}
                    >
                        <MenuItem svg={iconSrc} size="24px" />
                    </Menu>
                    <List
                        data-test="list"
                        className={`${position} ${!isShow ? 'hidden' : ''}`}
                    >
                        {listItems.map(renderListItem)}
                    </List>
                </ClickOutside.Component>
            </Wrap>
        )
    }
)

/**
 * style
 */
const Wrap = styled.div`
    position: relative;
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
