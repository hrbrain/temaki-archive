import * as React from 'react';
/**
 * Utils
 */
export declare type NumberValue = number;
export declare type StringValue = string;
declare const TEXT: "text";
declare const NUMBER: "number";
/**
 * Component
 */
declare type Props = {
    type?: string;
    name?: string;
    unit?: string;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onChangeNative?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    diff?: boolean;
    placeholder?: string;
    errored?: boolean;
    errorMessage?: string;
    onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    className?: string;
    decimalPlace?: number | null;
    inputRef?: ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null;
} & ({
    format: typeof TEXT;
    value: StringValue;
    onChange: (value: StringValue) => void;
} | {
    format: typeof NUMBER;
    value: NumberValue;
    onChange: (value: NumberValue) => void;
    type?: typeof NUMBER;
});
export declare const Component: React.NamedExoticComponent<Props>;
export {};
