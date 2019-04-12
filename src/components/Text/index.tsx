import * as React from 'react'
import styled, { RequiredThemeProps } from '~/modules/theme'

// type Props = {
//   size?: number
//   level?: number
// }
const Text: React.FC = ({ children }) => {
  return <StyledText>{children}</StyledText>
}

const StyledText = styled.p`
  color: ${(props: { theme: RequiredThemeProps }) => props.theme.colors.text.default};
`

export default Text
