import * as React from 'react'
import styled from '~/modules/theme'

import * as IconFiles from '~/lib/iconFiles'
import * as Icon from '~/components/Icon'
import * as ItemList from './itemList'
import * as Theme from '../../modules/theme'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------

type Props = {
    items: ItemList.Item[]
    values: ItemList.Value[]
    onClick: (e: React.MouseEvent) => void
    onClickRemove?: (index: number) => void
    placeholder?: string
    disabled?: boolean
    isError?: boolean
    diff?: boolean
    width?: string
    isMenuVisible?: boolean
    searchValue: string
    onChangeSearchValue: (event: React.ChangeEvent<HTMLInputElement>) => void
    onKeydown: (event: React.KeyboardEvent) => void
    onClickIcon: (event: React.MouseEvent) => void
}

export const Component = React.memo<Props>(props => {
    const {
        isMenuVisible,
        disabled,
        isError,
        diff,
        width,
        items,
        values,
        placeholder,
        searchValue,
        onKeydown,
        onChangeSearchValue,
        onClickIcon,
        onClickRemove,
        onClick
    } = props
    const inputRef = React.useRef<HTMLInputElement | null>(null)
    React.useEffect(() => {
        if (inputRef.current && isMenuVisible) inputRef.current.focus()
    }, [isMenuVisible])

    return (
        <>
            <Body
                data-test="body"
                disabled={disabled}
                isError={isError}
                diff={diff}
                width={width}
                isMenuVisible={isMenuVisible}
                onClick={onClick}
            >
                {isMenuVisible ? (
                    <SelectorInput>
                        {showTextBySelected({
                            items,
                            values,
                            placeholder,
                            onClickRemove
                        })}
                        <Input
                            data-test="input"
                            type="text"
                            value={searchValue}
                            onChange={onChangeSearchValue}
                            ref={inputRef}
                            onKeyDown={onKeydown}
                        />
                    </SelectorInput>
                ) : (
                    <Text data-test="text" disabled={disabled}>
                        {showTextBySelected({
                            items,
                            values,
                            placeholder,
                            onClickRemove
                        })}
                    </Text>
                )}
            </Body>
            <IconWrap onClick={onClickIcon}>
                <DropdownIcon
                    className={isMenuVisible ? 'visible' : ''}
                    disabled={disabled}
                    svg={
                        disabled
                            ? IconFiles.icons.DropdownOffDisabled
                            : IconFiles.icons.DropdownOff
                    }
                    size="24px"
                />
            </IconWrap>
        </>
    )
})

type ShowTextBySelected = {
    items: ItemList.Item[]
    values: ItemList.Value[]
    placeholder?: string
    onClickRemove?: (index: number) => void
}

const showTextBySelected = ({
    items,
    values,
    placeholder,
    onClickRemove
}: ShowTextBySelected): React.ReactElement | string => {
    if (values.length <= 0) {
        return placeholder || ''
    }
    return (
        <>
            {values.map((value, index) => {
                return renderText(value, index, items, onClickRemove)
            })}
        </>
    )
}

const renderText = (
    value: string,
    index: number,
    items: ItemList.Item[],
    onClickRemove?: (index: number) => void
) => {
    const item = items.find(item => item.value === value)

    if (!item) {
        console.warn(
            `${JSON.stringify(
                items
            )} don't have the ${value}. This error has occured in temaki DropdownMultiple`
        )
        return null
    }
    const onClick = (index: number) => () => {
        onClickRemove && onClickRemove(index)
    }
    return (
        <InnerText key={`${value}-${index}`}>
            {item.text}
            {onClickRemove && <Remove onClick={onClick(index)} />}
        </InnerText>
    )
}

//------------------------------------------------------------------------------
// Styles
//------------------------------------------------------------------------------
const IconWrap = styled.div`
    cursor: pointer;
`

type DropdownType = {
    disabled?: boolean
}
const DropdownIcon = styled(Icon.Component)<DropdownType>`
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    transition: 0.2s;
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
    &.visible {
        transform: translateY(-50%) rotate(180deg);
    }
`

const getBackgroundColor = (
    status: { diff?: boolean; disabled?: boolean },
    theme: Theme.RequiredThemeProps
) => {
    switch (true) {
        case status.diff == true:
            return theme.colors.utilities.paleYellow
        case status.disabled === true:
            return theme.colors.grayScale.S20
        default:
            return 'inherit'
    }
}
type BodyType = {
    isMenuVisible?: boolean
    disabled?: boolean
    isError?: boolean
    diff?: boolean
    width?: string
}
const Body = styled.div<BodyType>`
    min-height: 40px;
    position: relative;
    ${props => (props.width ? `width: ${props.width}` : '')};
    display: flex;
    align-items: center;
    padding: 0 12px;
    border: 1px solid
        ${props => {
            if (props.isError) {
                return props.theme.colors.utilities.red.default
            }
            if (props.isMenuVisible) {
                return props.theme.colors.utilities.highlightGreen.default
            }
            return props.theme.colors.main.grayScale[400]
        }};
    border-radius: 6px;
    user-select: none;
    font-size: 14px;
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
    background-color: ${props =>
        getBackgroundColor(
            { disabled: props.disabled, diff: props.diff },
            props.theme
        )};
`

type TextType = { disabled?: boolean }
const Text = styled.div<TextType>`
    padding: 5px 4px 5px 0;
    width: calc(100% - 28px);
    color: ${props =>
        props.disabled
            ? props.theme.colors.grayScale.S50
            : props.theme.colors.primary.default};
`

const Remove = styled.div`
    display: block;
    cursor: pointer;
    background: ${props => props.theme.colors.grayScale.S0};
    border-radius: 50%;
    position: relative;
    width: 16px;
    height: 16px;
    margin-left: 8px;
    &:before {
        content: '';
        display: block;
        border-top: solid 1px
            ${props => props.theme.colors.utilities.red.default};
        border-right: transparent;
        border-left: transparent;
        border-bottom: transparent;
        transform: rotate(45deg);
        border-width: 2px;
        border-radius: 2px;
        width: 10px;
        position: absolute;
        top: 7px;
        left: 3px;
    }
    &:after {
        content: '';
        display: block;
        border-top: solid 1px
            ${props => props.theme.colors.utilities.red.default};
        border-right: transparent;
        border-left: transparent;
        border-bottom: transparent;
        transform: rotate(135deg);
        border-width: 2px;
        border-radius: 2px;
        width: 10px;
        position: absolute;
        top: 7px;
        left: 3px;
    }
`

type InterTextType = { disabled?: boolean }
const InnerText = styled.div<InterTextType>`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.colors.primary.N95};
    color: ${props =>
        props.disabled
            ? props.theme.colors.grayScale.S50
            : props.theme.colors.primary.default};
    padding: 4px 8px;
    margin: 2px 4px 2px 0;
    border-radius: 20px;
    font-weight: bold;
    line-height: 1;
`

const SelectorInput = styled.div`
    padding-right: 4px;
    width: calc(100% - 28px);
    transition: border-color 0.15s;
    outline: 0;
    &.focused {
        border-color: ${props =>
            props.theme.colors.utilities.highlightGreen.default};
    }
`

const Input = styled.input`
    width: 100%;
    border: none;
    background: none;
    &:focus {
        outline: 0;
    }
`
