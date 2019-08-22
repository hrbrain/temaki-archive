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
            <ItemList.ItemList {...props} isVisible={isVisible} />
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
