import * as React from 'react';
import * as ItemList from '../ItemList';
/**
 * Component
 */
declare type Props = {
    placeholder: string;
    items: ItemList.Item[];
    selected: ItemList.Value;
    isError: boolean;
    width: number;
    onClickItem: (value: ItemList.Value) => void;
    isVisible: boolean;
    handleClick: () => void;
    showTextBySelected: (items: ItemList.Item[], selected: ItemList.Value, placeholder: string) => string;
};
export declare const Component: React.NamedExoticComponent<Props>;
export {};
