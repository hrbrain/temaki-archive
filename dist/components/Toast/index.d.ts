import * as React from 'react';
/**
 * Component
 */
declare const DEFAULT: "default";
declare const BUTTONLESS: "buttonless";
export declare type Variant = 'warning' | 'info' | 'progress';
declare type Props = {
    label: string;
    text?: string;
    color?: string;
    icon?: string;
    variant: Variant;
} & ({
    type: typeof DEFAULT;
    onClickClose: () => void;
} | {
    type: typeof BUTTONLESS;
});
export declare const Component: React.NamedExoticComponent<Props>;
export {};
