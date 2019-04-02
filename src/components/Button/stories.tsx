import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { action } from '@storybook/addon-actions'
import Button from './index'

storiesOf('Components|Button', module).add('all', () => <Button onClick={action('onClick')}>Confirm</Button>)
