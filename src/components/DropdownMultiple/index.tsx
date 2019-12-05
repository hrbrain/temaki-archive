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
    onChange: (value: ItemList.Value) => void
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

    const clickBody = React.useCallback(() => {
        setIsMenuVisible(!isMenuVisible)
    }, [isMenuVisible])

    const clickOutside = React.useCallback(() => {
        setIsMenuVisible(false)
    }, [isMenuVisible])

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
                    onClickItem={props.onChange}
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
    width: ${props => props.width || '100%'};
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
