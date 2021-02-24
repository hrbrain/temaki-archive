import { text, boolean, optionsKnob } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import * as React from 'react'
import * as DropdownMultiple from './index'

const items = [
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
]

const itemOptions = items.reduce(
    (accum, item) => ({ ...accum, [item.text]: item.value }),
    {}
)

export default {
    title: 'Components/DropdownMultiple'
}

export const Multi = () => (
    <div className="ml-20 mt-10">
        <DropdownMultiple.Component
            placeholder={text('placeholder', '選択してください')}
            items={items}
            values={optionsKnob('selected', itemOptions, [], {
                display: 'check'
            })}
            onClickRemove={action('onClickRemove')}
            isError={boolean('isError', false)}
            disabled={boolean('disabled', false)}
            errorMessage={text('ErrorMessage', '')}
            width={text('width', '250px')}
            onChange={action('onChange')}
            diff={boolean('Diff', false)}
        />
    </div>
)

export const Input = () => (
    <div className="ml-20 mt-10">
        <DropdownMultiple.Component
            placeholder={text('placeholder', '選択してください')}
            items={[
                {
                    value: '1',
                    text: 'りんご',
                    remarks: 'りんごを新しい項目として登録します。'
                },
                {
                    value: '2',
                    text: 'いちご',
                    remarks: 'いちごを新しい項目として登録します。'
                },
                { value: '3', text: 'バナナ' },
                { value: '4', text: 'メロン' },
                { value: '5', text: 'さくらんぼ' },
                { value: '6', text: 'ぶどう' }
            ]}
            values={[]}
            onClickRemove={action('onClickRemove')}
            isError={boolean('isError', false)}
            disabled={boolean('disabled', false)}
            errorMessage={text('ErrorMessage', '')}
            width={text('width', '250px')}
            onChange={action('onChange')}
            diff={boolean('Diff', false)}
        />
    </div>
)
