import * as React from 'react';
declare type Props = {
    type?: string;
    value?: string;
    diff?: boolean;
    name?: string;
    unit?: string;
    placeholder?: string;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    errored?: boolean;
    errorMessage?: string;
    onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    className?: string;
    step?: number;
};
export declare const Presenter: React.FC<Props>;
export {};
