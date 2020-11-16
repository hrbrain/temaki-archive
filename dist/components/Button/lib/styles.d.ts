import { RequiredThemeProps } from '~/modules/theme';
declare type CreateCSSFromColorType = {
    base: string;
    hovered: string;
    activated: string;
    text: string;
    border?: string | null;
};
export declare const createCSSFromColorType: ({ base, hovered, activated, text, border }: CreateCSSFromColorType) => string;
export declare const buttonBaseMixin = "\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-style: none;\n    padding: 0;\n    cursor: pointer;\n    box-shadow: none;\n    outline: none;\n";
export declare const rippleEffectMixin: ({ theme }: {
    theme: RequiredThemeProps;
}) => string;
export {};
