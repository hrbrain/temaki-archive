import * as React from 'react'
import styled, { css } from '~/modules/theme'
import * as ReactRouterDom from 'react-router-dom'

import * as Container from '../container'

//------------------------------------------------------------------------------
// component
//------------------------------------------------------------------------------

export const Component = (props: Container.LinkProps) => {
    const { className, items, itemsWidth, ...restProps } = props
    return (
        <div className={className}>
            {items.map((item, index) => (
                <Item
                    data-test={`link-item${index}`}
                    to={item.to}
                    key={index}
                    activeClassName="selected"
                    itemWidth={itemsWidth}
                    {...restProps}
                >
                    {item.text}
                </Item>
            ))}
        </div>
    )
}

//------------------------------------------------------------------------------
// styles
//------------------------------------------------------------------------------
const style = css<{ itemWidth?: Container.CommonProps['itemsWidth'] }>`
    ${() => Container.commonStyle}

    &.selected {
        ${() => Container.selectedStyle}
    }
`

const Item = styled(ReactRouterDom.NavLink)`
    ${style}
`
