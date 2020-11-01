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
    onClick: (e: React.MouseEvent<HTMLElement>) => void
}

export type Item = {
    item: string
    color?: 'default' | 'primary' | 'destructive'
    onClick: (e: React.MouseEvent<HTMLElement>) => void
}

const renderListItem = (
    isShow: boolean,
    setIsShow: (value: boolean) => void
) => (listItem: Item, index: number) => {
    const listClick = React.useCallback(
        (e: React.MouseEvent<HTMLElement>) => {
            listItem.onClick(e)
            setIsShow(!isShow)
        },
        [isShow]
    )
    return (
        <ListItem
            data-test={`list-item${index}`}
            data-item={listItem.item}
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
            (e: React.MouseEvent<HTMLElement>) => {
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
                        <ListWrapper>
                            <List
                                data-test="list-component"
                                className={`${position} ${
                                    !isShow ? 'hidden' : ''
                                }`}
                                listNum={listItems.length}
                            >
                                {listItems.map(
                                    renderListItem(isShow, setIsShow)
                                )}
                            </List>
                        </ListWrapper>
                    </Menu>
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
    width: 24px;
`
const Menu = styled.div`
    cursor: pointer;
    position: relative;
    right: 0;
    &.top {
        top: 0;
    }
    &.bottom {
        bottom: 0;
    }
`
const MenuItem = styled(Icon.Component)``

const ListWrapper = styled.div``

const List = styled.ul<{ listNum: number }>`
    white-space: nowrap;
    position: absolute;
    display: block;
    right: 0;
    max-width: 140px;
    background: ${props => props.theme.colorsOld.grayScale.S0};
    border-radius: 6px;
    box-shadow: ${props => props.theme.shadows.boxShadow.L5};
    padding: 12px;
    transition: 0.2s;
    visibility: visible;
    transform: scaleY(1);
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
            return props.theme.colorsOld.primary.default
        }
        if (props.color === 'destructive') {
            return props.theme.colorsOld.utilities.red.default
        }
        return props.theme.colorsOld.text.default
    }};
`
