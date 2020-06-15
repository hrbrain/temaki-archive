import { text, select, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import * as DropdownSingle from './index'
import * as ItemList from './ItemList'

storiesOf('Components|DropdownSingle', module)
    .add('Default', () => (
        <div className="ml-20 mt-10">
            <DropdownSingle.Component
                type={'default'}
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
                value={select(
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
                errorMessage={text('ErrorMessage', '')}
                width={text('width', '200px')}
                onChange={action('onChange')}
                diff={boolean('Diff', false)}
            />
        </div>
    ))
    .add('Borderless', () => {
        return (
            <div className="ml-20 mt-10">
                <DropdownSingle.Component
                    type={'borderless'}
                    placeholder={text('placeholder', '')}
                    items={[
                        { value: '20', text: '20' },
                        { value: '50', text: '50' },
                        { value: '100', text: '100' }
                    ]}
                    value={select(
                        'selected',
                        {
                            '20': '20',
                            '50': '50',
                            '100': '100'
                        },
                        '20'
                    )}
                    isError={boolean('isError', false)}
                    width={text('width', '250px')}
                    onChange={action('text')}
                    diff={boolean('Diff', false)}
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
                    value={select(
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
                />
            </div>
        )
    })
