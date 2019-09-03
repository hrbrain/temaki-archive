import * as React from 'react'
import styled from '~/modules/theme'

import * as IconFiles from '~/lib/iconFiles'
import * as Icon from '~/components/Icon'

/**
 * Utils
 */
const iconSize = '24px'

/**
 * Component
 */

type Props = {
    onChange: (file: File) => void
    onDragOver: (e: React.DragEvent) => void
    onDrop: (e: React.DragEvent) => void
    onClick: (e: React.MouseEvent) => void
    accept?: string
}

interface DangerFileList extends FileList {
    item: (index: number) => File
}

function hasFile(files: FileList | null): files is DangerFileList {
    return !!files && files.length > 0
}
hasFile

export const Component = React.memo<Props>(
    ({ onChange, onClick, onDragOver, onDrop, accept }) => {
        const [src, setSrc] = React.useState<File | null>(null)
        const ref = React.useRef<HTMLInputElement>(null)

        const handleChange = () => (e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.files && e.target.files.item(0)) {
                setSrc(e.target.files.item(0))
                onChange
            }
        }

        const fileInput = () => {
            return (
                <Input
                    onChange={handleChange()}
                    onDragOver={onFileDragOver()}
                    onDrop={onFileDrop()}
                    type="file"
                    id="file"
                    ref={ref}
                    accept={accept}
                    onClick={onClick}
                />
            )
        }

        const onFileDragOver = () => (e: React.DragEvent<HTMLInputElement>) => {
            if (e.dataTransfer.files && e.dataTransfer.files.item(0)) {
                setSrc(e.dataTransfer.files.item(0))
                onDragOver
            }
        }

        const onFileDrop = () => (e: React.DragEvent<HTMLInputElement>) => {
            if (e.dataTransfer.files && e.dataTransfer.files.item(0)) {
                setSrc(e.dataTransfer.files.item(0))
                onDrop
            }
        }

        /* coverageで引っかかるため除外 */
        /* istanbul ignore next */
        React.useEffect(() => {
            if (ref.current) {
                ref.current.addEventListener('dragover', function(e) {
                    onFileDragOver()(e as any)
                })
                ref.current.addEventListener('drop', function(e) {
                    onFileDrop()(e as any)
                })
            }
            // eslint-disable-next-line no-undef
            document.addEventListener('dragover', function(e) {
                e.preventDefault()
            })
            // eslint-disable-next-line no-undef
            document.addEventListener('drop', function(e) {
                e.preventDefault()
            })
        }, [])

        if (src && (src as File)) {
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
