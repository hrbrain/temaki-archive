import * as Actions from '@storybook/addon-actions'
import * as Knobs from '@storybook/addon-knobs'
import * as React from 'react'
import * as Modal from './index'

export default {
    title: 'Components/Modal'
}

export const All = () => {
    return (
        <div className="m-10">
            <Modal.Component
                isOpen={Knobs.boolean('isOpen', true)}
                title={Knobs.text('title', 'ロール作成')}
                buttons={[
                    {
                        variant: 'box',
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
}
