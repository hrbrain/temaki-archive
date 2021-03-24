import * as React from 'react';
export declare type Value = string;
export declare type Item = {
    label: string;
    value: Value;
    hierarchy: string;
};
declare type Props = {
    items: Item[];
    selectedValues: string[];
    onClickItem: (changedValue: Value) => void;
    searchValue: string;
    className?: string;
};
export declare const Component: React.FC<Props>;
export {};
