import * as React from 'react';
declare type Variant = 'warning' | 'info' | 'progress';
declare type Props = {
    label: string;
    text?: string;
    variant: Variant;
    onClickClose: () => void;
};
export declare const Component: React.NamedExoticComponent<Props>;
export {};
