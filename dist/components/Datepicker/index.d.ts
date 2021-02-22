import * as React from 'react';
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
    selectedColor?: string;
    defaultHoverColor?: string;
    disabled?: boolean;
};
export declare const Component: React.NamedExoticComponent<Props>;
export {};
