import * as Enzyme from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
/* eslint-disable */
const ContextHook = require('babel-plugin-require-context-hook/register')
/* eslint-enable */

Enzyme.configure({ adapter: new Adapter() })
ContextHook()
