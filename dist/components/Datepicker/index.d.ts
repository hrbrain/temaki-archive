import * as React from 'react';
import * as moment from 'moment';
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
    onChange: (date: moment.Moment | null) => void;
};
export declare const Component: React.NamedExoticComponent<Props>;
export {};
