import * as React from 'react'
import styled from '~/modules/theme'

import * as Body from './body'
import * as ItemList from './ItemList'

/**
 * Component
 */

type Props = {
    placeholder: string
    items: ItemList.Item[]
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
            <Body.Component
                {...props}
                isVisible={isVisible}
                handleClick={handleClick}
            />
            <StyledItemList {...props} isVisible={isVisible} />
        </Outer>
    )
})

Component.displayName = 'DropdownSingle'

export { Component }

/**
 * Styles
 */

const Outer = styled.div<{ width: number }>`
    display: inline-block;
    width: ${props => props.width}px;
    max-width: 262px;
`
export const StyledItemList = styled(ItemList.Component)<{ width: number }>`
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
