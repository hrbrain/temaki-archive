/// <reference types="styled-components" />
import * as React from 'react';
import { RequiredThemeProps } from '~/modules/theme';
declare type Props = {
    defaultValue: number;
    step: number;
    min: number;
    max: number;
    unit: string;
    theme: RequiredThemeProps;
    rate: number;
};
export declare const Component: React.ForwardRefExoticComponent<Pick<Props, "max" | "min" | "defaultValue" | "step" | "unit" | "rate"> & {
    theme?: RequiredThemeProps | undefined;
}>;
export {};
