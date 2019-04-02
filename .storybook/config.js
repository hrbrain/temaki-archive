import { configure, addDecorator, addParameters } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y';

const req = require.context('../src', true, /(.*\.)?stories\.tsx$/)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)

addDecorator(withKnobs)
addDecorator(withA11y)
addParameters({
  backgrounds: [
    { name: 'White', value: '#000', default: true },
    { name: 'Dark', value: '#1a2d4c' }
  ]
})