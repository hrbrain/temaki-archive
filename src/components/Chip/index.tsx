import * as React from 'react'
import styled from '~/modules/theme'
import * as Index from '~/components/Button'
import { css } from 'styled-components'

/**
 * Component
 */
export type ColorTypeProp = 'primary' | 'secondary' | 'destructive' | 'default'

type Props = {
    text: string
    colorType: ColorTypeProp
    className?: string
} & OuterProps

export const Component = React.memo<Props>(({ ...props }) => {
    return (
        <Outer
            height={props.height}
            width={props.width}
            colorType={props.colorType}
            className={props.className}
        >
            {props.text}
        </Outer>
    )
})

/**
 * Styles
 */
type OuterProps = {
    height?: string
    width?: string
    colorType: Index.BoxColorTypeProp
}
const Outer = styled.div<OuterProps>`
    font-size: 12px;
    box-sizing: border-box;
    border-radius: 16px;
    margin: 4.5px 8px;
    width: ${props => props};
    ${props => {
        switch (props.colorType) {
            case 'primary':
                return css`
                    color: ${props.theme.colors.primary.default};
                    background: ${props.theme.colors.primary.N20};
                    border: 1px solid ${props.theme.colors.primary.N20};
                `
            case 'secondary':
                return css`
                    color: ${props.theme.colors.grayScale.S60};
                    background: ${props.theme.colors.grayScale.S20};
                    border: 1px solid ${props.theme.colors.grayScale.S20};
                `
            case 'destructive':
                return css`
                    color: ${props.theme.colors.utilities.red.default};
                    background: ${props.theme.colors.utilities.red.N95};
                    border: 1px solid ${props.theme.colors.utilities.red.N95};
                `
            default:
                return ''
        }
    }}
`
