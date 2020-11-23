import * as React from 'react'
import styled from '~/modules/theme'

import * as IconFiles from '~/lib/iconFiles'
import * as Icon from '~/components/Icon'

export type Value = string
export type MenuItem = {
    label: string
    value: Value
    children?: MenuItem[]
}

type MenuItemProps = MenuItem & {
    selectedValues: string[]
    value: Value
    onClickItem: (value: Value) => void
    className?: string
}

const MenuItem: React.FC<MenuItemProps> = props => {
    const [isOpen, setIsOpen] = React.useState(false)

    const isSelected = React.useMemo(
        () => props.selectedValues.includes(props.value),
        [props]
    )
    const hasChildren = React.useMemo(() => props.children !== undefined, [
        props.children
    ])

    const openChildren = React.useCallback(() => {
        setIsOpen(prev => !prev)
    }, [])
    const handleClick = React.useCallback(() => {
        props.onClickItem(props.value)
    }, [props.onClickItem, props.value])

    return (
        <MenuItemWrap className={props.className}>
            <Li>
                {hasChildren && (
                    <OpenIconArea onClick={openChildren}>
                        <OpenIcon
                            svg={IconFiles.icons.DropdownOff}
                            size="24px"
                            isOpen={isOpen}
                        />
                    </OpenIconArea>
                )}
                <ClickArea onClick={handleClick} hasChildren={hasChildren}>
                    <CheckIcon
                        svg={
                            isSelected
                                ? IconFiles.icons.CheckBoxOn
                                : IconFiles.icons.CheckBoxOff
                        }
                        size="24px"
                    />
                    <Text>{props.label}</Text>
                </ClickArea>
            </Li>
            {isOpen &&
                props.children !== undefined &&
                props.children.map(child => (
                    <MenuItem
                        {...child}
                        key={child.value}
                        selectedValues={props.selectedValues}
                        onClickItem={props.onClickItem}
                    />
                ))}
        </MenuItemWrap>
    )
}

const MenuItemWrap = styled.ul`
    margin-left: 25px;
    margin-top: 12px;
`

const Li = styled.li`
    list-style-type: none;
    user-select: none;
    font-size: 14px;
    display: flex;
    cursor: pointer;
    &:hover {
        color: ${props => props.theme.colors.primary.default};
    }
`

const OpenIconArea = styled.div``

const ClickArea = styled.div<{ hasChildren: boolean }>`
    display: flex;
    align-items: center;
    margin-left: ${({ hasChildren }) => (hasChildren ? '6px' : ' 30px')};
`

const OpenIcon = styled(Icon.Component)<{ isOpen: boolean }>`
    ${({ isOpen }) => !isOpen && 'transform: rotate(-90deg);'}
`

const CheckIcon = styled(Icon.Component)`
    & #fill {
        fill: ${props => props.theme.colors.main.primary[600]};
        & .disabled {
            fill: ${props => props.theme.colors.grayScale.S20};
        }
    }
`

const Text = styled.div`
    padding-left: 4px;
`

type MenuProps = {
    menuItems: MenuItem[]
    selectedValues: string[]
    onClickItem: (value: Value) => void
}

const Menu: React.FC<MenuProps> = props => (
    <>
        {props.menuItems.map(menuItem => (
            <StyledMenuItem
                {...menuItem}
                selectedValues={props.selectedValues}
                key={menuItem.value}
                onClickItem={props.onClickItem}
            />
        ))}
    </>
)

const StyledMenuItem = styled(MenuItem)`
    &:first-of-type {
        margin-top: 0;
    }
`

export type Props = {
    className?: string
    menuItems: MenuItem[]
    selectedValues: string[]
    width?: string
    onClickItem: (value: Value) => void
}

export const Component = React.memo<Props>(props => {
    return (
        <Wrap className={props.className} width={props.width}>
            <Menu
                menuItems={props.menuItems}
                selectedValues={props.selectedValues}
                onClickItem={props.onClickItem}
            />
        </Wrap>
    )
})

Component.displayName = 'DropdownMultipleHierarchy'

const Wrap = styled.div<{ width?: string }>`
    width: ${props => props.width || '100%'};
`
