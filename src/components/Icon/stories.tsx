import { color, text } from '@storybook/addon-knobs'
import * as Storybook from '@storybook/react'
import * as React from 'react'

import * as IconFiles from '~/lib/iconFiles'
import * as Icon from './index'

Storybook.storiesOf('Components/Icon', module).add('Standard', () => (
    <Icon.Component
        svg={IconFiles.icons.AddIcon}
        size={text('Size', '24px')}
        color={color('Color', '#333')}
    />
))
