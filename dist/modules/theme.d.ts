import * as React from 'react';
import * as styledComponents from 'styled-components';
export declare type RequiredThemeColors = {
    primary: {
        default: string;
        N20: string;
        N40: string;
        N60: string;
        N80: string;
        N95: string;
        P20: string;
        P40: string;
        P60: string;
        P80: string;
        P95: string;
    };
    grayScale: {
        S0: string;
        S5: string;
        S10: string;
        S20: string;
        S30: string;
        S40: string;
        S50: string;
        S60: string;
        S70: string;
        S80: string;
        S90: string;
        S100: string;
    };
    utilities: {
        red: {
            default: string;
            N20: string;
            N40: string;
            N60: string;
            N80: string;
            N90: string;
            N95: string;
            P20: string;
            P40: string;
            P60: string;
        };
        blue: string;
        highlightGreen: {
            default: string;
            N20: string;
            N40: string;
            N60: string;
            N80: string;
            N90: string;
            N95: string;
            P20: string;
            P40: string;
            P60: string;
        };
        paleRed: string;
        paleGreen: string;
        paleBlue: string;
        paleYellow: string;
    };
    text: {
        default: string;
    };
};
export declare type RequiredThemeShadows = {
    boxShadow: {
        L1: string;
        L2: string;
        L3: string;
        L4: string;
        L5: string;
    };
    dropShadow: {
        L1: string;
        L2: string;
        L3: string;
        L4: string;
        L5: string;
    };
};
export declare type RequiredThemeTextSize = {
    pc: RequiredThemeTextSizePC;
    sp: RequiredThemeTextSizeSP;
};
export declare type RequiredThemeTextSizePC = {
    body: {
        default: string;
        L: string;
        XL: string;
        S: string;
    };
    heading: {
        H1: string;
        H2: string;
        H3: string;
        H4: string;
        H5: string;
        H6: string;
    };
};
export declare type RequiredThemeTextSizeSP = {
    body: {
        default: string;
        L: string;
        XL: string;
        S: string;
    };
    heading: {
        H1: string;
        H2: string;
        H3: string;
        H4: string;
        H5: string;
        H6: string;
    };
};
export declare type RequiredThemeLayers = {
    L1: string;
    L2: string;
    L3: string;
    L4: string;
    L5: string;
    L6: string;
    L7: string;
    L8: string;
};
export declare type RequiredThemeProps = {
    colors: RequiredThemeColors;
    shadows: RequiredThemeShadows;
    typography: RequiredThemeTextSize;
    layers: RequiredThemeLayers;
};
export declare const defaultTheme: RequiredThemeProps;
declare const styled: styledComponents.ThemedBaseStyledInterface<RequiredThemeProps>, ServerStyleSheet: typeof styledComponents.ServerStyleSheet, StyleSheetManager: typeof styledComponents.StyleSheetManager, createGlobalStyle: <P extends object = {}>(first: styledComponents.CSSObject | TemplateStringsArray | styledComponents.InterpolationFunction<styledComponents.ThemedStyledProps<P, RequiredThemeProps>>, ...interpolations: styledComponents.Interpolation<styledComponents.ThemedStyledProps<P, RequiredThemeProps>>[]) => styledComponents.GlobalStyleComponent<P, RequiredThemeProps>, css: styledComponents.BaseThemedCssFunction<RequiredThemeProps>, isStyledComponent: typeof styledComponents.isStyledComponent, keyframes: (strings: TemplateStringsArray | styledComponents.CSSKeyframes, ...interpolations: styledComponents.SimpleInterpolation[]) => styledComponents.Keyframes, withTheme: styledComponents.BaseWithThemeFnInterface<RequiredThemeProps>;
declare const ThemeConsumer: React.ExoticComponent<React.ConsumerProps<RequiredThemeProps>>;
declare const ThemeContext: React.Context<RequiredThemeProps>;
declare const ThemeProvider: React.ComponentClass<styledComponents.ThemeProviderProps<RequiredThemeProps, RequiredThemeProps>, any>;
export default styled;
export { ServerStyleSheet, StyleSheetManager, ThemeConsumer, ThemeContext, ThemeProvider, createGlobalStyle, css, isStyledComponent, keyframes, withTheme };
