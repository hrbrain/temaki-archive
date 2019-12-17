import * as React from 'react';
/**
 * Component
 */
declare const DEFAULT: "default";
declare const BUTTONLESS: "buttonless";
declare type Props = {
    label: string;
    text?: string;
    variant: 'info' | 'warning';
} & ({
    type: typeof DEFAULT;
    onClickClose: () => void;
} | {
    type: typeof BUTTONLESS;
});
export declare const Component: React.NamedExoticComponent<Props>;
export {};
