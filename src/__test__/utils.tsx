import { mount, ReactWrapper, shallow, ShallowWrapper } from 'enzyme'
import * as React from 'react'
import { defaultTheme, ThemeProvider } from '~/modules/theme'

// 推論で型エラーがでるので、型定義してキャストする
type ShallowWithTheme = (tree: React.ReactElement) => ShallowWrapper
export const shallowWithTheme: ShallowWithTheme = tree => {
  return shallow(<ThemeProvider theme={defaultTheme}>{tree}</ThemeProvider>)
}

// 推論で型エラーがでるので、型定義してキャストする
type MountWithTheme = (tree: React.ReactElement) => ReactWrapper
export const mountWithTheme: MountWithTheme = tree => {
  return mount(<ThemeProvider theme={defaultTheme}>{tree}</ThemeProvider>)
}
