import * as React from 'react';
/**
 * Props
 */
declare type Props = {
    onChange?: (file: File) => void;
    fileName: string | null;
    accept?: string;
    width?: string;
    className?: string;
};
/**
 * Component
 */
export declare const Component: React.NamedExoticComponent<Props>;
export {};
