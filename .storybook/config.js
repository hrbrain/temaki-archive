import { configure, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

const req = require.context('../src/components', true, /\.stories\.tsx$/)

function loadStories() {
  req.keys().forEach(req)
  require('../src/components/Text/stories')
}

configure(loadStories, module)

addDecorator(withKnobs)