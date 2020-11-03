import * as React from 'react'
import styled from '~/modules/theme'

// type Props = {
//   size?: number
//   level?: number
// }
export const Component: React.FC = ({ children }) => {
    return <StyledText>{children}</StyledText>
}

const StyledText = styled.p`
    color: ${props => props.theme.colors.text.default};
`
