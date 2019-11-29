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
    borderless: 'borderless' as const
}

type Props = {
    placeholder: string
    items: ItemList.Item[]
    selected: ItemList.Value
    isError: boolean
    width: number
    onClickItem: (value: ItemList.Value) => void
    type: typeof designType.default | typeof designType.borderless
    className?: string
}

export const Component = React.memo<Props>(props => {
    const [isVisible, setIsVisible] = React.useState(false)

    const handleClick = React.useCallback(() => {
        setIsVisible(!isVisible)
    }, [isVisible])

    switch (props.type) {
        case designType.borderless:
            return (
                <Borderless.Component
                    placeholder={props.placeholder}
                    items={props.items}
                    selected={props.selected}
                    isError={props.isError}
                    width={props.width}
                    onClickItem={props.onClickItem}
                    isVisible={isVisible}
                    handleClick={handleClick}
                    showTextBySelected={showTextBySelected}
                    className={props.className}
                ></Borderless.Component>
            )
        case designType.default:
            return (
                <Default.Component
                    placeholder={props.placeholder}
                    items={props.items}
                    selected={props.selected}
                    isError={props.isError}
                    width={props.width}
                    onClickItem={props.onClickItem}
                    isVisible={isVisible}
                    handleClick={handleClick}
                    showTextBySelected={showTextBySelected}
                    className={props.className}
                ></Default.Component>
            )
        default:
            throw new Error()
    }
})

Component.displayName = 'DropdownSingle'

const showTextBySelected = (
    items: ItemList.Item[],
    selected: ItemList.Value,
    placeholder: string
): string => {
    const text = items.find(item => item.value === selected)
    if (text && text.text) {
        return text.text
    }
    return placeholder
}
