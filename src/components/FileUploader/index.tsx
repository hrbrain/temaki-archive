import * as React from 'react'
import * as Theme from '~/modules/theme'
import * as ReactDropzone from 'react-dropzone'

import * as IconFiles from '~/lib/iconFiles'
import * as Icon from '~/components/Icon'
import * as ErrorMessage from '~/components/lib/FormErrorMessage'

/**
 * Utils
 */
const styled = Theme.default

const iconSize = '24px'

/**
 * Props
 */
type Props = {
    onChange?: (file: File | null) => void
    fileName: string | null
    accept?: string
    width?: string
    className?: string
    errored?: boolean
    errorMessage?: string
}

/**
 * Component
 */

export const Component = React.memo<Props>(props => {
    const onDrop = React.useCallback(
        (files: File[]) => {
            const file = files[0]
            if (!file) return

            props.onChange && props.onChange(file)
        },
        [props.onChange]
    )
    const dropzone = ReactDropzone.useDropzone({ onDrop, accept: props.accept })
    const remove = React.useCallback(
        (e: React.MouseEvent) => {
            e.stopPropagation()
            props.onChange && props.onChange(null)
        },
        [props.onChange]
    )

    return (
        <Wrap
            {...dropzone.getRootProps({
                width: props.width,
                className: props.className
            })}
        >
            <FileBox errored={props.errored}>
                <Input {...dropzone.getInputProps()} />
                <FileItems>
                    {props.fileName ? (
                        <>
                            <FileIcon
                                svg={IconFiles.icons.Attachment}
                                size={iconSize}
                            />
                            <FileLabel>{props.fileName}</FileLabel>
                            {renderRemoveButton(remove)}
                        </>
                    ) : (
                        <>
                            <FileIcon
                                svg={IconFiles.icons.Dragdrop}
                                size={iconSize}
                            />
                            <FileLabel>
                                ファイルを選択またはドラッグ&ドロップ
                            </FileLabel>
                        </>
                    )}
                </FileItems>
            </FileBox>
            <ErrorMessage.Component
                message={props.errorMessage}
                errored={props.errored}
            />
        </Wrap>
    )
})

function renderRemoveButton(onClick: (e: React.MouseEvent) => void) {
    return (
        <Theme.ThemeConsumer>
            {color => (
                <RemoveButton onClick={onClick}>
                    <Icon.Component
                        svg={IconFiles.icons.Remove}
                        size="24px"
                        color={color.colors.utilities.red.default}
                    />
                </RemoveButton>
            )}
        </Theme.ThemeConsumer>
    )
}

/**
 * Styles
 */
const Wrap = styled.div<{ width?: string }>`
    position: relative;
    width: ${props => (props.width ? props.width : '100%')};
`
const FileBox = styled.div<{ errored?: boolean }>`
    cursor: pointer;
    text-align: center;
    height: 40px;
    padding: 0 44px 0 16px;
    border-radius: 6px;
    border: 1px dashed
        ${props =>
            props.errored
                ? props.theme.colors.utilities.red.default
                : props.theme.colors.primary.default};
    &.attach {
        border: 1px solid
            ${props =>
                props.errored
                    ? props.theme.colors.utilities.red.default
                    : props.theme.colors.primary.default};
    }
`
const FileItems = styled.div`
    cursor: pointer;
    display: inline-flex;
    line-height: 40px;
`
const FileIcon = styled(Icon.Component)`
    margin-top: 7px;
`
const FileLabel = styled.span`
    max-width: 248px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 13px;
    margin-left: 4px;
`
const Input = styled.input`
    display: none;
`
const RemoveButton = styled.div`
    position: absolute;
    width: 24px;
    height: 24px;
    top: 50%;
    right: 24px;
    cursor: pointer;
    transform: translateY(-50%);
`
