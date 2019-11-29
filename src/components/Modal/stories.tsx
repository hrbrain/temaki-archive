// import { action } from '@storybook/addon-actions'
// import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import * as Modal from './index'

storiesOf('Components|Modal', module).add('all', () => {
    return (
        <div className="m-10">
            <Modal.Component
                title="ロール作成"
                buttons={[
                    {
                        type: 'box',
                        colorType: 'primary',
                        text: 'asdsad'
                    },
                    {
                        type: 'box',
                        colorType: 'primary',
                        text: 'asdsad222'
                    }
                ]}
            >
                adsasd
            </Modal.Component>
        </div>
    )
})
