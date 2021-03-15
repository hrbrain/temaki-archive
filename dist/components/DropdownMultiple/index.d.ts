import * as React from 'react';
import * as ItemList from './itemList';
export declare type Item = ItemList.Item;
declare type Props = {
    items: ItemList.Item[];
    values: ItemList.Value[];
    onChange: (value: ItemList.Value[]) => void;
    onClickRemove?: (index: number) => void;
    width?: string;
    placeholder?: string;
    disabled?: boolean;
    isError?: boolean;
    diff?: boolean;
    defaultExpanded?: boolean;
    className?: string;
    errorMessage?: string;
};
export declare const Component: React.NamedExoticComponent<Props>;
export {};
