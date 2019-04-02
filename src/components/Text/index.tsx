import * as React from 'react'
import { RequiredThemeProps } from '~/index'
import styled from '~/modules/theme'

// type Props = {
//   size?: number
//   level?: number
// }
const Text: React.FC = ({ children }) => {
  return <StyledText>{children}</StyledText>
}

const StyledText = styled.p`
  color: ${(props: { theme: RequiredThemeProps }) => props.theme.text};
`

export default Text
