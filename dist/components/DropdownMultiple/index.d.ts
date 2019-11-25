import * as React from 'react';
import * as ItemList from './itemList';
/**
 * Component
 */
export declare type Item = ItemList.Item;
declare type Props = {
    placeholder: string;
    items: ItemList.Item[];
    selected: ItemList.Value[];
    isError: boolean;
    width: number;
    onClickItem: (value: ItemList.Value) => void;
    className?: string;
};
export declare const Component: React.NamedExoticComponent<Props>;
export {};
