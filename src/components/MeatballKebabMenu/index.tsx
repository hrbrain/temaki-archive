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
    position: 'top' | 'left' | 'right' | 'bottom'
    size?: string
    listItems: Item[]
    onClick: (e: React.MouseEvent<HTMLElement>) => void
    color?: string
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
    ({ type, position, listItems, onClick, color, size = '24px' }) => {
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
            <Wrap size={size}>
                <ClickOutside.Component
                    data-test="click-outside"
                    onClickOutside={clickOutside}
                >
                    <Menu data-test="menu-component" onClick={handleClick}>
                        <MenuItem
                            data-test="icon-src"
                            svg={selectMeatOrKebab(type)}
                            color={color}
                            size={size}
                        />
                        <ListWrapper>
                            <List
                                data-test="list-component"
                                position={position}
                                isHidden={!isShow}
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
const Wrap = styled.div<{ size: string }>`
    position: relative;
    width: ${props => props.size};
    height: ${props => props.size};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s ease 0s;
    &:hover {
        background: ${props => props.theme.colors.grayScale.S5};
        border-radius: 6px;
    }
`
const Menu = styled.div`
    cursor: pointer;
    position: relative;
`
const MenuItem = styled(Icon.Component)``

const ListWrapper = styled.div``

type ListProps = {
    listNum: number
    isHidden: boolean
    position: Props['position']
}
const List = styled.ul<ListProps>`
    white-space: nowrap;
    position: absolute;
    display: block;
    max-width: 140px;
    background: ${props => props.theme.colors.grayScale.S0};
    border-radius: 6px;
    box-shadow: ${props => props.theme.shadows.boxShadow.L5};
    padding: 12px;
    transition: 0.2s;
    visibility: visible;
    transform: scaleY(1);
    ${props => {
        switch (props.position) {
            case 'top':
                return `
        transform-origin: top;
        right: 0;
        top: 24px;
        `

            case 'left':
                return `
                transform-origin: left;
        bottom: -48px;
        left: 48px;
                `
            case 'right':
                return `
                transform-origin: right;
        bottom: -48px;
        right: 48px;
                `
            case 'bottom':
                return `
                transform-origin: bottom;
        right: 0;
        bottom: 24px;
                `
        }
    }}

    ${props => {
        if (!props.isHidden) return ''

        switch (props.position) {
            case 'top':
            case 'bottom':
                return `visibility: hidden;
transform: scaleY(0);`

            case 'left':
            case 'right':
                return `visibility: hidden;
transform: scaleX(0);`
        }
    }}
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
