import * as React from 'react';
import { RequiredThemeProps } from '~/modules/theme';
export declare const Component: React.ForwardRefExoticComponent<{
    text: string;
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
    disabled?: boolean | undefined;
    checked?: boolean | undefined;
} & {
    theme?: RequiredThemeProps | undefined;
}>;
