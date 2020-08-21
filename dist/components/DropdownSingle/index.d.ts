import * as React from 'react';
import * as ItemList from './ItemList';
/**
 * Component
 */
export declare type Item = ItemList.Item;
declare type Props = {
    items: ItemList.Item[];
    value: ItemList.Value;
    disabled?: boolean;
    type: 'default' | 'borderless';
    onChange: (value: ItemList.Value) => void;
    onClickBody?: (event: React.MouseEvent) => void;
    placeholder?: string;
    isError?: boolean;
    width?: string;
    diff?: boolean;
    className?: string;
    defaultExpanded?: boolean;
    errorMessage?: string;
};
export declare const Component: React.NamedExoticComponent<Props>;
export {};
