/// <reference types="styled-components" />
import * as React from 'react';
import { RequiredThemeProps } from '~/modules/theme';
declare type Props = {
    scale: number;
    step?: number;
    min?: number;
    max?: number;
    onChangeScale: (scale: number) => void;
    theme: RequiredThemeProps;
};
export declare const Component: React.ForwardRefExoticComponent<Pick<Props, "max" | "min" | "scale" | "step" | "onChangeScale"> & {
    theme?: RequiredThemeProps | undefined;
}>;
export {};
