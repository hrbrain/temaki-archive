import { RequiredThemeProps } from '../../../dist'

declare module 'styled-components' {
    interface DefaultTheme extends RequiredThemeProps {}
}
