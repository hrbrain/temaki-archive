import { text, number, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import * as DropdownSingle from './index'

storiesOf('Components|DropdownMultiple', module)
    .add('未選択時', () => (
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
                selected={[]}
                isError={boolean('isError', false)}
                width={number('width', 200)}
                onClickItem={action('text')}
            />
        </div>
    ))
    .add('選択時', () => (
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
                selected={['りんご', 'バナナ', 'メロン']}
                isError={boolean('isError', false)}
                width={number('width', 200)}
                onClickItem={action('text')}
            />
        </div>
    ))
