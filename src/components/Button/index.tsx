import * as React from 'react'

import Box from './presentors/Box'
import Circle from './presentors/Circle'
import TextPresentor from './presentors/Text'

/**
 * Utils
 */

export type ColorTypeProp = 'primary'
// TypeScript 3.4 がまともに使えるようになったら書き換えて下さい
export const buttonShapeType = {
  box: 'box' as 'box',
  circle: 'circle' as 'circle',
  text: 'text' as 'text'
}

// 別のコンポーネントで必要なら共通化して下さい
const useIsLoadingByAsyncClick = (
  fn: ((e: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>) | undefined
): [boolean, (e: React.MouseEvent<HTMLButtonElement>) => void] => {
  const [isLoading, setIsLoading] = React.useState(false)
  const handleClick = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!fn) {
        return
      }
      const res = fn(e)
      if (res) {
        setIsLoading(true)
        res.then(() => setIsLoading(false))
      }
    },
    [isLoading]
  )

  return [isLoading, handleClick]
}

/**
 * Component
 */

type Props = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>
  colorType?: ColorTypeProp
} & (
  | {
      type: typeof buttonShapeType.box
      height?: string
      width?: string
    }
  | {
      type: typeof buttonShapeType.circle
      iconSrc?: string
    }
  | {
      type: typeof buttonShapeType.text
      iconSrc?: string
    })
const Button: React.FC<Props> = ({ colorType = 'primary', onClick, children, ...props }) => {
  const [isLoading, handleClick] = useIsLoadingByAsyncClick(onClick)

  if (props.type === 'circle') {
    return <Circle onClick={handleClick} colorType={colorType} isLoading={isLoading} {...props} />
  }
  if (props.type === 'text') {
    return <TextPresentor iconSrc={props.iconSrc} children={children} />
  }
  return (
    <Box height={props.height} width={props.width} colorType={colorType} onClick={handleClick} {...props}>
      {isLoading ? 'loading...' : children}
    </Box>
  )
}

export default Button
