import * as React from 'react';
import * as ItemList from './ItemList';
/**
 * Component
 */
export declare type Item = ItemList.Item;
declare type Props = {
    items: ItemList.Item[];
    value: ItemList.Value;
    type: 'default' | 'borderless';
    onChange: (value: ItemList.Value) => void;
    placeholder?: string;
    isError?: boolean;
    width?: string;
    className?: string;
    defaultExpanded?: boolean;
};
export declare const Component: React.NamedExoticComponent<Props>;
export {};
