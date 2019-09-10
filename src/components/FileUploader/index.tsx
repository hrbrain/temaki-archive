import * as React from 'react'
import styled from '~/modules/theme'

import * as IconFiles from '~/lib/iconFiles'
import * as Icon from '~/components/Icon'

/**
 * Utils
 */
const iconSize = '24px'

/**
 * Props
 */

type Props = {
    onChange: (file: File) => void
    onClick: (e: React.MouseEvent) => void
    onDragOver: (file: File) => void
    onDrop: (file: File) => void
    accept?: string
}

/**
 * Component
 */

const onFileDragOver = (
    setSrc: (value: File | null) => void,
    onDragOver: (file: File) => void
) => (e: React.DragEvent) => {
    const file = e.dataTransfer.files.item(0)
    setSrc(file)
    if (file) {
        onDragOver(file)
    }
}

const onFileDrop = (
    setSrc: (value: File | null) => void,
    onDrop: (file: File) => void
) => (e: React.DragEvent) => {
    const file = e.dataTransfer.files.item(0)
    setSrc(file)
    if (file) {
        onDrop(file)
    }
}

const handleChange = (
    setSrc: (value: File | null) => void,
    onChange: (file: File) => void
) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
        const file = e.target.files.item(0)
        setSrc(file)
        if (file) {
            onChange(file)
        }
    }
}

export const Component = React.memo<Props>(
    ({ onChange, onDragOver, onDrop, accept, onClick }) => {
        const [src, setSrc] = React.useState<File | null>(null)
        const ref = React.useRef<HTMLInputElement>(null)

        const fileInput = () => {
            return (
                <Input
                    onChange={handleChange(setSrc, onChange)}
                    type="file"
                    id="file"
                    ref={ref}
                    accept={accept}
                    onClick={onClick}
                />
            )
        }

        /* istanbul ignore next */
        React.useEffect(() => {
            if (ref.current) {
                ref.current.addEventListener('dragover', function(e) {
                    e.preventDefault()
                    e.stopPropagation()
                    onFileDragOver(setSrc, onDragOver)(e as any)
                })
                ref.current.addEventListener('drop', function(e) {
                    e.preventDefault()
                    e.stopPropagation()
                    onFileDrop(setSrc, onDrop)(e as any)
                })
            }
            return () => {
                if (ref.current) {
                    ref.current.removeEventListener('dragover', function(e) {
                        e.preventDefault()
                        e.stopPropagation()
                        onFileDragOver(setSrc, onDragOver)(e as any)
                    })
                    ref.current.removeEventListener('drop', function(e) {
                        e.preventDefault()
                        e.stopPropagation()
                        onFileDrop(setSrc, onDrop)(e as any)
                    })
                }
            }
        }, [setSrc])

        if (src) {
            return (
                <Label htmlFor="file">
                    <FileBox ref={ref} className="attach" data-test="attach">
                        {fileInput()}
                        <FileItems>
                            <FileIcon
                                svg={IconFiles.icons.Attachment}
                                size={iconSize}
                            />
                            <FileLabel>{src.name}</FileLabel>
                        </FileItems>
                    </FileBox>
                </Label>
            )
        }
        return (
            <Label htmlFor="file">
                <FileBox ref={ref}>
                    {fileInput()}
                    <FileItems>
                        <FileIcon
                            svg={IconFiles.icons.Dragdrop}
                            size={iconSize}
                        />
                        <FileLabel>
                            ファイルを選択またはドラッグ&amp;ドロップ
                        </FileLabel>
                    </FileItems>
                </FileBox>
            </Label>
        )
    }
)

/**
 * Styles
 */
const Label = styled.label``
const FileBox = styled.div`
    cursor: pointer;
    text-align: center;
    width: 324px;
    height: 40px;
    padding: 0 24px;
    border-radius: 6px;
    border: 1px dashed ${props => props.theme.colors.primary.default};
    border-width: bold;
    &.attach {
        border: 1px solid ${props => props.theme.colors.primary.default};
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
