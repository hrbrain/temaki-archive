import * as React from 'react'
import styled from '~/modules/theme'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export type ColorTypeProp = 'primary' | 'secondary' | 'destructive'

type Props = {
    text: string
    colorType?: ColorTypeProp
    className?: string
} & OuterProps

export const Component = React.memo<Props>(props => {
    return (
        <Outer
            colorType={props.colorType || 'primary'}
            className={props.className}
        >
            {props.text}
        </Outer>
    )
})

//------------------------------------------------------------------------------
// Styles
//------------------------------------------------------------------------------
type OuterProps = {
    colorType?: ColorTypeProp
}
const Outer = styled.div<OuterProps>`
    font-size: 12px;
    box-sizing: border-box;
    border-radius: 16px;
    padding: 4.5px 8px;
    font-weight: bold;
    display: inline-block;
    ${props => {
        switch (props.colorType) {
            case 'primary':
                return `
                    color: ${props.theme.colors.main.primary['600']};
                    background: ${props.theme.colors.main.primary['100']};
                    border: 1px solid ${props.theme.colors.main.primary['100']};
                `
            case 'secondary':
                return `
                    color: ${props.theme.colors.main.grayScale['600']};
                    background: ${props.theme.colors.main.grayScale['200']};
                    border: 1px solid ${props.theme.colors.main.grayScale['200']};
                `
            case 'destructive':
                return `
                    color: ${props.theme.colors.utilities.red.default};
                    background: ${props.theme.colors.utilities.red.N95};
                    border: 1px solid ${props.theme.colors.utilities.red.N95};
                `
            default:
                return ''
        }
    }}
`
