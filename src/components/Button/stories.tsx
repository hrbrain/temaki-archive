import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { action } from '@storybook/addon-actions'
import * as Button from './index'

storiesOf('Components|Button', module)
    .add('Box', () => (
        <Button.Component type="box" onClick={action('onClick')}>
            Confirm
        </Button.Component>
    ))
    .add('Circle', () => (
        <Button.Component type="circle" iconSrc="" onClick={action('onClick')} />
    ))
    .add('Component', () => (
        <Button.Component type="text" iconSrc="" onClick={action('onClick')}>
            Show filters
        </Button.Component>
    ))
