import * as React from 'react'
import styled from '~/modules/theme'

import * as IconFiles from '~/lib/iconFiles'
import * as Icon from '~/components/Icon'
import * as Menu from './Menu'

/**
 * Component
 */

type Props = {
    items: Menu.Item[]
    values: Menu.Value[]
    onClick: (e: React.MouseEvent) => void
    placeholder?: string
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
        isError,
        diff,
        width,
        items,
        values,
        placeholder,
        // TODO: filter実装
        // searchValue,
        // onKeydown,
        // onChangeSearchValue,
        onClickIcon,
        onClick
    } = props
    // TODO: filter実装
    // const inputRef = React.useRef<HTMLInputElement | null>(null)
    // React.useEffect(() => {
    //     if (inputRef.current && isMenuVisible) inputRef.current.focus()
    // }, [isMenuVisible])

    return (
        <>
            <Body
                data-test="body"
                isMenuVisible={isMenuVisible}
                isError={isError}
                diff={diff}
                width={width}
                onClick={onClick}
            >
                <SelectedItems data-test="selectedItems">
                    {showSelectedItems({
                        items,
                        values,
                        placeholder
                    })}
                </SelectedItems>
                {/* TODO: filter実装 */}
                {/* {props.isMenuVisible && (
                    <SelectorInput>
                        <Input
                            data-test="input"
                            type="text"
                            value={searchValue}
                            onChange={onChangeSearchValue}
                            ref={inputRef}
                            onKeyDown={onKeydown}
                        />
                    </SelectorInput>
                )} */}
            </Body>
            <IconWrap onClick={onClickIcon}>
                <DropdownIcon
                    className={isMenuVisible ? 'visible' : ''}
                    svg={IconFiles.icons.DropdownOff}
                    size="24px"
                />
            </IconWrap>
        </>
    )
})

const showSelectedItems = ({
    items,
    values,
    placeholder
}: {
    items: Menu.Item[]
    values: Menu.Value[]
    placeholder?: string
    onClickRemove?: (value: Menu.Value) => void
}): React.ReactElement | string => {
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

/**
 * Styles
 */
const IconWrap = styled.div`
    cursor: pointer;
`

const DropdownIcon = styled(Icon.Component)`
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    transition: 0.2s;
    &.visible {
        transform: translateY(-50%) rotate(180deg);
    }
`

type BodyType = {
    isMenuVisible?: boolean
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
    cursor: pointer;

    background-color: ${props =>
        props.diff ? props.theme.colors.utilities.paleYellow : 'inherit'};
`

const SelectedItems = styled.div`
    padding: 4px 4px 4px 0;
    width: calc(100% - 28px);
    max-height: 110px;
    overflow-y: scroll;
`

const InnerText = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.colors.primary.N95};
    color: ${props => props.theme.colors.primary.default};
    padding: 6.5px 8px;
    margin: 4px 8px 4px 0px;
    border-radius: 20px;
    font-weight: bold;
    line-height: 1;
`

// const SelectorInput = styled.div`
//     margin: 4px;
//     width: calc(100% - 28px);
//     transition: border-color 0.15s;
//     outline: 0;
//     &.focused {
//         border-color: ${props =>
//             props.theme.colors.utilities.highlightGreen.default};
//     }
// `

// const Input = styled.input`
//     width: 100%;
//     border: none;
//     background: none;
//     &:focus {
//         outline: 0;
//     }
// `
