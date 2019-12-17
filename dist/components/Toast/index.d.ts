import * as React from 'react';
/**
 * Component
 */
declare type Props = {
    label: string;
    text?: string;
    variant: 'info' | 'warning';
    onClickClose: () => void;
    type: 'default' | 'buttonless';
};
export declare const Component: React.NamedExoticComponent<Props>;
export {};
