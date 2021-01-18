import * as React from 'react'
import styled from '~/modules/theme'

import * as IconFiles from '~/lib/iconFiles'
import * as Icon from '~/components/Icon'

/**
 * Component
 */

export type Value = string
export type Item = {
    label: string
    value: Value
    children?: Item[]
}
type Props = {
    items: Item[]
    selectedValues: string[]
    onClickItem: (item: Item) => void
    className?: string
}

export const Component: React.FC<Props> = props => (
    <Wrap className={props.className}>
        {props.items.map(item => (
            <StyledItem
                item={item}
                key={item.value}
                selectedValues={props.selectedValues}
                onClickItem={props.onClickItem}
            />
        ))}
    </Wrap>
)

/**
 * Item
 */

type ItemProps = {
    item: Item
    selectedValues: string[]
    onClickItem: (item: Item) => void
    className?: string
}

const Item: React.FC<ItemProps> = props => {
    const [isOpen, setIsOpen] = React.useState(false)

    const isSelected = React.useMemo(
        () => props.selectedValues.includes(props.item.value),
        [props]
    )
    const hasChildren = React.useMemo(() => props.item.children !== undefined, [
        props.item.children
    ])

    const openChildren = React.useCallback(() => {
        setIsOpen(prev => !prev)
    }, [])
    const handleClick = React.useCallback(() => {
        props.onClickItem(props.item)
    }, [props.onClickItem, props.item])

    return (
        <ItemWrap className={props.className}>
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
                    <Text>{props.item.label}</Text>
                </ClickArea>
            </Li>
            {isOpen &&
                props.item.children !== undefined &&
                props.item.children.map(child => (
                    <Item
                        item={child}
                        key={child.value}
                        selectedValues={props.selectedValues}
                        onClickItem={props.onClickItem}
                    />
                ))}
        </ItemWrap>
    )
}

/**
 * Styles
 */

const StyledItem = styled(Item)``

const Wrap = styled.div`
    display: block;
    background: ${props => props.theme.colors.grayScale.S0};
    border-radius: 6px;
    box-shadow: ${props => props.theme.shadows.dropShadow.L5};
    max-height: 204px;
    overflow-y: auto;
    padding-bottom: 12px;
    & > ${StyledItem} {
        margin-left: 15px;
    }
`

const ItemWrap = styled.ul`
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
    white-space: nowrap;
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
    padding-right: 10px;
`
