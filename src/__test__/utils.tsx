import { mount, ReactWrapper, shallow, ShallowWrapper } from 'enzyme'
import * as React from 'react'
import * as ReactRouter from 'react-router'
import { defaultTheme, ThemeProvider } from '~/modules/theme'

type WithRouterProps = React.ComponentPropsWithoutRef<typeof ReactRouter.Router>
export const WithRouter: React.FC<WithRouterProps> = props => {
    const { children, ...restProps } = props
    return <ReactRouter.Router {...restProps}>{children}</ReactRouter.Router>
}

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
