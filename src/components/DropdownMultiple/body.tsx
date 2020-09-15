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
    onClick: (e: React.MouseEvent) => void
    onClickRemove?: (index: number) => void
    hasRemove?: boolean
    placeholder?: string
    isError?: boolean
    diff?: boolean
    width?: string
    isMenuVisible?: boolean
    searchValue: string
    onChangeSearchValue: (event: React.ChangeEvent<HTMLInputElement>) => void
    onKeydown: (event: React.KeyboardEvent) => void
    onClickIcon: (event: React.MouseEvent) => void
}

export const Component = React.memo<Props>(props => {
    const {
        isMenuVisible,
        isError,
        diff,
        width,
        items,
        values,
        placeholder,
        hasRemove,
        searchValue,
        onKeydown,
        onChangeSearchValue,
        onClickIcon,
        onClickRemove,
        onClick
    } = props
    const inputRef = React.useRef<HTMLInputElement | null>(null)
    React.useEffect(() => {
        if (inputRef.current && isMenuVisible) inputRef.current.focus()
    }, [isMenuVisible])

    return (
        <>
            <Body
                data-test="body"
                isMenuVisible={isMenuVisible}
                isError={isError}
                diff={diff}
                width={width}
                onClick={onClick}
            >
                {props.isMenuVisible ? (
                    <SelectorInput>
                        {showTextBySelected({
                            items,
                            values,
                            placeholder,
                            hasRemove,
                            onClickRemove
                        })}
                        <Input
                            data-test="input"
                            type="text"
                            value={searchValue}
                            onChange={onChangeSearchValue}
                            ref={inputRef}
                            onKeyDown={onKeydown}
                        />
                    </SelectorInput>
                ) : (
                    <Text data-test="text">
                        {showTextBySelected({
                            items,
                            values,
                            placeholder,
                            hasRemove,
                            onClickRemove
                        })}
                    </Text>
                )}
            </Body>
            <IconWrap onClick={onClickIcon}>
                <DropdownIcon
                    className={isMenuVisible ? 'visible' : ''}
                    svg={IconFiles.icons.DropdownOff}
                    size="24px"
                />
            </IconWrap>
        </>
    )
})

const showTextBySelected = ({
    items,
    values,
    placeholder,
    hasRemove,
    onClickRemove
}: {
    items: ItemList.Item[]
    values: ItemList.Value[]
    placeholder?: string
    hasRemove?: boolean
    onClickRemove?: (index: number) => void
}): React.ReactElement | string => {
    if (values.length <= 0) {
        return placeholder || ''
    }
    return (
        <>
            {values.map((value, index) => {
                return renderText(value, index, items, hasRemove, onClickRemove)
            })}
        </>
    )
}

const renderText = (
    value: string,
    index: number,
    items: ItemList.Item[],
    hasRemove?: boolean,
    onClickRemove?: (index: number) => void
) => {
    const item = items.find(item => item.value === value)

    if (!item) {
        throw new Error(`Items don't have the value`)
    }
    const onClick = (index: number) => () => {
        onClickRemove && onClickRemove(index)
    }
    return (
        <InnerText key={`${value}-${index}`}>
            {item.text}
            {hasRemove && <Remove onClick={onClick(index)} />}
        </InnerText>
    )
}

/**
 * Styles
 */
const IconWrap = styled.div`
    cursor: pointer;
`

const DropdownIcon = styled(Icon.Component)`
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
    diff?: boolean
    width?: string
}
const Body = styled.div<BodyType>`
    min-height: 40px;
    position: relative;
    ${props => (props.width ? `width: ${props.width};` : '')}
    display: flex;
    align-items: center;
    padding: 0px 12px;
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

    background-color: ${props =>
        props.diff ? props.theme.colors.utilities.paleYellow : 'inherit'};
`

const Text = styled.div`
    padding: 4px 4px 4px 0;
    width: calc(100% - 28px);
`

const Remove = styled.div`
    display: block;
    cursor: pointer;
    background: ${props => props.theme.colors.grayScale.S0};
    border-radius: 50%;
    position: relative;
    width: 16px;
    height: 16px;
    margin-left: 8px;
}
    &:before {
        content: '';
        display: block;
        border-top: solid 1px
            ${props => props.theme.colors.utilities.red.default};
        border-right: transparent;
        border-left: transparent;
        border-bottom: transparent;
        transform: rotate(45deg);
        border-width: 2px;
        border-radius: 2px;
        width: 10px;
        position: absolute;
        top: 7px;
        left: 3px;
    }
    &:after {
        content: '';
        display: block;
        border-top: solid 1px
            ${props => props.theme.colors.utilities.red.default};
        border-right: transparent;
        border-left: transparent;
        border-bottom: transparent;
        transform: rotate(135deg);
        border-width: 2px;
        border-radius: 2px;
        width: 10px;
        position: absolute;
        top: 7px;
        left: 3px;
    }
`
const InnerText = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.colors.primary.N95};
    color: ${props => props.theme.colors.primary.default};
    padding: 6.5px 8px;
    margin: 4px 8px 4px 0px;
    border-radius: 20px;
    font-weight: bold;
    line-height: 1;
`

const SelectorInput = styled.div`
    padding-right: 4px;
    width: calc(100% - 28px);
    transition: border-color 0.15s;
    outline: 0;
    &.focused {
        border-color: ${props =>
            props.theme.colors.utilities.highlightGreen.default};
    }
`

const Input = styled.input`
    width: 100%;
    border: none;
    background: none;
    &:focus {
        outline: 0;
    }
`
