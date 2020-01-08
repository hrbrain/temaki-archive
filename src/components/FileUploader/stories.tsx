import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import * as Knobs from '@storybook/addon-knobs'
import * as React from 'react'

import * as FileUploader from './index'

storiesOf('components|FileUploader', module).add('all', () => {
    return (
        <div className="m-16">
            <div>
                <FileUploader.Component
                    onChange={action('onDrop')}
                    width={Knobs.text('width', '400px')}
                    fileName={null}
                    errored={Knobs.boolean('Error', false)}
                    errorMessage={Knobs.text('ErrorMessage', '')}
                />
            </div>
            <div className="mt-8">
                <FileUploader.Component
                    onChange={action('onDrop')}
                    fileName={Knobs.text('fileName', 'hoge.png')}
                    errored={Knobs.boolean('Error', false)}
                    errorMessage={Knobs.text('ErrorMessage', '')}
                />
            </div>
        </div>
    )
})
