import * as React from 'react'
import styled from '~/modules/theme'

import * as IconFiles from '~/lib/iconFiles'
import * as Icon from '~/components/Icon'
import * as ItemList from './itemList'

/**
 * Component
 */

type Props = {
    items: ItemList.Item[]
    values: ItemList.Value[]
    onClick: () => void
    placeholder?: string
    isError?: boolean
    width?: string
    isMenuVisible?: boolean
}

export const Component = React.memo<Props>(props => {
    return (
        <Body
            data-test="body"
            onClick={props.onClick}
            isMenuVisible={props.isMenuVisible}
            isError={props.isError}
            width={props.width}
        >
            <Text data-test="text">
                {showTextBySelected(
                    props.items,
                    props.values,
                    props.placeholder
                )}
            </Text>
            <DropDownIcon
                className={props.isMenuVisible ? 'visible' : ''}
                svg={IconFiles.icons.DropdownOff}
                size="24px"
            />
        </Body>
    )
})

const showTextBySelected = (
    items: ItemList.Item[],
    values: ItemList.Value[],
    placeholder?: string
): React.ReactElement | string => {
    if (values.length <= 0) {
        return placeholder || ''
    }
    return (
        <>
            {values.map((value, index) => {
                return renderText(value, index, items)
            })}
        </>
    )
}

const renderText = (value: string, key: number, items: ItemList.Item[]) => {
    const item = items.find(item => item.value === value)

    if (!item) {
        return ''
    }
    return <InnerText key={key}>{item.text}</InnerText>
}

/**
 * Styles
 */

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
    width?: string
}
const Body = styled.div<BodyType>`
    position: relative;
    ${props => (props.width ? `width: ${props.width};` : '')}
    display: flex;
    padding: 12px;
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

const InnerText = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.colors.primary.N95};
    padding: 0 4px;
    margin-right: 8px;
    margin-bottom: 8px;
`
