import * as React from 'react'

import * as Box from './presentors/Box'
import * as Circle from './presentors/Circle'
import * as TextPresentor from './presentors/Text'

/**
 * Utils
 */

export type ColorTypeProp =
    | 'primary'
    | 'primary ghost'
    | 'secondary'
    | 'secondary ghost'
    | 'destructive'
    | 'destructive ghost'
    | 'disabled'
    | 'default'

export type BoxColorTypeProp = ColorTypeProp

export type CircleColorTypeProp = Extract<
    ColorTypeProp,
    'primary' | 'secondary' | 'default'
>

export type TextColorTypeProp = Extract<
    ColorTypeProp,
    'primary' | 'destructive' | 'default'
>

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

export type Props = {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>
    type?: 'submit' | 'reset' | 'button'
    className?: string
    dataTest?: string
} & (
    | {
          variant: typeof buttonShapeType.box
          colorType?: BoxColorTypeProp
          height?: string
          width?: string
      }
    | {
          variant: typeof buttonShapeType.circle
          colorType?: CircleColorTypeProp
          svg?: string
      }
    | {
          variant: typeof buttonShapeType.text
          colorType?: TextColorTypeProp
          svg?: string
      }
)
export const Component: React.FC<Props> = props => {
    const [isLoading, handleClick] = useIsLoadingByAsyncClick(props.onClick)

    switch (props.variant) {
        case 'circle':
            return (
                <Circle.Component
                    dataTest={props.dataTest}
                    onClick={handleClick}
                    type={props.type || 'submit'}
                    colorType={props.colorType || 'primary'}
                    svg={props.svg}
                    isLoading={isLoading}
                    className={props.className}
                />
            )

        case 'text':
            return (
                <TextPresentor.Component
                    dataTest={props.dataTest}
                    onClick={handleClick}
                    colorType={props.colorType || 'primary'}
                    svg={props.svg}
                    type={props.type || 'submit'}
                    className={props.className}
                >
                    {props.children}
                </TextPresentor.Component>
            )

        default:
            return (
                <Box.Component
                    dataTest={props.dataTest}
                    height={props.height}
                    width={props.width}
                    colorType={props.colorType || 'primary'}
                    onClick={handleClick}
                    type={props.type || 'submit'}
                    className={props.className}
                >
                    {isLoading ? 'loading...' : props.children}
                </Box.Component>
            )
    }
}
