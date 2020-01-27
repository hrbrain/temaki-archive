import * as React from 'react'
import styled from '~/modules/theme'

import * as IconFiles from '~/lib/iconFiles'
import * as Icon from '~/components/Icon'
import * as ClickOutside from '../../modules/ClickOutside'

/**
 * Component
 */

type Props = {
    type: 'meatball' | 'kebab'
    position: 'top' | 'bottom'
    listItems: Item[]
    onClick: (e: React.MouseEvent) => void
}

export type Item = {
    item: string
    color?: 'default' | 'primary' | 'destructive'
    onClick: (e: React.MouseEvent) => void
}

const renderListItem = (
    isShow: boolean,
    setIsShow: (value: boolean) => void
) => (listItem: Item, index: number) => {
    const listClick = React.useCallback(
        (e: React.MouseEvent) => {
            listItem.onClick(e)
            setIsShow(!isShow)
        },
        [isShow]
    )
    return (
        <ListItem
            data-test={`list-item${index}`}
            onClick={listClick}
            key={listItem.item}
            color={listItem.color}
        >
            {listItem.item}
        </ListItem>
    )
}

export const Component = React.memo<Props>(
    ({ type, position, listItems, onClick }) => {
        const [isShow, setIsShow] = React.useState<boolean>(false)
        const handleClick = React.useCallback(
            (e: React.MouseEvent) => {
                setIsShow(!isShow)
                onClick(e)
            },
            [isShow]
        )
        const clickOutside = React.useCallback(() => {
            setIsShow(false)
        }, [isShow])

        return (
            <Wrap>
                <ClickOutside.Component
                    data-test="click-outside"
                    onClickOutside={clickOutside}
                >
                    <Menu
                        data-test="menu-component"
                        className={position}
                        onClick={handleClick}
                    >
                        <MenuItem
                            data-test="icon-src"
                            svg={selectMeatOrKebab(type)}
                            size="24px"
                        />
                    </Menu>
                    <List
                        data-test="list-component"
                        className={`${position} ${!isShow ? 'hidden' : ''}`}
                    >
                        {listItems.map(renderListItem(isShow, setIsShow))}
                    </List>
                </ClickOutside.Component>
            </Wrap>
        )
    }
)

const selectMeatOrKebab = (type: 'meatball' | 'kebab') => {
    if (type == 'meatball') {
        return IconFiles.icons.MenuH
    } else {
        return IconFiles.icons.MenuV
    }
}

/**
 * style
 */
const Wrap = styled.div`
    position: relative;
`
const Menu = styled.div`
    cursor: pointer;
    position: absolute;
    right: 0;
    &.top {
        top: 0;
    }
    &.bottom {
        bottom: 0;
    }
`
const MenuItem = styled(Icon.Component)``

const List = styled.ul`
    white-space: nowrap;
    position: absolute;
    display: block;
    right: 0;
    max-width: 140px;
    background: ${props => props.theme.colors.grayScale.S0};
    border-radius: 6px;
    box-shadow: ${props => props.theme.shadows.boxShadow.L5};
    padding: 12px;
    transition: 0.2s;
    visibility: visible;
    transform: scaleY(1);
    position: top;
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
    color: ${props => {
        if (props.color === 'primary') {
            return props.theme.colors.primary.default
        }
        if (props.color === 'destructive') {
            return props.theme.colors.utilities.red.default
        }
        return props.theme.colors.text.default
    }};
`
