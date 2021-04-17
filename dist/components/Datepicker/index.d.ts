import * as React from 'react';
import { RequiredThemeProps } from '~/modules/theme';
import 'react-dates/initialize';
import 'moment/locale/ja';
import * as Moment from 'moment';
export * from './utils';
export declare const Component: React.ForwardRefExoticComponent<{
    width: string;
    onChange: (date: Date | null) => void;
    disabled?: boolean | undefined;
    errored?: boolean | undefined;
    errorMessage?: string | undefined;
    date: Date | null;
    displayFormat?: string | undefined;
    monthFormat?: string | undefined;
    placeholderText?: string | undefined;
    selectedColor?: string | undefined;
    defaultHoverColor?: string | undefined;
    isOutsideRange?: ((day: Moment.Moment) => boolean) | undefined;
} & {
    theme?: RequiredThemeProps | undefined;
}>;
