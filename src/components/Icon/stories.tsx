import { color, text } from '@storybook/addon-knobs'
import * as Storybook from '@storybook/react'
import * as React from 'react'

import * as IconFiles from '~/lib/iconFiles'
import Icon from './index'

Storybook.storiesOf('components|Icon', module).add('Standard', () => (
    <Icon
        svg={IconFiles.icons.AddIcon}
        size={text('Size', '24px')}
        color={color('Color', '#333')}
    />
))
