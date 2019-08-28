import { text, number, boolean, optionsKnob } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import * as DropdownSingle from './index'

storiesOf('Components|DropdownMultiple', module).add('Multi', () => (
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
            selected={optionsKnob(
                'selected',
                {
                    りんご: 'りんご',
                    いちご: 'いちご',
                    バナナ: 'バナナ',
                    メロン: 'メロン',
                    さくらんぼ: 'さくらんぼ',
                    ぶどう: 'ぶどう'
                },
                [],
                { display: 'check' }
            )}
            isError={boolean('isError', false)}
            width={number('width', 200)}
            onClickItem={action('text')}
        />
    </div>
))
