import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { action } from '@storybook/addon-actions'
import { select, text } from '@storybook/addon-knobs'
import * as Button from './index'

import * as IconFiles from '~/lib/iconFiles'

const boxOptions = {
    Primary: 'primary',
    PrimaryGhost: 'primary ghost',
    Secondary: 'secondary',
    SecondaryGhost: 'secondary ghost',
    Destructive: 'destructive',
    DestructiveGhost: 'destructive ghost',
    Disabled: 'disabled'
} as const

const circleOptions = {
    Primary: 'primary',
    Secondary: 'secondary'
} as const

const textOptions = {
    Primary: 'primary',
    Destructive: 'destructive',
    grayScaleS100: 'grayScaleS100'
} as const

const sleep = (msec: number) =>
    new Promise(resolve => setTimeout(resolve, msec))
const handleClick = async () => {
    await sleep(1000)
    action('onClick')
}

storiesOf('Components/Button', module)
    .add('Box', () => (
        <Button.Component
            variant="box"
            type="submit"
            colorType={select('ColorType', boxOptions, boxOptions.Primary)}
            onClick={handleClick}
        >
            Confirm
        </Button.Component>
    ))
    .add('Circle', () => (
        <Button.Component
            variant="circle"
            type="reset"
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
            variant="text"
            type="button"
            colorType={select('ColorType', textOptions, textOptions.Primary)}
            svg={IconFiles.icons.ArrowDown}
            onClick={action('onClick')}
        >
            {text('text', 'Show filters')}
        </Button.Component>
    ))
