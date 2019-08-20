import * as React from 'react'
import styled from '~/modules/theme'

import * as IconFiles from '~/lib/iconFiles'
import * as Icon from '~/components/Icon'

type Props = {
    placeholder?: string
    items: Item[]
    selected: string[]
    isError: boolean
    width: number
    onClickItem: (text: string) => void
}

const Component = React.memo<Props>(props => {
    const [isVisible, setIsVisible] = React.useState(false)

    const handleClick = React.useCallback(() => {
        setIsVisible(!isVisible)
    }, [isVisible])

    return (
        <Outer width={props.width}>
            <Body
                data-test="body"
                isVisible={isVisible}
                isError={props.isError}
                onClick={handleClick}
                selected={props.selected}
            >
                <Text data-test="text" width={props.width}>
                    {props.selected.length !== 0
                        ? props.selected.map(renderText)
                        : props.placeholder}
                </Text>
                <DropDownIcon
                    className={isVisible ? 'visible' : ''}
                    svg={IconFiles.icons.DropdownOff}
                    size="24px"
                />
            </Body>
            <ItemList
                data-test="itemList"
                width={props.width}
                className={!isVisible ? 'hide' : ''}
            >
                {props.items.map(renderItem(props.selected, props.onClickItem))}
            </ItemList>
        </Outer>
    )
})

const renderText = (text: string, key: number) => {
    return <InnerText key={key}>{text}</InnerText>
}

const renderItem = (
    selected: string[],
    onClickItem: (text: string) => void
) => (item: Item, index: number) => {
    return (
        <Item
            text={item.text}
            key={index}
            selected={selected}
            onClickItem={onClickItem}
        />
    )
}

export type Item = {
    text: string
}

type ItemProps = {
    selected: string[]
    onClickItem: (text: string) => void
} & Item

const Item = React.memo<ItemProps>(props => {
    const handleClick = React.useCallback(() => {
        props.onClickItem(props.text)
    }, [])

    return (
        <Li onClick={handleClick}>
            <Icon.Component
                svg={
                    props.selected.indexOf(props.text) >= 0
                        ? IconFiles.icons.CheckBoxOn
                        : IconFiles.icons.CheckBoxOff
                }
                size="24px"
            ></Icon.Component>
            <LiText>{props.text}</LiText>
        </Li>
    )
})

Component.displayName = 'DropdownMulti'

export { Component }

const Outer = styled.div<{ width: number }>`
    display: inline-block;
    width: ${props => props.width}px;
    max-width: 262px;
`

const DropDownIcon = styled(Icon.Component)`
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    transition: 0.2s;
    &.visible {
        transform: translateY(-50%) rotate(180deg);
    }
`

type PType = {
    isVisible: boolean
    isError: boolean
    selected: string[]
}

const Body = styled.div<PType>`
    position: relative;
    display: flex;
    padding: 12px;
    padding-bottom: ${props => (props.selected.length > 0 ? 8 : 12)}px;
    border: 1px solid
        ${props => {
            if (props.isError) {
                return props.theme.colors.utilities.red
            } else if (props.isVisible) {
                return props.theme.colors.utilities.highlightGreen
            } else {
                return props.theme.colors.grayScale.S10
            }
        }};
    border-radius: 6px;
    user-select: none;
    font-size: 14px;
    line-height: 24px;
    cursor: pointer;
`

const Text = styled.div<{ width: number }>`
    display: block;
    padding-right: 4px;
    width: ${props => props.width - 52}px;
    max-width: 210px;
`

const InnerText = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.colors.primary.N95};
    padding: 0 4px;
    margin-right: 8px;
    margin-bottom: 8px;
`

const ItemList = styled.ul<{ width: number }>`
    position: absolute;
    background: ${props => props.theme.colors.grayScale.S0};
    border-radius: 6px;
    margin-top: 4px;
    box-shadow: ${props => props.theme.shadows.boxShadow.L5};
    width: ${props => props.width}px;
    max-width: 262px;
    max-height: 204px;
    overflow: auto;
    visibility: visible;
    transform: scaley(1);
    transform-origin: top;
    transition: 0.2s;
    &:last-child {
        padding-bottom: 12px;
    }
    &.hide {
        visibility: hidden;
        transform: scaley(0);
    }
`

const Li = styled.li`
    list-style-type: none;
    padding: 12px 12px 0 12px;
    user-select: none;
    font-size: 14px;
    display: flex;
    cursor: pointer;
`

const LiText = styled.div`
    padding-left: 4px;
`
