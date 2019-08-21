import * as React from 'react'
import styled, { defaultTheme } from '~/modules/theme'

import * as IconFiles from '~/lib/iconFiles'
import * as Icon from '~/components/Icon'

type Props = {
    placeholder?: string
    items: Item[]
    selected: string
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
            <Div
                data-test="body"
                isVisible={isVisible}
                isError={props.isError}
                onClick={handleClick}
            >
                {props.selected !== '' ? (
                    <Text data-test="selected" width={props.width}>
                        {props.selected}
                    </Text>
                ) : (
                    <Text data-test="placeholder" width={props.width}>
                        {props.placeholder}
                    </Text>
                )}
                <DropDownIcon
                    className={isVisible ? 'visible' : ''}
                    svg={IconFiles.icons.DropdownOff}
                    size="24px"
                ></DropDownIcon>
            </Div>
            <Ul
                data-test="ul"
                width={props.width}
                className={!isVisible ? 'hide' : ''}
            >
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
    )
})

export type Item = {
    text: string
}

type ItemProps = {
    selected: string
    onClickItem: (text: string) => void
} & Item

const Item = React.memo<ItemProps>(props => {
    const handleClick = React.useCallback(() => {
        props.onClickItem(props.text)
    }, [])

    return (
        <Li onClick={handleClick}>
            <Icon.Component
                // TODO: svgをSingleCheckIconに変える
                svg={IconFiles.icons.ChevronDown}
                size="24px"
                color={
                    props.text === props.selected
                        ? defaultTheme.colors.primary.default
                        : defaultTheme.colors.grayScale.S10
                }
            />
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
}

const Div = styled.div<PType>`
    position: relative;
    display: flex;
    padding: 12px;
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
    box-shadow: ${props => props.theme.shadows.dropShadow.L5};
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
