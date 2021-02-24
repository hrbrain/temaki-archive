import { color, text } from '@storybook/addon-knobs'
import * as React from 'react'

import * as IconFiles from '~/lib/iconFiles'
import * as Icon from './index'

export const Standard = () => (
    <Icon.Component
        svg={IconFiles.icons.AddIcon}
        size={text('Size', '24px')}
        color={color('Color', '#333')}
    />
)
