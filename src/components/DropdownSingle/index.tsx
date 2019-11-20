import * as React from 'react'

import * as ItemList from './ItemList'
import * as Default from './presentors/Default'
import * as Borderless from './presentors/Borderless'

/**
 * Component
 */

export type Item = ItemList.Item

export const designType = {
    default: 'default' as const,
    border_less: 'borderless' as const
}

type Props = {
    placeholder: string
    items: ItemList.Item[]
    selected: ItemList.Value
    isError: boolean
    width: number
    onClickItem: (value: ItemList.Value) => void
    type: typeof designType.default | typeof designType.border_less
    className?: string
    type?: DesignType
}

export const Component = React.memo<Props>(props => {
    switch (props.type) {
        case designType.border_less:
            return <Borderless.Component {...props}> </Borderless.Component>

        default:
            return <Default.Component {...props}> </Default.Component>
    }
    const [isVisible, setIsVisible] = React.useState(false)

    const handleClick = React.useCallback(() => {
        setIsVisible(!isVisible)
    }, [isVisible])

    return (
        <div className={props.className}>
            <Body.Component
                type={type}
                placeholder={props.placeholder}
                items={props.items}
                selected={props.selected}
                isError={props.isError}
                width={props.width}
                isVisible={isVisible}
                handleClick={handleClick}
            />
            <StyledItemList
                items={props.items}
                selected={props.selected}
                onClickItem={props.onClickItem}
                width={props.width}
                isVisible={isVisible}
            />
        </div>
    )
})

Component.displayName = 'DropdownSingle'
