import * as React from 'react'
import styled, { css } from 'styled-components'
import colors from '~/lib/colors'

/**
 * Utils
 */

type ButtonSizeType = 'default' | 'small'
type ButtonTypeProp = 'primary' | 'secondary' | 'danger' | 'disable'

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
  type?: ButtonTypeProp
  ghosted?: boolean
  size?: ButtonSizeType
  width?: string
  height?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>
}
const Button: React.FC<Props> = ({ type, ghosted, size, width, height, onClick, children, ...props }) => {
  const [isLoading, handleClick] = useIsLoadingByAsyncClick(onClick)

  const className = React.useMemo(() => {
    return [type || 'primary'].filter(x => x).join(' ')
  }, [type])

  return (
    <Outer height={height} width={width} onClick={handleClick} className={className} {...props}>
      {isLoading ? 'loading...' : children}
    </Outer>
  )
}

/**
 * Styles
 */

const createCSSFromColorType = (
  base: string,
  hovered: string,
  activated: string,
  text: string,
  border: string | null = null
) => {
  return css`
    color: ${text};
    border: 1px solid ${border || base};
    background-color: ${base};
    &:hover {
      background-color: ${hovered};
      border-color: ${hovered};
      /* box-shadow */
    }
    &:active,
    &:focus {
      background-color: ${activated};
      border-color: ${activated};
      box-shadow: none;
      outline: none;
    }
  `
}

const rippleEffectMixin = css`
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);

  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, ${colors.white} 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform 0.2s, opacity 1s;
  }
  &:active:after {
    transform: scale(0, 0);
    opacity: 0.3;
    transition: 0s;
  }
`

type OuterProps = {
  height?: string
  width?: string
}
const Outer = styled.button<OuterProps>`
  ${rippleEffectMixin}
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  border-style: none;
  padding: 0 ${(props: OuterProps) => (props.width ? '0' : '16px')};
  cursor: pointer;
  height: ${(props: OuterProps) => props.height || '44px'};
  width: ${(props: OuterProps) => props.width || 'auto'};
  box-shadow: none;
  transition: background-color 0.2s, box-shadow 0.2s, border 0.2s;
  outline: none;
  font-size: 14px;

  /* size */
  &.small {
    height: ${(props: OuterProps) => props.height || '32px'};
  }

  /* color */
  &.primary {
    ${createCSSFromColorType(colors.primary.default, colors.primary.P20, colors.primary.P40, colors.white)}
  }
`

export default Button
