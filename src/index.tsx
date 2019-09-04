import * as _Checkbox from '~/components/Checkbox/index'
import * as _Text from '~/components/Text/index'
import * as _Icon from '~/components/Icon/index'
import * as _Input from '~/components/Input/index'
import * as _Button from '~/components/Button/index'
import * as _Toast from '~/components/Toast/index'
import * as _SegmentedControl from '~/components/SegmentedControl/index'
import * as _ToolTip from '~/components/ToolTip/index'
import * as _RadioButton from '~/components/RadioButton/index'
import { icons as _icons } from '~/lib/iconFiles'
import {
    defaultTheme as _defaultTheme,
    RequiredThemeProps as _RequiredThemeProps
} from './modules/theme'

export const Text = _Text.Component
export const Icon = _Icon.Component
export const Checkbox = _Checkbox.Component
export const Input = _Input.Component
export const Button = _Button.Component
export const buttonShapeType = _Button.buttonShapeType
export const Toast = _Toast.Component
export const SegmentedControl = _SegmentedControl.Component
export type SegmentedControlItem = _SegmentedControl.Item
export const Tooltip = _ToolTip.Component
export const RadioButton = _RadioButton.Component
export const icons = _icons
export const defaultTheme = _defaultTheme
export type RequiredThemeProps = _RequiredThemeProps
