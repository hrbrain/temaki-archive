import * as Actions from '@storybook/addon-actions'
import * as Knobs from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import * as Modal from './index'

storiesOf('Components|Modal', module).add('all', () => {
    return (
        <div className="m-10">
            <Modal.Component
                isOpen={Knobs.boolean('isOpen', true)}
                title={Knobs.text('title', 'ロール作成')}
                buttons={[
                    {
                        type: 'box',
                        colorType: 'primary',
                        text: '登録'
                    }
                ]}
                onClose={Actions.action('onClose')}
            >
                コンテンツ
            </Modal.Component>
        </div>
    )
})
