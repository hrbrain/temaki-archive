import * as React from 'react';
import { RequiredThemeProps } from '~/modules/theme';
export declare const Component: React.ForwardRefExoticComponent<{
    className?: string | undefined;
    max: number;
    min: number;
    defaultValue: number;
    step: number;
    unit: string;
    rate: number;
    onChangeValue: (value: number) => void;
} & {
    theme?: RequiredThemeProps | undefined;
}>;
