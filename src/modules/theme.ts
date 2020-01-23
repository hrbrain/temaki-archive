import * as React from 'react'
import * as styledComponents from 'styled-components'

export type RequiredThemeColors = {
    primary: {
        default: string
        N20: string
        N40: string
        N60: string
        N80: string
        N95: string
        P20: string
        P40: string
        P60: string
        P80: string
        P95: string
    }
    grayScale: {
        S0: string
        S5: string
        S10: string
        S20: string
        S30: string
        S40: string
        S50: string
        S60: string
        S70: string
        S80: string
        S90: string
        S100: string
    }
    utilities: {
        red: {
            default: string
            N20: string
            N40: string
            N60: string
            N80: string
            N90: string
            N95: string
            P20: string
            P40: string
            P60: string
        }
        blue: string
        highlightGreen: {
            default: string
            N20: string
            N40: string
            N60: string
            N80: string
            N90: string
            N95: string
            P20: string
            P40: string
            P60: string
        }
        paleRed: string
        paleGreen: string
        paleBlue: string
        paleYellow: string
    }
    text: {
        default: string
    }
}

export type RequiredThemeShadows = {
    boxShadow: {
        L1: string
        L2: string
        L3: string
        L4: string
        L5: string
    }
    dropShadow: {
        L1: string
        L2: string
        L3: string
        L4: string
        L5: string
    }
}

export type RequiredThemeTextSize = {
    pc: RequiredThemeTextSizePC
    sp: RequiredThemeTextSizeSP
}

export type RequiredThemeTextSizePC = {
    body: {
        default: string
        L: string
        XL: string
        S: string
    }
    heading: {
        H1: string
        H2: string
        H3: string
        H4: string
        H5: string
        H6: string
    }
}

export type RequiredThemeTextSizeSP = {
    body: {
        default: string
        L: string
        XL: string
        S: string
    }
    heading: {
        H1: string
        H2: string
        H3: string
        H4: string
        H5: string
        H6: string
    }
}

export type RequiredThemeLayers = {
    content: string
    tooltip: string
    toast: string
    header: string
    popover: string
    sidemodal: string
    fullmodal: string
    loading: string
}

export type RequiredThemeProps = {
    colors: RequiredThemeColors
    shadows: RequiredThemeShadows
    typography: RequiredThemeTextSize
    layers: RequiredThemeLayers
}

export const defaultTheme: RequiredThemeProps = {
    colors: {
        primary: {
            default: 'rgb(51, 51, 51)',
            N20: 'rgb(92, 92, 92)',
            N40: 'rgb(133, 133, 133)',
            N60: 'rgb(173, 173, 173)',
            N80: 'rgb(214, 214, 214)',
            N95: 'rgb(245, 245, 245)',
            P20: 'rgb(41, 41, 41)',
            P40: 'rgb(31, 31, 31)',
            P60: 'rgb(20, 20, 20)',
            P80: 'rgb(10, 10, 10)',
            P95: 'rgb(0, 0, 0)'
        },
        grayScale: {
            S0: 'rgb(255, 255, 255)',
            S5: 'rgb(245, 245, 245)',
            S10: 'rgb(234, 234, 234)',
            S20: 'rgb(214, 214, 214)',
            S30: 'rgb(193, 193, 193)',
            S40: 'rgb(173, 173, 173)',
            S50: 'rgb(153, 153, 153)',
            S60: 'rgb(133, 133, 133)',
            S70: 'rgb(112, 112, 112)',
            S80: 'rgb(92, 92, 92)',
            S90: 'rgb(71, 71, 71)',
            S100: 'rgb(51, 51, 51)'
        },
        utilities: {
            red: {
                default: 'rgb(224, 85, 72)',
                N20: 'rgb(230, 119, 109)',
                N40: 'rgb(236, 153, 145)',
                N60: 'rgb(243, 187, 182)',
                N80: 'rgb(249, 221, 218)',
                N90: 'rgb(251, 238, 236)',
                N95: 'rgb(253, 246, 246)',
                P20: 'rgb(179, 68, 57)',
                P40: 'rgb(134, 51, 43)',
                P60: 'rgb(89, 34, 28)'
            },
            blue: 'rgb(48, 120, 191)',
            highlightGreen: {
                default: 'rgb(114, 206, 92)',
                N20: 'rgb(142, 216, 125)',
                N40: 'rgb(170, 226, 157)',
                N60: 'rgb(199, 235, 190)',
                N80: 'rgb(227, 245, 222)',
                N90: 'rgb(240, 250, 238)',
                N95: 'rgb(248, 252, 247)',
                P20: 'rgb(68, 123, 55)',
                P40: 'rgb(91, 164, 73)',
                P60: 'rgb(114, 206, 92)'
            },
            paleRed: 'rgb(253, 246, 246)',
            paleGreen: 'rgb(248 ,252, 247)',
            paleBlue: 'rgb(245, 249, 252)',
            paleYellow: 'rgb(255, 255, 233)'
        },
        text: {
            default: '#333'
        }
    },
    shadows: {
        boxShadow: {
            L1: '0 0 2px 0 rgba(0, 0, 0, 0.16)',
            L2: '0 1px 3px 0 rgba(0, 0, 0, 0.16)',
            L3: '0 2px 5px 0 rgba(0, 0, 0, 0.16)',
            L4: '0 3px 8px 0 rgba(0, 0, 0, 0.16)',
            L5: '0 5px 11px 0 rgba(0, 0, 0, 0.16)'
        },
        dropShadow: {
            L1: '0 0 2px rgba(0, 0, 0, 0.16)',
            L2: '0 1px 3px rgba(0, 0, 0, 0.16)',
            L3: '0 2px 5px rgba(0, 0, 0, 0.16)',
            L4: '0 3px 8px rgba(0, 0, 0, 0.16)',
            L5: '0 5px 11px rgba(0, 0, 0, 0.16)'
        }
    },
    typography: {
        pc: {
            body: {
                XL: '18px',
                L: '16px',
                default: '14px',
                S: '12px'
            },
            heading: {
                H1: '24px',
                H2: '22px',
                H3: '20px',
                H4: '18px',
                H5: '16px',
                H6: '14px'
            }
        },
        sp: {
            body: {
                XL: '18px',
                L: '16px',
                default: '14px',
                S: '12px'
            },
            heading: {
                H1: '24px',
                H2: '22px',
                H3: '20px',
                H4: '18px',
                H5: '16px',
                H6: '14px'
            }
        }
    },
    layers: {
        content: '50',
        tooltip: '100',
        toast: '200',
        header: '300',
        popover: '400',
        sidemodal: '500',
        fullmodal: '600',
        loading: '1000'
    }
}

const casted = styledComponents as styledComponents.ThemedStyledComponentsModule<
    RequiredThemeProps
>

const {
    default: styled,
    ServerStyleSheet,
    StyleSheetManager,
    createGlobalStyle,
    css,
    isStyledComponent,
    keyframes,
    withTheme
} = casted
const ThemeConsumer: React.ExoticComponent<
    React.ConsumerProps<RequiredThemeProps>
> = casted.ThemeConsumer
const ThemeContext: React.Context<RequiredThemeProps> = casted.ThemeContext
const ThemeProvider: React.ComponentClass<
    styledComponents.ThemeProviderProps<RequiredThemeProps, RequiredThemeProps>,
    // tslint:disable-next-line:no-any
    any
> = casted.ThemeProvider

/* eslint-disable import/no-default-export */
export default styled
/* eslint-enable import/no-default-export */
export {
    ServerStyleSheet,
    StyleSheetManager,
    ThemeConsumer,
    ThemeContext,
    ThemeProvider,
    createGlobalStyle,
    css,
    isStyledComponent,
    keyframes,
    withTheme
}
