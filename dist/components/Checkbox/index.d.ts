import * as React from 'react';
/**
 * Component
 */
declare type Props = {
    text?: string;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    checked?: boolean;
    indeterminate?: boolean;
};
export declare const Component: React.NamedExoticComponent<Props>;
export {};
