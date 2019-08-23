import { storiesOf } from '@storybook/react'
import * as React from 'react'

import * as FileUploader from './index'
import { action } from '@storybook/addon-actions'

storiesOf('components|FileUploader', module).add('all', () => {
    return (
        <div className="m-10">
            <FileUploader.Component
                FileUpload={action('file')}
                onClick={action('onClick')}
            />
        </div>
    )
})
