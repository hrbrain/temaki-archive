import * as React from 'react'
import styled from '~/modules/theme'

import * as Body from './body'
import * as ItemList from './itemList'

import * as ClickOutside from '~/modules/ClickOutside'

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
    defaultExpanded?: boolean
    className?: string
}

export const Component = React.memo<Props>(props => {
    const [isMenuVisible, setIsMenuVisible] = React.useState(
        props.defaultExpanded
    )
    const [valuesCache, setValuesCache] = React.useState<ItemList.Value[]>(
        props.values
    )

    React.useLayoutEffect(() => {
        setValuesCache(props.values)
    }, [props.values])

    const clickBody = React.useCallback(() => {
        setIsMenuVisible(!isMenuVisible)
    }, [isMenuVisible])

    const clickOutside = React.useCallback(() => {
        setIsMenuVisible(false)
    }, [isMenuVisible])

    const changeValue = React.useCallback(
        (value: ItemList.Value) => {
            if (valuesCache.includes(value)) {
                const newValues = valuesCache.filter(x => x !== value)
                setValuesCache(newValues)
                props.onChange(newValues)
            } else {
                const newValues = [...valuesCache, value]
                setValuesCache(newValues)
                props.onChange(newValues)
            }
        },
        [valuesCache, props.onChange]
    )

    return (
        <Wrap className={props.className} width={props.width}>
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
                    isError={props.isError}
                />
                <StyledItemList
                    isVisible={isMenuVisible}
                    items={props.items}
                    onClickItem={changeValue}
                    values={props.values}
                />
            </ClickOutside.Component>
        </Wrap>
    )
})

Component.displayName = 'DropdownSingle'

/**
 * Styles
 */

const Wrap = styled.div<{ width?: string }>`
    position: relative;
    ${props => props.width && `width: ${props.width};`}
`

const StyledItemList = styled(ItemList.Component)<{ isVisible?: boolean }>`
    width: 100%;
    position: absolute;
    left: 0;
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
