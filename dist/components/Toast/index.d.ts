import * as React from 'react';
/**
 * Component
 */
declare type Props = {
    label: string;
    text?: string;
    type: 'info' | 'warning';
    index: number;
    onClickClose: (index: number) => void;
};
export declare const Component: React.NamedExoticComponent<Props>;
export {};
