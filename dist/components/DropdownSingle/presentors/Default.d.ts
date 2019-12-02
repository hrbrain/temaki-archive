import * as React from 'react';
import * as ItemList from '../ItemList';
declare type Props = {
    items: ItemList.Item[];
    value: ItemList.Value;
    onClick: () => void;
    onClickOutside: () => void;
    onClickMenuItem: (value: ItemList.Value) => void;
    isError?: boolean;
    isMenuVisible: boolean;
    showTextBySelected: (items: ItemList.Item[], selected: ItemList.Value) => string;
    width?: string;
    className?: string;
};
export declare const Component: React.NamedExoticComponent<Props>;
export {};
