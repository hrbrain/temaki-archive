import * as React from 'react'
import styled from '~/modules/theme'

import * as IconFiles from '~/lib/iconFiles'
import * as Icon from '~/components/Icon'
import * as Menu from './Menu'
import * as Theme from '../../modules/theme'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------

type Props = {
    items: Menu.Item[]
    values: Menu.Value[]
    onClick: (e: React.MouseEvent) => void
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
    const inputRef = React.useRef<HTMLInputElement | null>(null)
    React.useEffect(() => {
        if (inputRef.current && props.isMenuVisible) inputRef.current.focus()
    }, [props.isMenuVisible])

    const svg = props.disabled
        ? IconFiles.icons.DropdownOffDisabled
        : IconFiles.icons.DropdownOff

    return (
        <>
            <Body
                data-test="body"
                disabled={props.disabled}
                isMenuVisible={props.isMenuVisible}
                isError={props.isError}
                diff={props.diff}
                width={props.width}
                onClick={props.onClick}
            >
                <SelectedItems
                    data-test="selectedItems"
                    disabled={props.disabled}
                >
                    {showSelectedItems(
                        props.items,
                        props.values,
                        props.placeholder
                    )}
                </SelectedItems>
                {props.isMenuVisible && (
                    <SelectorInput>
                        <Input
                            data-test="input"
                            type="text"
                            value={props.searchValue}
                            onChange={props.onChangeSearchValue}
                            ref={inputRef}
                            onKeyDown={props.onKeydown}
                        />
                    </SelectorInput>
                )}
            </Body>
            <IconWrap onClick={props.onClickIcon}>
                <DropdownIcon
                    className={props.isMenuVisible ? 'visible' : ''}
                    disabled={props.disabled}
                    svg={svg}
                    size="24px"
                />
            </IconWrap>
        </>
    )
})

const showSelectedItems = (
    items: Menu.Item[],
    values: Menu.Value[],
    placeholder?: string
): React.ReactElement | string => {
    if (values.length <= 0) {
        return placeholder || ''
    }
    return (
        <>
            {values.map((value, index) => {
                return renderItem(value, index, items)
            })}
        </>
    )
}

const renderItem = (value: Menu.Value, index: number, items: Menu.Item[]) => {
    const item = findItem(items, value)

    if (!item) {
        throw new Error(`Items don't have the value`)
    }
    return <InnerText key={`${value}-${index}`}>{item.label}</InnerText>
}

const findItem = (
    items: Menu.Item[],
    value: Menu.Value
): Menu.Item | undefined => {
    for (const item of items) {
        if (item === undefined) continue

        if (item.value === value) {
            return item
        }

        if (item.children !== undefined) {
            const result = findItem(item.children, value)
            if (result !== undefined) {
                return result
            }
        }
    }
    return undefined
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
    ${props => (props.width ? `width: ${props.width};` : '')}
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 12px;
    border: 1px solid
        ${props => {
            if (props.isError) {
                return props.theme.colors.utilities.red.default
            }
            if (props.isMenuVisible) {
                return props.theme.colors.utilities.highlightGreen.default
            }
            return props.theme.colors.grayScale.S10
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

type SelectedItemsType = { disabled?: boolean }
const SelectedItems = styled.div<SelectedItemsType>`
    padding: 4px 4px 4px 0;
    width: calc(100% - 28px);
    max-height: 110px;
    overflow-y: scroll;
    color: ${props =>
        props.disabled
            ? props.theme.colors.grayScale.S50
            : props.theme.colors.primary.default};
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
    padding: 6.5px 8px;
    margin: 4px 8px 4px 0px;
    border-radius: 20px;
    font-weight: bold;
    line-height: 1;
`

const SelectorInput = styled.div`
    margin: 4px;
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
