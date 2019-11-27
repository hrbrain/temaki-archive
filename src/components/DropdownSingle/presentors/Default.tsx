import * as React from 'react'
import styled from '~/modules/theme'

import * as IconFiles from '~/lib/iconFiles'
import * as Icon from '~/components/Icon'
import * as ItemList from '../ItemList'

/*
 * Component
 */
type Props = {
    items: ItemList.Item[]
    value: ItemList.Value
    onClick: () => void
    onClickMenuItem: (value: ItemList.Value) => void
    isError?: boolean
    isMenuVisible: boolean
    showTextBySelected: (
        items: ItemList.Item[],
        selected: ItemList.Value
    ) => string
    width?: string
    className?: string
}
export const Component = React.memo<Props>(props => {
    return (
        <Wrap width={props.width} className={props.className}>
            <Body
                data-test="body"
                isMenuVisible={props.isMenuVisible}
                isError={props.isError}
                onClick={props.onClick}
            >
                <Text data-test="text">
                    {props.showTextBySelected(props.items, props.value)}
                </Text>
                <DropDownIcon
                    className={props.isMenuVisible ? 'visible' : ''}
                    svg={IconFiles.icons.DropdownOff}
                    size="24px"
                />
            </Body>
            <StyledItemList
                value={props.value}
                onClickItem={props.onClickMenuItem}
                items={props.items}
                isVisible={props.isMenuVisible}
            />
        </Wrap>
    )
})

/**
 * Styles
 */

const Wrap = styled.div<{ width?: string }>`
    position: relative;
    width: ${props => props.width || '100%'};
`

const DropDownIcon = styled(Icon.Component)`
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    transition: 0.2s;
    &.visible {
        transform: translateY(-50%) rotate(180deg);
    }
`

type BodyType = {
    isMenuVisible?: boolean
    isError?: boolean
}

const Body = styled.div<BodyType>`
    min-height: 40px;
    display: flex;
    padding: 8px 12px;
    border: 1px solid
        ${props => {
            if (props.isError) {
                return props.theme.colors.utilities.red.default
            }
            if (props.isMenuVisible) {
                return props.theme.colors.utilities.highlightGreen.default
            }
            return props.theme.colors.grayScale.S10
        }};
    border-radius: 6px;
    user-select: none;
    font-size: 14px;
    cursor: pointer;
`

const Text = styled.div`
    padding-right: 4px;
`

const StyledItemList = styled(ItemList.Component)<{ isVisible: boolean }>`
    transform-origin: top;
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
