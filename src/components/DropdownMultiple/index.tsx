import * as React from 'react'
import styled from '~/modules/theme'

import * as Body from './body'
import * as ItemList from './itemList'

/**
 * Component
 */

type Props = {
    placeholder: string
    items: ItemList.Item[]
    selected: string[]
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
        <div>
            <Body.Component
                {...props}
                isVisible={isVisible}
                handleClick={handleClick}
            />
            <StyledItemList {...props} isVisible={isVisible} />
        </div>
    )
})

Component.displayName = 'DropdownSingle'

export { Component }

/**
 * Styles
 */

const StyledItemList = styled(ItemList.Component)<{ width: number }>`
    position: absolute;
    margin-top: 4px;
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
