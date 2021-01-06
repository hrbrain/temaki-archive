import { text } from '@storybook/addon-knobs'
import * as Storybook from '@storybook/react'
import * as React from 'react'

import * as IllustrationFiles from '~/lib/illustrationFiles'
import * as Illustration from './index'

Storybook.storiesOf('components|Illustration', module).add('Standard', () => (
    <Illustration.Component
        svg={IllustrationFiles.illustrations.Sample}
        size={{
            width: text('Size Width', '401px'),
            height: text('Size Height', '276px')
        }}
    />
))
