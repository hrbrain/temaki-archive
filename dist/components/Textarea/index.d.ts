import * as React from 'react';
/**
 * Component
 */
declare type Props = {
    value?: string;
    name?: string;
    placeholder?: string;
    minRows?: number;
    maxRows?: number;
    errored?: boolean;
    errorMessage?: string;
    onChange?: (value: string) => void;
    onChangeNative?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onFocus?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onBlur?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    diff?: boolean;
    className?: string;
};
export declare const Component: React.NamedExoticComponent<Props>;
export {};
