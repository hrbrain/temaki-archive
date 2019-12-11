import * as React from 'react';
/**
 * Component
 */
declare type Props = {
    value?: string;
    placeholder?: string;
    minRows?: number;
    maxRows?: number;
    errored?: boolean;
    onChange?: (value: string) => void;
    onChangeNative?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onFocus?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onBlur?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};
declare const Component: React.NamedExoticComponent<Props>;
export { Component };
