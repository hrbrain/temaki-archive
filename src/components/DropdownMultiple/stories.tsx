import { text, boolean, optionsKnob } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import * as DropdownSingle from './index'

storiesOf('Components|DropdownMultiple', module).add('Multi', () => (
    <div className="ml-20 mt-10">
        <DropdownSingle.Component
            placeholder={text('placeholder', '選択してください')}
            items={[
                { value: '1', text: 'りんご' },
                { value: '2', text: 'いちご' },
                { value: '3', text: 'バナナ' },
                { value: '4', text: 'メロン' },
                { value: '5', text: 'さくらんぼ' },
                { value: '6', text: 'ぶどう' }
            ]}
            values={optionsKnob(
                'selected',
                {
                    りんご: '1',
                    いちご: '2',
                    バナナ: '3',
                    メロン: '4',
                    さくらんぼ: '5',
                    ぶどう: '6'
                },
                [],
                { display: 'check' }
            )}
            isError={boolean('isError', false)}
            width={text('width', '250px')}
            onChange={action('onChange')}
        />
    </div>
))
