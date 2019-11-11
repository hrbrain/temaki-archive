import * as React from 'react';
/**
 * Props
 */
declare type Props = {
    onChange: (file: File) => void;
    onClick: (e: React.MouseEvent) => void;
    onDragOver: (file: File) => void;
    onDrop: (file: File) => void;
    accept?: string;
};
export declare const Component: React.NamedExoticComponent<Props>;
export {};
