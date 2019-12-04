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
    displayFormat?: string;
    monthFormat?: string;
    date?: Date;
    onChange: (date: Date | null) => void;
    width: string;
};
export declare const Component: React.NamedExoticComponent<Props>;
export {};
