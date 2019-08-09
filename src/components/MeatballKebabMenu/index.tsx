import * as React from 'react'
import styled from '~/modules/theme'

import * as IconFiles from '~/lib/iconFiles'
import * as Icon from '~/components/Icon'

/**
 * Component
 */

type Props = {
    type: 'm-top' | 'm-bottom' | 'k-top' | 'k-bottom'
    listItems: Item[]
}

type Item = {
    item: string
    onClick: (e: React.MouseEvent) => void
}

export const Component = React.memo<Props>(({ type, listItems }) => {
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

    switch (type) {
        case 'm-top':
            return (
                <Outer>
                    <Meatball className="top" onClick={handleClick}>
                        {/* TODO: アイコンをミートボールに変える */}
                        <MeatballItem svg={IconFiles.icons.MenuV} size="24px" />
                    </Meatball>

                    {isShow && (
                        <List className="{[!isShow ? 'hidden' : null].join(' ')}, top">
                            {listItems.map(renderListItem)}
                        </List>
                    )}
                </Outer>
            )
        case 'm-bottom':
            return (
                <Outer>
                    {isShow && (
                        <List className="{[!isShow ? 'hidden' : null].join(' ')}, bottom">
                            {listItems.map(renderListItem)}
                        </List>
                    )}

                    <Meatball className="bottom" onClick={handleClick}>
                        {/* TODO: アイコンをミートボールに変える */}
                        <MeatballItem svg={IconFiles.icons.MenuV} size="24px" />
                    </Meatball>
                </Outer>
            )
        case 'k-top':
            return (
                <Outer>
                    <Meatball className="top" onClick={handleClick}>
                        <MeatballItem svg={IconFiles.icons.MenuV} size="24px" />
                    </Meatball>

                    {isShow && (
                        <List className="{[!isShow ? 'hidden' : null].join(' ')}, top">
                            {listItems.map(renderListItem)}
                        </List>
                    )}
                </Outer>
            )
        case 'k-bottom':
            return (
                <Outer>
                    {isShow && (
                        <List className="{[!isShow ? 'hidden' : null].join(' ')}, bottom">
                            {listItems.map(renderListItem)}
                        </List>
                    )}

                    <Meatball className="bottom" onClick={handleClick}>
                        <MeatballItem svg={IconFiles.icons.MenuV} size="24px" />
                    </Meatball>
                </Outer>
            )
    }
})

/**
 * style
 */
const Outer = styled.div``
const Meatball = styled.div`
    cursor: pointer;
    position: relative;
    &.top {
        position: absolute;
        top: 0;
        right: 0;
    }
    &.bottom {
        position: absolute;
        bottom: 0;
        right: 0;
    }
`
const MeatballItem = styled(Icon.Component)``
const List = styled.ul`
    max-width: 140px;
    background: ${props => props.theme.colors.grayScale.S0};
    border-radius: 6px;
    box-shadow: ${props => props.theme.shadows.L5};
    padding: 12px;
    visibility: visible;
    transform: scale(1);
    opacity: 1;
    transition: 0.2s;
    &.top {
        position: absolute;
        top: 24px;
        right: 0;
    }
    &.bottom {
        position: absolute;
        bottom: 24px;
        right: 0;
    }
    &.hidden {
        opacity: 0;
        transform: scale(0);
        visibility: hidden;
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
