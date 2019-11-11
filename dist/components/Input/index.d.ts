import * as React from 'react';
/**
 * Utils
 */
export declare type NumberValue = number | undefined | null;
export declare type StringValue = string | undefined | null;
declare const TEXT: "text";
declare const NUMBER: "number";
/**
 * Component
 */
declare type Props = {
    type?: string;
    name?: string;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onChangeNative?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    errored?: boolean;
    errorMessage?: string;
} & ({
    format: typeof TEXT;
    value?: StringValue;
    prevValue?: StringValue;
    onChange?: (value: StringValue) => void;
} | {
    format: typeof NUMBER;
    value?: NumberValue;
    prevValue?: NumberValue;
    onChange?: (value: NumberValue) => void;
});
export declare const Component: React.NamedExoticComponent<Props>;
export {};
