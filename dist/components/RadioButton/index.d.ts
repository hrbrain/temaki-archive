/// <reference types="styled-components" />
import * as React from 'react';
import { RequiredThemeProps } from '~/modules/theme';
declare type Props = {
    text: string;
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
    disabled?: boolean;
    checked?: boolean;
    theme: RequiredThemeProps;
};
export declare const Component: React.ForwardRefExoticComponent<Pick<Props, "text" | "onClick" | "disabled" | "checked"> & {
    theme?: RequiredThemeProps | undefined;
}>;
export {};
