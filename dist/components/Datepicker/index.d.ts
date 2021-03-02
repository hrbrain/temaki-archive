/// <reference types="styled-components" />
import * as React from 'react';
import { RequiredThemeProps } from '~/modules/theme';
import 'react-dates/initialize';
import 'moment/locale/ja';
/**
 * Component
 */
declare type Props = {
    displayFormat?: string;
    monthFormat?: string;
    date: Date | null;
    onChange: (date: Date | null) => void;
    width: string;
    errored?: boolean;
    errorMessage?: string;
    placeholderText?: string;
    disabled?: boolean;
    selectedColor?: string;
    defaultHoverColor?: string;
<<<<<<< HEAD
    theme: RequiredThemeProps;
};
export declare const Component: React.ForwardRefExoticComponent<Pick<Props, "width" | "onChange" | "disabled" | "date" | "errored" | "errorMessage" | "displayFormat" | "monthFormat" | "placeholderText" | "selectedColor" | "defaultHoverColor"> & {
    theme?: RequiredThemeProps | undefined;
}>;
=======
    isOutsideRange?: (day: any) => boolean;
};
export declare const Util: {
    isInclusivelyAfterDay: (date: Date) => (day: any) => boolean;
    isInclusivelyBeforeDay: (date: Date) => (day: any) => boolean;
};
export declare const Component: React.NamedExoticComponent<Props>;
>>>>>>> 9292782 (feature: Datepickerコンポーネントで範囲外の日時をクリックできないように追加)
export {};
