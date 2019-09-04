import { storiesOf } from '@storybook/react'
import * as React from 'react'

import * as FileUploader from './index'
import { action } from '@storybook/addon-actions'

storiesOf('components|FileUploader', module).add('all', () => {
    return (
        <div className="m-10">
            <FileUploader.Component
                onChange={action('onChange')}
                onDragOver={action('onDragOver')}
                onDrop={action('onDrop')}
                onClick={action('onClick')}
            />
        </div>
    )
})
