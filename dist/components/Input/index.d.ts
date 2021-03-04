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
declare type CommonProps<T> = T extends {
    format: infer InferFormat;
    value: infer InferValue;
    onChange: (arg: infer InferArg) => void;
} ? {
    name?: string;
    unit?: string;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onChangeNative?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    diff?: boolean;
    placeholder?: string;
    disabled?: boolean;
    errored?: boolean;
    errorMessage?: string;
    onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    className?: string;
    decimalPlace?: number | null;
    format: InferFormat;
    value: InferValue;
    onChange: (arg: InferArg) => void;
    type?: string;
} : never;
declare type TextProps = CommonProps<{
    format: typeof TEXT;
    value: StringValue | null;
    onChange: (value: StringValue) => void;
}>;
declare type NumberProps = CommonProps<{
    format: typeof NUMBER;
    value: NumberValue | null;
    onChange: (value: NumberValue) => void;
    type?: typeof NUMBER;
}>;
declare type Props = TextProps | NumberProps;
export declare const Component: React.NamedExoticComponent<Props>;
export {};
