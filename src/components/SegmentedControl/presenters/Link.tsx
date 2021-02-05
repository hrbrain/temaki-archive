import * as React from 'react'
import styled, { css } from '~/modules/theme'
import * as ReactRouterDom from 'react-router-dom'

import * as Container from '../container'

//------------------------------------------------------------------------------
// component
//------------------------------------------------------------------------------

export const Component = (props: Container.LinkProps) => {
    return (
        <div className={props.className}>
            {props.items.map((item, index) => (
                <Item
                    data-test={`item${index}`}
                    to={item.to}
                    key={index}
                    exact
                    activeClassName="selected"
                    itemWidth={props.itemsWidth}
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
