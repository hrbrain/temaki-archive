import * as React from 'react'
import styled, { css } from '~/modules/theme'

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
  if (indeterminate) {
    // TODO: 画像追加する
    return (
      <Outer {...props}>
        <Checked />
        <Text>{text}</Text>
      </Outer>
    )
  }
  if (checked) {
    // TODO: 画像追加する
    return (
      <Outer {...props}>
        <Checked />
        <Text>{text}</Text>
      </Outer>
    )
  }

  return (
    <Outer {...props}>
      <NotChecked />
      <Text>{text}</Text>
    </Outer>
  )
})

/**
 * Styles
 */

const Outer = styled.div`
  display: flex;
  align-items: center;
`

const checkboxBaseMixin = css`
  width: 24px;
  height: 24px;
  border-radius: 6px;
  border: solid 1px;
  cursor: pointer;
`

const NotChecked = styled.div`
  ${checkboxBaseMixin};
`

const Checked = styled.div`
  ${checkboxBaseMixin};
`
// border-color: ${props => props.theme.colors.primary.default};
// background-color: ${props => props.theme.colors.primary.default};

const Text = styled.span`
  font-size: 14px;
  padding-left: 4px;
`
// color: ${props => props.theme.colors.text};

export default Checkbox
