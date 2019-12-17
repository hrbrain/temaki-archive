import * as React from 'react';
/**
 * Component
 */
declare type Props = {
    label: string;
    text?: string;
    type: 'info' | 'warning';
    onClickClose: () => void;
};
export declare const Component: React.NamedExoticComponent<Props>;
export {};
