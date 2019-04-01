import * as React from 'react'

type Props = {
  count: number
  onIncrementClick: () => void
  onDecrementClick: () => void
}
const Top: React.FC<Props> = ({ count, onDecrementClick, onIncrementClick, children }) => (
  <div>
    <div>Connt: {count}</div>
    <button onClick={onIncrementClick}>Increment</button>
    <button onClick={onDecrementClick}>Decrement</button>
  </div>
)

export default Top
