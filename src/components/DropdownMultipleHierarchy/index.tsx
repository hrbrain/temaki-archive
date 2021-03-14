import * as React from 'react'
import styled, { css } from '~/modules/theme'

import * as Body from './Body'
import * as Menu from './Menu'
import * as SearchMenu from './SearchMenu'

import * as ClickOutside from '~/modules/ClickOutside'
import * as ErrorMessage from '~/components/lib/FormErrorMessage'

export type Item = Menu.Item
export type Props = {
    items: Menu.Item[]
    values: Menu.Value[]
    onChange: (value: Menu.Value[]) => void
    width?: string
    placeholder?: string
    disabled?: boolean
    isError?: boolean
    diff?: boolean
    defaultExpanded?: boolean
    className?: string
    errorMessage?: string
}

export const Component = React.memo<Props>(props => {
    const [isMenuVisible, setIsMenuVisible] = React.useState(
        props.defaultExpanded
    )

    const [searchValue, setSearchValue] = React.useState<string>('')

    const changeSearchValue = React.useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setSearchValue(event.target.value)
        },
        [searchValue]
    )

    const clickBody = React.useCallback((e: React.MouseEvent) => {
        e.preventDefault()
        setIsMenuVisible(true)
    }, [])

    const clickOutside = React.useCallback((e: React.MouseEvent<unknown>) => {
        e.preventDefault()
        setIsMenuVisible(false)
        setSearchValue('')
    }, [])

    const clickIcon = React.useCallback(
        (e: React.MouseEvent) => {
            e.preventDefault()
            setIsMenuVisible(!isMenuVisible)
        },
        [isMenuVisible]
    )

    // 通常のセレクトの場合、子要素も全て追加/削除される
    const changeValueByMenu = React.useCallback(
        (item: Menu.Item) => {
            if (props.values.includes(item.value)) {
                const newValues = removeValueWithChildren(props.values, item)
                props.onChange(newValues)
                return
            }

            const newValues = deduplicate([
                ...props.values,
                ...getValueArrWithChildren(item)
            ])
            props.onChange(newValues)
        },
        [props.values, props.onChange]
    )

    // 検索結果をセレクトした場合、選ばれた要素のみ追加/削除される
    const changeValueBySearchMenu = React.useCallback(
        (changedValue: SearchMenu.Value) => {
            if (props.values.includes(changedValue)) {
                const newValues = props.values.filter(v => v !== changedValue)
                props.onChange(newValues)
                return
            }

            const newValues = [...props.values, changedValue]
            props.onChange(newValues)
        },
        [props.values, props.onChange]
    )

    const filteredItems = React.useMemo<SearchMenu.Item[]>(() => {
        return searchItems(props.items, searchValue, [], false)
    }, [searchValue, props.items])

    const keyDownInInput = React.useCallback(
        (e: React.KeyboardEvent) => {
            if (e.keyCode === 8 && searchValue === '') {
                const slicedItem = props.values.slice(0, -1)
                props.onChange(slicedItem)
            }
        },
        [props.values, searchValue, props.onChange]
    )

    const isSearching = searchValue !== ''
    const noop = () => {}

    return (
        <Wrap className={props.className} width={props.width}>
            <Inner>
                <ClickOutside.Component
                    onClickOutside={clickOutside}
                    inactive={!isMenuVisible}
                >
                    <Body.Component
                        onClick={!props.disabled ? clickBody : noop}
                        items={props.items}
                        values={props.values}
                        placeholder={props.placeholder}
                        isMenuVisible={isMenuVisible}
                        diff={props.diff}
                        disabled={props.disabled}
                        isError={props.isError}
                        onChangeSearchValue={changeSearchValue}
                        searchValue={searchValue}
                        onKeydown={keyDownInInput}
                        onClickIcon={!props.disabled ? clickIcon : noop}
                    />
                    {isSearching ? (
                        <StyledSearchMenu
                            isVisible={isMenuVisible}
                            items={filteredItems}
                            selectedValues={props.values}
                            onClickItem={changeValueBySearchMenu}
                            searchValue={searchValue}
                        />
                    ) : (
                        <StyledMenu
                            isVisible={isMenuVisible}
                            items={props.items}
                            selectedValues={props.values}
                            onClickItem={changeValueByMenu}
                        />
                    )}
                </ClickOutside.Component>
            </Inner>
            <ErrorMessage.Component
                errored={props.isError}
                message={props.errorMessage}
            />
        </Wrap>
    )
})

const deduplicate = (arr: string[]) => Array.from(new Set(arr))

const getValueArrWithChildren = (item: Menu.Item) => {
    let resultArr: Menu.Value[] = []
    resultArr.push(item.value)

    if (item.children === undefined) return resultArr

    for (const child of item.children) {
        if (child.children === undefined) {
            resultArr.push(child.value)
            continue
        }

        resultArr = resultArr.concat(getValueArrWithChildren(child))
    }
    return resultArr
}

const removeValueWithChildren = (values: Menu.Value[], item: Menu.Item) => {
    let resultArr: Menu.Value[] = values
    resultArr = values.filter(value => value !== item.value)

    if (item.children === undefined) return resultArr

    for (const child of item.children) {
        if (child.children === undefined) {
            resultArr = resultArr.filter(value => value !== child.value)
            continue
        }

        resultArr = removeValueWithChildren(resultArr, child)
    }
    return resultArr
}

const searchItems = (
    items: Menu.Item[],
    searchValue: string,
    parents: string[],
    // ↓親階層がすでに検索に引っかかっているかどうか
    hasSearchValueInParents: boolean
): SearchMenu.Item[] => {
    let resultArr: SearchMenu.Item[] = []
    const isRoot = parents.length === 0

    for (const item of items) {
        const hasSearchValue =
            hasSearchValueInParents || item.label.indexOf(searchValue) > -1

        if (hasSearchValue) {
            const hierarchy = isRoot ? '' : parents.join(' > ')
            resultArr.push({
                label: item.label,
                value: item.value,
                hierarchy: hierarchy
            })
        }

        if (item.children !== undefined) {
            const newParents = [...parents, item.label]
            resultArr = resultArr.concat(
                searchItems(
                    item.children,
                    searchValue,
                    newParents,
                    hasSearchValue
                )
            )
        }
    }

    return resultArr
}

Component.displayName = 'DropdownMultipleHierarchy'

const Wrap = styled.div<{ width?: string }>`
    width: ${props => props.width || '100%'};
`

const Inner = styled.div`
    position: relative;
`

const staticMenuStyle = css`
    min-width: 100%;
    max-width: calc(24px + 28px + 420px);
    position: absolute;
    left: 0;
    margin-top: 4px;
    transform-origin: top;
    transition: 0.2s;
`

const StyledMenu = styled(Menu.Component)<{ isVisible?: boolean }>`
    ${staticMenuStyle}

    ${props =>
        props.isVisible
            ? `
        visibility: visible;
        transform: scaleY(1);
    `
            : `
        visibility: hidden;
        transform: scaleY(0);
    `}
`

const StyledSearchMenu = styled(SearchMenu.Component)<{ isVisible?: boolean }>`
    ${staticMenuStyle}

    ${props =>
        props.isVisible
            ? `
        visibility: visible;
        transform: scaleY(1);
    `
            : `
        visibility: hidden;
        transform: scaleY(0);
    `}
`
