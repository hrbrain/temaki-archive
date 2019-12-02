import * as React from 'react';
import * as ItemList from '../ItemList';
/**
 * Component
 */
declare type Props = {
    items: ItemList.Item[];
    value: ItemList.Value;
    onClick: () => void;
    onClickOutside: () => void;
    onClickMenuItem: (index: string) => void;
    isError?: boolean;
    isMenuVisible?: boolean;
    showTextBySelected: (items: ItemList.Item[], selected: ItemList.Value) => string;
    width?: string;
    className?: string;
};
export declare const Component: React.NamedExoticComponent<Props>;
export {};
