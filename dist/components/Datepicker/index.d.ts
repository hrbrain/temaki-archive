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
    theme: RequiredThemeProps;
};
export declare const Component: React.ForwardRefExoticComponent<Pick<Props, "width" | "onChange" | "disabled" | "date" | "errored" | "errorMessage" | "displayFormat" | "monthFormat" | "placeholderText" | "selectedColor" | "defaultHoverColor"> & {
    theme?: RequiredThemeProps | undefined;
}>;
export {};
