import * as React from 'react';
/**
 * Component
 */
declare type Props = {
    items: Item[];
    selected: Value;
    onClickItem: (value: Value) => void;
    className?: string;
    isVisible: boolean;
    width: number;
};
export declare const Component: React.NamedExoticComponent<Props>;
/**
 * ItemComponent
 */
export declare type Item = {
    value: Value;
    text: string;
};
export declare type Value = string;
export {};
