import * as React from 'react';
/**
 * Component
 */
declare type Props = {
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
    checked: boolean;
    text: {
        on: string;
        off: string;
    };
};
export declare const Component: React.NamedExoticComponent<Props>;
export {};
