import * as React from 'react';
import 'react-dates/initialize';
import 'moment/locale/ja';
/**
 * Utils
 */
/**
 * Component
 */
declare type Props = {
    displayFormat: string;
    numberOfMonths: number;
    monthFormat: string;
    onDateChange: () => void;
    onFocusChange: () => void;
};
export declare const Component: React.NamedExoticComponent<Props>;
export {};
