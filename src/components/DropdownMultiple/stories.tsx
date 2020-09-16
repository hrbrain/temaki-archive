import { text, boolean, optionsKnob } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import * as DropdownMultiple from './index'

const items = [
    { value: '1', text: 'りんご' },
    { value: '2', text: 'いちご' },
    { value: '3', text: 'バナナ' },
    { value: '4', text: 'メロン' },
    { value: '5', text: 'さくらんぼ' },
    { value: '6', text: 'ぶどう' }
]

const itemOptions = items.reduce(
    (accum, item) => ({ ...accum, [item.text]: item.value }),
    {}
)

storiesOf('Components|DropdownMultiple', module)
    .add('Multi', () => (
        <div className="ml-20 mt-10">
            <DropdownMultiple.Component
                placeholder={text('placeholder', '選択してください')}
                items={items}
                values={optionsKnob('selected', itemOptions, [], {
                    display: 'check'
                })}
                onClickRemove={action('onClickRemove')}
                isError={boolean('isError', false)}
                errorMessage={text('ErrorMessage', '')}
                width={text('width', '250px')}
                onChange={action('onChange')}
                diff={boolean('Diff', false)}
            />
        </div>
    ))
    .add('Input', () => (
        <div className="ml-20 mt-10">
            <DropdownMultiple.Component
                placeholder={text('placeholder', '選択してください')}
                items={[
                    { value: '1', text: 'りんご' },
                    { value: '2', text: 'いちご' },
                    { value: '3', text: 'バナナ' },
                    { value: '4', text: 'メロン' },
                    { value: '5', text: 'さくらんぼ' },
                    { value: '6', text: 'ぶどう' }
                ]}
                values={[]}
                onClickRemove={action('onClickRemove')}
                isError={boolean('isError', false)}
                errorMessage={text('ErrorMessage', '')}
                width={text('width', '250px')}
                onChange={action('onChange')}
                diff={boolean('Diff', false)}
            />
        </div>
    ))
