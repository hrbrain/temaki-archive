/// <reference types="styled-components" />
import * as React from 'react';
import { RequiredThemeProps } from '~/modules/theme';
declare type Props = {
    scale: number;
    onChangeScale: (scale: number) => void;
    theme: RequiredThemeProps;
};
export declare const Component: React.ForwardRefExoticComponent<Pick<Props, "scale" | "onChangeScale"> & {
    theme?: RequiredThemeProps | undefined;
}>;
export {};
