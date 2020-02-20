import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { action } from '@storybook/addon-actions'
import { select, text } from '@storybook/addon-knobs'
import * as Button from './index'

import * as IconFiles from '~/lib/iconFiles'

const boxOptions = {
    Primary: 'primary' as const,
    PrimaryGhost: 'primary ghost' as const,
    Secondary: 'secondary' as const,
    SecondaryGhost: 'secondary ghost' as const,
    Destructive: 'destructive' as const,
    DestructiveGhost: 'destructive ghost' as const,
    Disabled: 'disabled' as const
}

const circleOptions = {
    Primary: 'primary' as const,
    Secondary: 'secondary' as const
}

const textOptions = {
    Primary: 'primary' as const,
    Destructive: 'destructive' as const
}

storiesOf('Components|Button', module)
    .add('Box', () => (
        <Button.Component
            type="box"
            nativeType="submit"
            colorType={select('ColorType', boxOptions, boxOptions.Primary)}
            onClick={action('onClick')}
        >
            Confirm
        </Button.Component>
    ))
    .add('Circle', () => (
        <Button.Component
            type="circle"
            nativeType="reset"
            colorType={select(
                'ColorType',
                circleOptions,
                circleOptions.Primary
            )}
            svg={IconFiles.icons.ArrowDown}
            onClick={action('onClick')}
        />
    ))
    .add('Text', () => (
        <Button.Component
            type="text"
            nativeType="button"
            colorType={select('ColorType', textOptions, textOptions.Primary)}
            svg={IconFiles.icons.ArrowDown}
            onClick={action('onClick')}
        >
            {text('text', 'Show filters')}
        </Button.Component>
    ))
