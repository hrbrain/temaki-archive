import * as React from 'react'
import { css } from '~/modules/theme'

import * as Default from './presenters/Default'
import * as Link from './presenters/Link'

//------------------------------------------------------------------------------
// setups
//------------------------------------------------------------------------------

type Types = {
    /**
     * divにonClickで処理をする
     */
    default: 'default'

    /**
     * react-router-domのNavLinkを利用する
     */
    link: 'link'
}

//------------------------------------------------------------------------------
// props
//------------------------------------------------------------------------------

export type CommonProps = {
    className?: string
    itemsWidth?: string
}

export type DefaultComponentItem = {
    text: string
}

export type LinkComponentItem = {
    text: string
    to: string
}

export type DefaultProps = CommonProps & {
    type?: Types['default']
    items: DefaultComponentItem[]
    selectedIndex: number
    onClickTab: (index: number) => void
}

export type LinkProps = CommonProps & {
    type?: Types['link']
    items: LinkComponentItem[]
}

type Props = DefaultProps | LinkProps

//------------------------------------------------------------------------------
// component
//------------------------------------------------------------------------------

export const Component = React.memo<Props>(props => {
    switch (props.type) {
        case 'link':
            return <Link.Component {...props} />

        case 'default':
            return <Default.Component {...props} />

        default:
            return <Default.Component {...(props as DefaultProps)} />
    }
})

//------------------------------------------------------------------------------
// displayName
//------------------------------------------------------------------------------

Component.displayName = 'SegmentedControl'

//------------------------------------------------------------------------------
// styles
//------------------------------------------------------------------------------

export const commonStyle = css<{
    itemWidth?: CommonProps['itemsWidth']
}>`
    color: ${props => props.theme.colors.primary.default};
    background: ${props => props.theme.colors.grayScale.S0};
    transition: 0.2s;
    display: inline-flex;
    text-align: center;
    padding-left: 12px;
    padding-right: 12px;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    text-decoration: none;
    border: 1px solid ${props => props.theme.colors.primary.default};
    border-right: 0;
    border-collapse: collapse;
    user-select: none;
    cursor: pointer;
    width: ${props => props.itemWidth || '100%'};
    justify-content: center;
    align-items: center;

    &:first-child {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
    }

    &:last-child {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
        border-right: 1px solid ${props => props.theme.colors.primary.default};
    }
`

export const selectedStyle = css`
    background: ${props => props.theme.colors.primary.default};
    color: ${props => props.theme.colors.grayScale.S0};
`
