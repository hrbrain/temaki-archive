import * as React from 'react'
import styled from '~/modules/theme'

import * as Body from './body'
import * as ItemList from './itemList'

import * as ClickOutside from '~/modules/ClickOutside'
import * as ErrorMessage from '~/components/lib/FormErrorMessage'

/**
 * Component
 */

export type Item = ItemList.Item

type Props = {
    items: ItemList.Item[]
    values: ItemList.Value[]
    onChange: (value: ItemList.Value[]) => void
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

    const clickBody = React.useCallback(() => {
        setIsMenuVisible(!isMenuVisible)
    }, [isMenuVisible])

    const clickOutside = React.useCallback(() => {
        setIsMenuVisible(false)
    }, [isMenuVisible])

    const changeValue = React.useCallback(
        (value: ItemList.Value) => {
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
                        searchValue={searchValue}
                    />
                    <StyledItemList
                        isVisible={isMenuVisible}
                        items={props.items}
                        onClickItem={changeValue}
                        value={searchValue}
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

Component.displayName = 'DropdownSingle'

/**
 * Styles
 */

const Wrap = styled.div<{ width?: string }>`
    width: ${props => props.width || '100%'};
`

const Inner = styled.div`
    position: relative;
`

const StyledItemList = styled(ItemList.Component)<{ isVisible?: boolean }>`
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
