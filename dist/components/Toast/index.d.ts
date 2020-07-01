import * as React from 'react';
/**
 * Component
 */
declare const DEFAULT: "default";
declare const BUTTONLESS: "buttonless";
declare type Props = {
    label: string;
    text?: string;
    color?: string;
    icon?: string;
    variant: 'info' | 'warning' | 'progress';
} & ({
    type: typeof DEFAULT;
    onClickClose: () => void;
} | {
    type: typeof BUTTONLESS;
});
export declare const Component: React.NamedExoticComponent<Props>;
export {};
