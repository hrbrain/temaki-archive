import * as React from 'react'
import styled, { defaultTheme } from '~/modules/theme'

import * as IconFiles from '~/lib/iconFiles'
import * as Icon from '~/components/Icon'

type Props = {
    placeholder?: string
    items: Item[]
    selected: string
    width: number
    onClickItem: (text: string) => void
}

const Component = React.memo<Props>(props => {
    const [isVisible, setIsVisible] = React.useState(false)

    const handleClick = React.useCallback(() => {
        setIsVisible(!isVisible)
    }, [isVisible])

    return (
        <div>
            <Outer width={props.width}>
                <P isVisible={isVisible} onClick={handleClick}>
                    {props.selected !== '' ? (
                        <Text width={props.width}>{props.selected}</Text>
                    ) : (
                        <Text width={props.width}>{props.placeholder}</Text>
                    )}
                    <DropDownIcon
                        svg={IconFiles.icons.DropdownOff}
                        size="24px"
                    ></DropDownIcon>
                </P>
                <Ul width={props.width} className={!isVisible ? 'hide' : ''}>
                    {props.items.map((item, index) => {
                        return (
                            <Item
                                text={item.text}
                                key={index}
                                selected={props.selected}
                                onClickItem={props.onClickItem}
                            />
                        )
                    })}
                </Ul>
            </Outer>
        </div>
    )
})

type Item = {
    text: string
    selected?: string // 型には宣言しない方が良さげ?
}

type ItemProps = {
    onClickItem: (text: string) => void
} & Item

const Item = React.memo<ItemProps>(props => {
    const handleClick = React.useCallback(() => {
        props.onClickItem(props.text)
    }, [])

    return (
        <Li onClick={handleClick}>
            <SingleCheckIcon
                // TODO: svgをSingleCheckIconに変える
                svg={IconFiles.icons.ChevronDown}
                size="24px"
                color={
                    props.text === props.selected
                        ? defaultTheme.colors.primary.default
                        : defaultTheme.colors.grayScale.S10
                }
            ></SingleCheckIcon>
            <LiText>{props.text}</LiText>
        </Li>
    )
})

Component.displayName = 'DropdownSingle'

export { Component }

const Outer = styled.div<{ width: number }>`
    display: inline-block;
    width: ${props => props.width}px;
    max-width: 262px;
`

const DropDownIcon = styled(Icon.Component)`
    float: right;
`

const P = styled.p<{ isVisible: boolean }>`
    position: relative;
    display: flex;
    padding: 12px;
    border: 1px solid
        ${props =>
            props.isVisible
                ? props.theme.colors.utilities.highlightGreen
                : props.theme.colors.grayScale.S10};
    border-radius: 6px;
    user-select: none;
    font-size: 14px;
    cursor: pointer;
`

const Text = styled.div<{ width: number }>`
    padding-right: 4px;
    width: ${props => props.width - 52}px;
    max-width: 210px;
`

const Ul = styled.ul<{ width: number }>`
    position: absolute;
    background: ${props => props.theme.colors.grayScale.S0};
    border-radius: 6px;
    margin-top: 4px;
    box-shadow: ${props => props.theme.shadows.L5};
    width: ${props => props.width}px;
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
const SingleCheckIcon = styled(Icon.Component)`
    position: absolute;
    right: 12px;
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
