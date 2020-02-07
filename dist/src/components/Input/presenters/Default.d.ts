import * as React from 'react';
declare type Props = {
    type?: string;
    value?: string;
    diff?: boolean;
    name?: string;
    placeholder?: string;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    errored?: boolean;
    errorMessage?: string;
};
export declare const Presenter: React.FC<Props>;
export {};
