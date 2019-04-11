import * as React from 'react'

import Box from './presentors/Box'
import Circle from './presentors/Circle'
/**
 * Utils
 */

export type ColorTypeProp = 'primary'

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
      type: 'box'
      height?: string
      width?: string
    }
  | {
      type: 'circle'
      iconSrc?: string
    })
const Button: React.FC<Props> = ({ colorType = 'primary', onClick, children, ...props }) => {
  const [isLoading, handleClick] = useIsLoadingByAsyncClick(onClick)

  if (props.type === 'circle') {
    return <Circle colorType={colorType} iconSrc={props.iconSrc} isLoading={isLoading} />
  }
  return (
    <Box height={props.height} width={props.width} colorType={colorType} onClick={handleClick} {...props}>
      {isLoading ? 'loading...' : children}
    </Box>
  )
}

export default Button
