import { text, number, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import * as DropdownSingle from './index'

storiesOf('Components|Dropdown', module).add('Single', () => (
    <div className="ml-20 mt-10">
        <DropdownSingle.Component
            placeholder={text('placeholder', '選択してください')}
            items={[
                { text: 'りんご', onClick: action('onClick') },
                { text: 'いちご', onClick: action('onClick') },
                { text: 'バナナ', onClick: action('onClick') },
                { text: 'メロン', onClick: action('onClick') },
                { text: 'さくらんぼ', onClick: action('onClick') },
                { text: 'ぶどう', onClick: action('onClick') }
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
            width={number('width', 200)}
        />
    </div>
))
