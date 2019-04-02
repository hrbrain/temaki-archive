import { storiesOf } from '@storybook/react'
import * as React from 'react'
import colors from '../../lib/colors'

type SquareProps = {
  color: string
}
const Square: React.FC<SquareProps> = ({ color }) => (
  <div className="h-16 w-16 ml-4" style={{ backgroundColor: color }} />
)

storiesOf('Basics|Colors', module).add('all', () => (
  <div className="contianer p-4">
    <h1 className="text-xl">Primary</h1>
    <div className="flex mt-4">
      <Square color={colors.primary} />
      <Square color={colors.primary} />
      <Square color={colors.primary} />
      <Square color={colors.primary} />
    </div>
  </div>
))
