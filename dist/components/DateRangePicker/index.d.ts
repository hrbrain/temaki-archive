import * as React from 'react';
import * as moment from 'moment';
import 'react-dates/initialize';
import 'moment/locale/ja';
/**
 * Component
 */
declare type Props = {
    displayFormat: string;
    numberOfMonths: number;
    monthFormat: string;
    onChange: (startDate: moment.Moment, endDate: moment.Moment) => void;
};
export declare const Component: React.NamedExoticComponent<Props>;
export {};
