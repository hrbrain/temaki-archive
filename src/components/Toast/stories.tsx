import { text, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import * as Toast from './index'
import * as Actions from '@storybook/addon-actions'

storiesOf(`Components|Toast`, module)
    .add('info', () => (
        <div className="m-10">
            <Toast.Component
                label={text('Label', 'ラベル')}
                text={text(
                    'Text',
                    'メールアドレスまたはパスワードに誤りがあります。もう一度入力してください。'
                )}
                type={select(
                    'Type',
                    {
                        info: 'info',
                        warning: 'warning'
                    },
                    'info'
                )}
                onClickClose={Actions.action('onClickClose')}
            />
        </div>
    ))
    .add('warning', () => (
        <div className="m-10">
            <Toast.Component
                label={text('Label', 'ラベル')}
                text={text(
                    'Text',
                    'メールアドレスまたはパスワードに誤りがあります。もう一度入力してください。'
                )}
                type={select(
                    'Type',
                    {
                        info: 'info',
                        warning: 'warning'
                    },
                    'warning'
                )}
                onClickClose={Actions.action('onClickClose')}
            />
        </div>
    ))
