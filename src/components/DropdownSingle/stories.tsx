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
                    { value: '', text: '' },
                    { value: '1', text: 'りんご' },
                    { value: '2', text: 'いちご' },
                    { value: '3', text: 'バナナ' },
                    { value: '4', text: 'メロン' },
                    { value: '5', text: 'さくらんぼ' },
                    { value: '6', text: 'ぶどう' }
                ]}
                selected={select(
                    'selected',
                    {
                        未選択時: '',
                        りんご: '1',
                        いちご: '2',
                        バナナ: '3',
                        メロン: '4',
                        さくらんぼ: '5',
                        ぶどう: '6'
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
                    items={[
                        { value: '', text: '' },
                        { value: '1', text: 'りんご' },
                        { value: '2', text: 'いちご' },
                        { value: '3', text: 'バナナ' },
                        { value: '4', text: 'メロン' },
                        { value: '5', text: 'さくらんぼ' },
                        { value: '6', text: 'ぶどう' }
                    ]}
                    selected={select(
                        'selected',
                        {
                            未選択時: '',
                            りんご: '1',
                            いちご: '2',
                            バナナ: '3',
                            メロン: '4',
                            さくらんぼ: '5',
                            ぶどう: '6'
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
                        { value: '', text: '' },
                        { value: '1', text: 'りんご' },
                        { value: '2', text: 'いちご' },
                        { value: '3', text: 'バナナ' },
                        { value: '4', text: 'メロン' },
                        { value: '5', text: 'さくらんぼ' },
                        { value: '6', text: 'ぶどう' }
                    ]}
                    selected={select(
                        'selected',
                        {
                            未選択時: '',
                            りんご: '1',
                            いちご: '2',
                            バナナ: '3',
                            メロン: '4',
                            さくらんぼ: '5',
                            ぶどう: '6'
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
