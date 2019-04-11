import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { action } from '@storybook/addon-actions'
import Button from './index'

storiesOf('Components|Button', module)
  .add('Box', () => (
    <Button type="box" onClick={action('onClick')}>
      Confirm
    </Button>
  ))
  .add('Circle', () => <Button type="circle" iconSrc="" onClick={action('onClick')} />)
  .add('Text', () => (
    <Button type="text" iconSrc="" onClick={action('onClick')}>
      Show filters
    </Button>
  ))
