import * as React from 'react';
import * as ItemList from '../ItemList';
/**
 * Component
 */
declare type Props = {
    items: ItemList.Item[];
    value: ItemList.Value;
    searchValue?: string;
    onClick: (e: React.MouseEvent) => void;
    onClickOutside: () => void;
    onClickMenuItem: (index: string) => void;
    isError?: boolean;
    isMenuVisible?: boolean;
    showTextBySelected: (items: ItemList.Item[], selected: ItemList.Value) => string;
    width?: string;
    diff?: boolean;
    className?: string;
};
export declare const Component: React.NamedExoticComponent<Props>;
export {};
