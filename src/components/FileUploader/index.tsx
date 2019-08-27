import * as React from 'react'
import styled from '~/modules/theme'

import * as IconFiles from '~/lib/iconFiles'
import * as Icon from '~/components/Icon'
import { file } from '@babel/types'

/**
 * Utils
 */
const iconSize = '24px'

/**
 * Component
 */

type Props = {
    onChange: (file: File) => void
    onDrop: (file: File) => void
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
export const Component = React.memo<Props>(({ onChange, onClick, accept }) => {
    const [src, setSrc] = React.useState<File | null>(null)
    const ref = React.useRef<HTMLInputElement>(null)

    const handleChange = () => (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.item(0)) {
            setSrc(e.target.files.item(0))
            onChange
        }
    }

    /**
     *  D&D
     */

    const onDragOver = () => (e: React.DragEvent<HTMLInputElement>) => {
        if (e.dataTransfer.files.item(0)) {
            setSrc(e.dataTransfer.files.item(0))
        }
    }

    const onFileDrop = () => (e: React.DragEvent<HTMLInputElement>) => {
        if (e.dataTransfer.files.item(0)) {
            setSrc(e.dataTransfer.files.item(0))
        }
    }

    React.useEffect(() => {
        // eslint-disable-next-line no-undef
        document.addEventListener('dragover', function(e) {
            e.preventDefault()
            onDragOver()(e as any)
        })
        // eslint-disable-next-line no-undef
        document.addEventListener('drop', function(e) {
            e.preventDefault()
            onFileDrop()(e as any)
        })
    }, [])

    if (src) {
        return (
            <label htmlFor="file">
                <FileBox className="attach">
                    <Input
                        onChange={handleChange()}
                        type="file"
                        id="file"
                        ref={ref}
                        accept={accept}
                        onClick={onClick}
                    />
                    <FileItems>
                        <FileIcon
                            svg={IconFiles.icons.Attachment}
                            size={iconSize}
                        />
                        <FileLabel>{file.name}</FileLabel>
                    </FileItems>
                </FileBox>
            </label>
        )
    }
    return (
        <label htmlFor="file">
            <FileBox>
                <Input
                    onChange={handleChange()}
                    type="file"
                    id="file"
                    ref={ref}
                    accept={accept}
                    onClick={onClick}
                />
                <FileItems>
                    <FileIcon svg={IconFiles.icons.Dragdrop} size={iconSize} />
                    <FileLabel>
                        ファイルを選択またはドラッグ&amp;ドロップ
                    </FileLabel>
                </FileItems>
            </FileBox>
        </label>
    )
})

/**
 * Styles
 */
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
    font-size: 13px;
    margin-left: 4px;
`
const Input = styled.input`
    display: none;
`
