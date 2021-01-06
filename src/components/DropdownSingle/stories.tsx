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
                    {
                        value: '1',
                        text: 'りんご',
                        remarks: 'りんごを新しい項目として登録します。'
                    },
                    {
                        value: '2',
                        text: 'いちご',
                        remarks: 'いちごを新しい項目として追加します。'
                    },
                    {
                        value: '3',
                        text: 'バナナ',
                        remarks: 'いちごの説明ですよ'
                    },
                    {
                        value: '4',
                        text: 'メロン',
                        remarks: 'メロン説明ですよ'
                    },
                    {
                        value: '5',
                        text: 'さくらんぼ',
                        remarks: ''
                    },
                    {
                        value: '6',
                        text: 'ぶどう'
                    }
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
                disabled={boolean('disabled', false)}
                isError={boolean('isError', false)}
                errorMessage={text('ErrorMessage', '')}
                width={text('width', '200px')}
                onChange={action('onChange')}
                onClickBody={action('onClickBody')}
                diff={boolean('Diff', false)}
            />
        </div>
    ))
    .add('Disabled', () => (
        <div className="ml-20 mt-10">
            <DropdownSingle.Component
                type={'default'}
                placeholder={text('placeholder', '選択してください')}
                items={[
                    { value: '', text: '' },
                    {
                        value: '1',
                        text: 'りんご',
                        remarks: 'りんごを新しい項目として登録します。',
                        disabled: true
                    },
                    {
                        value: '2',
                        text: 'いちご',
                        remarks: 'いちごを新しい項目として追加します。',
                        disabled: true
                    },
                    {
                        value: '3',
                        text: 'バナナ',
                        remarks: 'いちごの説明ですよ',
                        disabled: true
                    },
                    {
                        value: '4',
                        text: 'メロン',
                        remarks: 'メロン説明ですよ',
                        disabled: true
                    },
                    {
                        value: '5',
                        text: 'さくらんぼ',
                        disabled: true
                    },
                    {
                        value: '6',
                        text: 'ぶどう',
                        disabled: true
                    }
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
                disabled={boolean('disabled', false)}
                isError={boolean('isError', false)}
                errorMessage={text('ErrorMessage', '')}
                width={text('width', '200px')}
                onChange={action('onChange')}
                onClickBody={action('onClickBody')}
                diff={boolean('Diff', false)}
            />
        </div>
    ))
    .add('Input', () => (
        <div className="ml-20 mt-10">
            <DropdownSingle.Component
                type={'default'}
                placeholder={text('placeholder', '選択してください')}
                items={[
                    { value: '', text: '' },
                    {
                        value: '1',
                        text: 'りんご',
                        remarks: 'りんごを新しい項目として登録します。'
                    },
                    {
                        value: '2',
                        text: 'いちご',
                        remarks: 'いちごを新しい項目として追加します。'
                    },
                    {
                        value: '3',
                        text: 'バナナ',
                        remarks: 'いちごの説明ですよ'
                    },
                    {
                        value: '4',
                        text: 'メロン',
                        remarks: 'メロン説明ですよ'
                    },
                    {
                        value: '5',
                        text: 'さくらんぼ'
                    },
                    {
                        value: '6',
                        text: 'ぶどう'
                    }
                ]}
                value={''}
                isError={boolean('isError', false)}
                errorMessage={text('ErrorMessage', '')}
                width={text('width', '200px')}
                onChange={action('onChange')}
                onClickBody={action('onClickBody')}
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
                    onClickBody={action('text')}
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
                        {
                            value: '1',
                            text: 'りんご',
                            remarks: 'りんごの説明ですよ'
                        },
                        {
                            value: '2',
                            text: 'いちご',
                            remarks: 'いちごの説明ですよ'
                        },
                        {
                            value: '3',
                            text: 'バナナ',
                            remarks: 'いちごの説明ですよ'
                        },
                        {
                            value: '4',
                            text: 'メロン',
                            remarks: 'いちごの説明ですよ'
                        },
                        {
                            value: '5',
                            text: 'さくらんぼ',
                            remarks: 'いちごの説明ですよ'
                        },
                        {
                            value: '6',
                            text: 'ぶどう',
                            remarks: 'いちごの説明ですよ'
                        }
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
