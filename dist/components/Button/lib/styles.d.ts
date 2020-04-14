import { RequiredThemeProps } from '~/modules/theme';
export declare const createCSSFromColorType: (base: string, hovered: string, activated: string, text: string, border?: string | null) => string;
export declare const buttonBaseMixin = "\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-style: none;\n    padding: 0;\n    cursor: pointer;\n    box-shadow: none;\n    outline: none;\n";
export declare const rippleEffectMixin: ({ theme }: {
    theme: RequiredThemeProps;
}) => string;
