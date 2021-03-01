import { text } from '@storybook/addon-knobs'
import * as React from 'react'
import * as Toast from './index'
import * as Actions from '@storybook/addon-actions'

export const DefaultInfo = () => (
    <div className="m-10">
        <Toast.Component
            label={text('Label', 'ラベル')}
            text={text(
                'Text',
                'メールアドレスまたはパスワードに誤りがあります。もう一度入力してください。'
            )}
            type={'default'}
            variant={'info'}
            onClickClose={Actions.action('onClickClose')}
        />
    </div>
)

DefaultInfo.story = {
    name: 'default(info)'
}

export const DefaultWarning = () => (
    <div className="m-10">
        <Toast.Component
            label={text('Label', 'ラベル')}
            text={text(
                'Text',
                'メールアドレスまたはパスワードに誤りがあります。もう一度入力してください。'
            )}
            type={'default'}
            variant={'warning'}
            onClickClose={Actions.action('onClickClose')}
        />
    </div>
)

DefaultWarning.story = {
    name: 'default(warning)'
}

export const ButtonlessInfo = () => (
    <div className="m-10">
        <Toast.Component
            label={text('Label', 'ラベル')}
            text={text(
                'Text',
                'メールアドレスまたはパスワードに誤りがあります。もう一度入力してください。'
            )}
            type={'buttonless'}
            variant={'info'}
        />
    </div>
)

ButtonlessInfo.story = {
    name: 'buttonless(info)'
}

export const ButtonlessWarning = () => (
    <div className="m-10">
        <Toast.Component
            label={text('Label', 'ラベル')}
            text={text(
                'Text',
                'メールアドレスまたはパスワードに誤りがあります。もう一度入力してください。'
            )}
            type={'buttonless'}
            variant={'warning'}
        />
    </div>
)

ButtonlessWarning.story = {
    name: 'buttonless(warning)'
}

export const ButtonlessProgress = () => (
    <div className="m-10">
        <Toast.Component
            label={text('Label', 'ラベル')}
            text={text('アップロード処理中', '状態が入ります状態が入ります')}
            type={'buttonless'}
            variant={'progress'}
        />
    </div>
)

ButtonlessProgress.story = {
    name: 'buttonless(progress)'
}
