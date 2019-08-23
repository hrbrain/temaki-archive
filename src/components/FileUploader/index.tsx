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
    FileUpload: (file: File) => void
    onClick: (e: React.MouseEvent) => void
}

interface DangerFileList extends FileList {
    item: (index: number) => File
}

function hasFile(files: FileList | null): files is DangerFileList {
    return !!files && files.length > 0
}
hasFile

export const Component = React.memo<Props>(({ FileUpload, onClick }) => {
    const [src, setSrc] = React.useState<File | null>()
    const handleChange = () => (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.item(0)) {
            setSrc(e.target.files.item(0))
            FileUpload
        } else {
            setSrc(null)
        }
    }

    if (src) {
        return (
            <FileBox className={'attach'}>
                <FileItems>
                    <FileIcon
                        svg={IconFiles.icons.Attachment}
                        size={iconSize}
                    />
                    <FileLabel>ファイル名</FileLabel>
                </FileItems>
            </FileBox>
        )
    }
    return (
        <FileBox>
            <FileItems onClick={onClick}>
                <FileIcon svg={IconFiles.icons.Dragdrop} size={iconSize} />
                <FileLabel>ファイルを選択またはドラッグ&amp;ドロップ</FileLabel>
                <Input onChange={handleChange} type="file" />
            </FileItems>
        </FileBox>
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
