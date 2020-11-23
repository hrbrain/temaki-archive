import * as React from 'react';
/**
 * Component
 */
export declare type Value = string;
export declare type Item = {
    label: string;
    value: Value;
    children?: Item[];
};
declare type Props = {
    items: Item[];
    selectedValues: string[];
    onClickItem: (value: Value) => void;
};
export declare const Component: React.FC<Props>;
export {};
