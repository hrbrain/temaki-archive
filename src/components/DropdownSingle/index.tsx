import * as React from 'react'
import styled from '~/modules/theme'

import * as ItemList from './ItemList'
import * as Default from './presentors/Default'
import * as Borderless from './presentors/Borderless'
import * as Icon from '~/components/Icon'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------

export type Item = ItemList.Item

type Props = {
    items: ItemList.Item[]
    value: ItemList.Value
    disabled?: boolean
    type: 'default' | 'borderless'
    onChange: (value: ItemList.Value) => void
    onClickBody?: (event: React.MouseEvent) => void
    placeholder?: string
    isError?: boolean
    width?: string
    diff?: boolean
    className?: string
    defaultExpanded?: boolean
    errorMessage?: string
}

export const Component = React.memo<Props>(props => {
    const [isMenuVisible, setIsMenuVisible] = React.useState<boolean>(
        props.defaultExpanded || false
    )

    const [searchValue, setSearchValue] = React.useState('')
    const changeSearchValue = React.useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setSearchValue(event.target.value)
        },
        [searchValue]
    )

    const blurSearchValue = React.useCallback(() => {
        setSearchValue('')
    }, [])

    const [focused, setFocused] = React.useState(false)

    const clickBody = React.useCallback(
        (e: React.MouseEvent) => {
            e.preventDefault()
            setIsMenuVisible(!isMenuVisible)
            setFocused(!focused)
            setSearchValue('')
            props.onClickBody && props.onClickBody(e)
        },
        [isMenuVisible, focused]
    )

    const closeMenu = React.useCallback(() => {
        setIsMenuVisible(false)
    }, [])

    const handleOnChange = React.useCallback(
        (value: ItemList.Value) => {
            setIsMenuVisible(false)
            props.onChange(value)
        },
        [props.onChange]
    )

    const keyDownInInput = React.useCallback(
        (e: React.KeyboardEvent) => {
            if (e.keyCode === 8 && searchValue === '') {
                props.onChange('')
            }
        },
        [searchValue, props.onChange]
    )

    switch (props.type) {
        case 'borderless':
            return (
                <Borderless.Component
                    items={props.items}
                    value={props.value}
                    isError={props.isError}
                    onClick={clickBody}
                    onClickOutside={closeMenu}
                    onClickMenuItem={handleOnChange}
                    isMenuVisible={isMenuVisible}
                    showIconBySelected={showIconBySelected}
                    showTextBySelected={showTextBySelected}
                    width={props.width}
                    diff={props.diff}
                    className={props.className}
                    searchValue={searchValue}
                />
            )
        case 'default':
            return (
                <Default.Component
                    items={props.items}
                    value={props.value}
                    isError={props.isError}
                    disabled={props.disabled}
                    placeholder={props.placeholder}
                    onClick={clickBody}
                    onClickMenuItem={handleOnChange}
                    onClickOutside={closeMenu}
                    isMenuVisible={isMenuVisible}
                    showIconBySelected={showIconBySelected}
                    showTextBySelected={showTextBySelected}
                    width={props.width}
                    diff={props.diff}
                    errorMessage={props.errorMessage}
                    className={props.className}
                    searchValue={searchValue}
                    onChangeSearchValue={changeSearchValue}
                    onBlurSearchValue={blurSearchValue}
                    onKeyDown={keyDownInInput}
                />
            )
    }
})

Component.displayName = 'DropdownSingle'

const showIconBySelected = (
    items: ItemList.Item[],
    selected: ItemList.Value
): JSX.Element | null => {
    const selectedItem = items.find(item => item.value === selected)
    if (selectedItem && selectedItem.icon) {
        return <SelectedItemIcon {...selectedItem.icon} />
    }
    return null
}

const showTextBySelected = (
    items: ItemList.Item[],
    selected: ItemList.Value
) => {
    const text = items.find(item => item.value === selected)
    if (text && text.text) {
        return <ColorText color={text.textColor}>{text.text}</ColorText>
    }
    return null
}

//------------------------------------------------------------------------------
// SelectedItemIcon
//------------------------------------------------------------------------------

type SelectedItemIconProps = Omit<Icon.Props, 'size'>

const SelectedItemIcon = (props: SelectedItemIconProps) => (
    <IconWrap>
        <Icon.Component {...props} size="24px" />
    </IconWrap>
)

const ColorText = styled.span`
    display: inline-block;
    padding-top: 1px;
    ${props => props.color && `color: ${props.color};`}
`

const IconWrap = styled.div`
    padding-right: 4px;
`
