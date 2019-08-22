import { text, number, select, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import * as DropdownSingle from './index'
import * as Body from './body'
import * as ItemList from './ItemList'

storiesOf('Components|DropdownSingle', module)
    .add('Single', () => (
        <div className="ml-20 mt-10">
            <DropdownSingle.Component
                placeholder={text('placeholder', '選択してください')}
                items={[
                    { text: 'りんご' },
                    { text: 'いちご' },
                    { text: 'バナナ' },
                    { text: 'メロン' },
                    { text: 'さくらんぼ' },
                    { text: 'ぶどう' }
                ]}
                selected={select(
                    'selected',
                    {
                        未選択時: '',
                        りんご: 'りんご',
                        いちご: 'いちご',
                        バナナ: 'バナナ',
                        メロン: 'メロン',
                        さくらんぼ: 'さくらんぼ',
                        ぶどう: 'ぶどう'
                    },
                    ''
                )}
                isError={boolean('isError', false)}
                width={number('width', 200)}
                onClickItem={action('text')}
            />
        </div>
    ))
    .add('Body', () => {
        return (
            <div className="ml-20 mt-10">
                <Body.Component
                    placeholder={text('placeholder', '選択してください')}
                    selected={select(
                        'selected',
                        {
                            未選択時: '',
                            りんご: 'りんご',
                            いちご: 'いちご',
                            バナナ: 'バナナ',
                            メロン: 'メロン',
                            さくらんぼ: 'さくらんぼ',
                            ぶどう: 'ぶどう'
                        },
                        ''
                    )}
                    isError={boolean('isError', false)}
                    width={number('width', 200)}
                    isVisible={boolean('isVisible', false)}
                />
            </div>
        )
    })
    .add('ItemList', () => {
        return (
            <div className="ml-20 mt-10">
                <ItemList.Component
                    items={[
                        { text: 'りんご' },
                        { text: 'いちご' },
                        { text: 'バナナ' },
                        { text: 'メロン' },
                        { text: 'さくらんぼ' },
                        { text: 'ぶどう' }
                    ]}
                    selected={select(
                        'selected',
                        {
                            未選択時: '',
                            りんご: 'りんご',
                            いちご: 'いちご',
                            バナナ: 'バナナ',
                            メロン: 'メロン',
                            さくらんぼ: 'さくらんぼ',
                            ぶどう: 'ぶどう'
                        },
                        ''
                    )}
                    onClickItem={action('text')}
                    isVisible={boolean('isVisible', false)}
                    width={number('width', 200)}
                />
            </div>
        )
    })
