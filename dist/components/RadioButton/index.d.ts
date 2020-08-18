import * as React from 'react';
/**
 * Component
 */
declare type Props = {
    text: string;
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
    disabled?: boolean;
    checked?: boolean;
};
export declare const Component: React.NamedExoticComponent<Props>;
export {};
