import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import * as Toast from './index'
import * as Actions from '@storybook/addon-actions'

storiesOf(`Components|Toast`, module)
    .add('default(info)', () => (
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
    ))
    .add('default(warning)', () => (
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
    ))
    .add('buttonless(info)', () => (
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
    ))
    .add('buttonless(warning)', () => (
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
    ))
    .add('buttonless(progress)', () => (
        <div className="m-10">
            <Toast.Component
                label={text('Label', 'ラベル')}
                text={text(
                    'アップロード処理中',
                    '状態が入ります状態が入ります'
                )}
                color="#333"
                type={'buttonless'}
                variant={'progress'}
            />
        </div>
    ))
