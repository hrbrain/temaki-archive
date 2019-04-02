import { storiesOf } from '@storybook/react'
import * as React from 'react'
import colors from '../../lib/colors'

type SquareProps = {
  color: string
  name: string
}
const Square: React.FC<SquareProps> = ({ name, color }) => (
  <div className="ml-4">
    <div className="h-16 w-16" style={{ backgroundColor: color }} />
    <p className="text-center text-xs mt-2">{name}</p>
  </div>
)

const renderColorsEachKeys = (obj: { [key: string]: string }) => {
  return Object.keys(obj)
    .sort((a, b) => (a > b ? -1 : 1))
    .map((key, index) => <Square key={index} color={obj[key]} name={key} />)
}

storiesOf('Basics|Colors', module).add('all', () => (
  <div className="contianer p-4">
    <h1 className="text-xl">Primary</h1>
    <div className="flex mt-4">{renderColorsEachKeys(colors.primary)}</div>
  </div>
))
