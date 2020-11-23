import * as React from 'react'
import styled from '~/modules/theme'

import * as Menu from './Menu'

export type Item = Menu.Item
export type Props = {
    className?: string
    items: Menu.Item[]
    selectedValues: string[]
    width?: string
    onClickItem: (value: Menu.Value) => void
}

export const Component = React.memo<Props>(props => {
    return (
        <Wrap className={props.className} width={props.width}>
            <Menu.Component
                items={props.items}
                selectedValues={props.selectedValues}
                onClickItem={props.onClickItem}
            />
        </Wrap>
    )
})

Component.displayName = 'DropdownMultipleHierarchy'

const Wrap = styled.div<{ width?: string }>`
    width: ${props => props.width || '100%'};
`
