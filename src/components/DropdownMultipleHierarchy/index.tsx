import * as React from 'react'
import styled from '~/modules/theme'

import * as Body from './Body'
import * as Menu from './Menu'

import * as ClickOutside from '~/modules/ClickOutside'
import * as ErrorMessage from '~/components/lib/FormErrorMessage'

export type Item = Menu.Item
export type Props = {
    items: Menu.Item[]
    values: Menu.Value[]
    onChange: (value: Menu.Value[]) => void
    onClickRemove?: (value: Menu.Value) => void
    width?: string
    placeholder?: string
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

    const changeValue = React.useCallback(
        (value: Menu.Value) => {
            if (props.values.includes(value)) {
                const newValues = props.values.filter(x => x !== value)
                props.onChange(newValues)
            } else {
                const newValues = [...props.values, value]
                props.onChange(newValues)
            }
        },
        [props.values, props.onChange]
    )

    // TODO: filter実装
    // const filteredItems = React.useMemo(() => {
    //     const items = props.items.filter(item =>
    //         item.label.includes(searchValue)
    //     )
    //     return items
    // }, [searchValue, props.items])

    const keyDownInInput = React.useCallback(
        (e: React.KeyboardEvent) => {
            if (e.keyCode === 8 && searchValue === '') {
                const slicedItem = props.values.slice(0, -1)
                props.onChange(slicedItem)
            }
        },
        [props.values, searchValue, props.onChange]
    )

    return (
        <Wrap className={props.className} width={props.width}>
            <Inner>
                <ClickOutside.Component
                    onClickOutside={clickOutside}
                    inactive={!isMenuVisible}
                >
                    <Body.Component
                        onClick={clickBody}
                        items={props.items}
                        values={props.values}
                        placeholder={props.placeholder}
                        isMenuVisible={isMenuVisible}
                        diff={props.diff}
                        isError={props.isError}
                        onChangeSearchValue={changeSearchValue}
                        onClickRemove={props.onClickRemove}
                        searchValue={searchValue}
                        onKeydown={keyDownInInput}
                        onClickIcon={clickIcon}
                    />
                    <StyledMenu
                        isVisible={isMenuVisible}
                        items={props.items}
                        selectedValues={props.values}
                        onClickItem={changeValue}
                    />
                </ClickOutside.Component>
            </Inner>
            <ErrorMessage.Component
                errored={props.isError}
                message={props.errorMessage}
            />
        </Wrap>
    )
})

Component.displayName = 'DropdownMultipleHierarchy'

const Wrap = styled.div<{ width?: string }>`
    width: ${props => props.width || '100%'};
`

const Inner = styled.div`
    position: relative;
`

const StyledMenu = styled(Menu.Component)<{ isVisible?: boolean }>`
    width: 100%;
    position: absolute;
    right: 0;
    margin-top: 4px;
    transform-origin: top;
    transition: 0.2s;

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
