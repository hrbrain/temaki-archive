import * as React from 'react'

import * as Box from './presentors/Box'
import * as Circle from './presentors/Circle'
import * as TextPresentor from './presentors/Text'

/**
 * Utils
 */

export type ColorTypeProp =
    | BoxColorTypeProp
    | CircleColorTypeProp
    | TextColorTypeProp

type PrimaryColor = 'primary'

export type BoxColorTypeProp =
    | PrimaryColor
    | 'primary ghost'
    | 'secondary'
    | 'secondary ghost'
    | 'destructive'
    | 'destructive ghost'
    | 'disabled'

export type CircleColorTypeProp = PrimaryColor | 'secondary'

export type TextColorTypeProp = PrimaryColor | 'destructive'

export const buttonShapeType = {
    box: 'box' as const,
    circle: 'circle' as const,
    text: 'text' as const
}

// 別のコンポーネントで必要なら共通化して下さい
const useIsLoadingByAsyncClick = (
    fn:
        | ((e: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>)
        | undefined
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
        [isLoading, fn]
    )

    return [isLoading, handleClick]
}

/**
 * Component
 */

type Props = {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>
} & (
    | {
          type: typeof buttonShapeType.box
          colorType?: BoxColorTypeProp
          height?: string
          width?: string
      }
    | {
          type: typeof buttonShapeType.circle
          colorType?: CircleColorTypeProp
          svg?: string
      }
    | {
          type: typeof buttonShapeType.text
          colorType?: TextColorTypeProp
          svg?: string
      })
export const Component: React.FC<Props> = props => {
    const [isLoading, handleClick] = useIsLoadingByAsyncClick(props.onClick)

    switch (props.type) {
        case 'circle':
            return (
                <Circle.Component
                    onClick={handleClick}
                    colorType={props.colorType || 'primary'}
                    isLoading={isLoading}
                    {...props}
                />
            )

        case 'text':
            return (
                <TextPresentor.Component
                    onClick={handleClick}
                    colorType={props.colorType || 'primary'}
                    svg={props.svg}
                    {...props}
                >
                    {props.children}
                </TextPresentor.Component>
            )

        default:
            return (
                <Box.Component
                    height={props.height}
                    width={props.width}
                    colorType={props.colorType || 'primary'}
                    onClick={handleClick}
                    {...props}
                >
                    {isLoading ? 'loading...' : props.children}
                </Box.Component>
            )
    }
}
