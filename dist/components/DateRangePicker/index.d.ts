import * as React from 'react';
import 'react-dates/initialize';
import 'moment/locale/ja';
/**
 * Component
 */
declare type Props = {
    displayFormat?: string;
    monthFormat?: string;
    startDate: Date | null;
    endDate: Date | null;
    onChange: (startDate: Date | null, endDate: Date | null) => void;
    width: string;
    errored?: boolean;
    errorMessage?: string;
};
export declare const Component: React.NamedExoticComponent<Props>;
export {};
