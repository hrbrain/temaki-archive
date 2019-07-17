import * as React from 'react'
import styled from '~/modules/theme'

import checkboxIndeterminate from 'raw-loader!~/assets/icons/checkbox-indeterminate.svg'
import checkboxOff from 'raw-loader!~/assets/icons/checkbox-off.svg'
import checkboxOn from 'raw-loader!~/assets/icons/checkbox-on.svg'

/**
 * Component
 */

type Props = {
  text?: string
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
  checked?: boolean
  indeterminate?: boolean
}
const Checkbox = React.memo<Props>(({ text, indeterminate, checked, ...props }) => {
  // ON の方を優先にする
  if (checked) {
    return (
      <Outer tabIndex={1} data-test="checked-box" {...props}>
        <CheckIcon dangerouslySetInnerHTML={{ __html: checkboxOn }} />
        <Text>{text}</Text>
      </Outer>
    )
  }

  if (indeterminate) {
    return (
      <Outer tabIndex={1} data-test="indeterminate-box" {...props}>
        <CheckIcon dangerouslySetInnerHTML={{ __html: checkboxIndeterminate }} />
        <Text>{text}</Text>
      </Outer>
    )
  }

  return (
    <Outer tabIndex={1} data-test="nocheck-box" {...props}>
      <CheckIcon dangerouslySetInnerHTML={{ __html: checkboxOff }} />
      <Text>{text}</Text>
    </Outer>
  )
})

/**
 * Styles
 */

const Outer = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`

const CheckIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 24px;

  & .primary {
    fill: ${props => props.theme.colors.primary.default};
  }
`

const Text = styled.span`
  height: 100%;
  font-size: 14px;
  padding-left: 4px;
  color: ${props => props.theme.colors.text};
`

export default Checkbox