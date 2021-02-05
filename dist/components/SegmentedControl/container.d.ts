import * as React from 'react';
declare type Types = {
    /**
     * divにonClickする
     */
    default: 'default';
    /**
     * react-router-domのNavLinkを利用する
     */
    link: 'link';
};
export declare type CommonProps = {
    className?: string;
    itemsWidth?: string;
};
export declare type DefaultProps = CommonProps & {
    type?: Types['default'];
    items: {
        text: string;
    }[];
    selectedIndex: number;
    onClickTab: (index: number) => void;
};
export declare type LinkProps = CommonProps & {
    type?: Types['link'];
    items: {
        text: string;
        to: string;
    }[];
};
declare type Props = DefaultProps | LinkProps;
export declare const Component: React.NamedExoticComponent<Props>;
export declare const commonStyle: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<{
    itemWidth?: string | undefined;
}, import("../../modules/theme").RequiredThemeProps>>;
export declare const selectedStyle: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("../../modules/theme").RequiredThemeProps>>;
export {};
