import { storiesOf } from '@storybook/react'
import * as React from 'react'
import * as DatepickerRange from './index'
import * as Knobs from '@storybook/addon-knobs'
import * as Actions from '@storybook/addon-actions'
// import ReactDOM = require('react-dom')
//
// const findDOMNode = ReactDOM.findDOMNode
//
// ReactDOM.findDOMNode = component => {
//     if (findDOMNode) {
//         // eslint-disable-next-line react/no-find-dom-node
//         return findDOMNode(...args)
//     }
//
//     // @ts-ignore
//     if (!component.container) {
//         // eslint-disable-next-line no-undef
//         return document.createElement('input')
//     }
//
//     // @ts-ignore
//     const elementType = component.container
//         .toString()
//         .match(/^\[object HTML(.+)Element\]$/)[1]
//
//     // eslint-disable-next-line no-undef
//     return document.createElement(elementType.toLowerCase())
// }
//
// // eslint-disable-next-line no-redeclare,@typescript-eslint/no-require-imports,@typescript-eslint/no-var-requires
// const ReactTestRenderer = require('react-test-renderer')
//
// const create = ReactTestRenderer.create
//
// ReactTestRenderer.create = function(element: any) {
//     return create(element, {
//         createNodeMock(element: { type: any }) {
//             // eslint-disable-next-line no-undef
//             return document.createElement(element.type)
//         }
//     })
// }
storiesOf('Components|DateRangePicker', module).add('Standard', () => (
    <DatepickerRange.Component
        displayFormat={Knobs.text('displayFormat', 'YYYY/MM/DD')}
        numberOfMonths={Knobs.number('numberOfMonths', 1)}
        monthFormat={Knobs.text('monthFormat', 'YYYY[/]MM[]')}
        onDatesChange={Actions.action('onDatesChange')}
    />
))
