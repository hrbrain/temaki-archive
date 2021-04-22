import * as React from 'react';
import * as ItemList from '../ItemList';
declare type Props = {
    items: ItemList.Item[];
    value: ItemList.Value;
    searchValue: string;
    onClick: (e: React.MouseEvent) => void;
    onClickOutside: () => void;
    onClickMenuItem: (index: string) => void;
    isError?: boolean;
    isMenuVisible?: boolean;
    maybeShowIconBySelected: (items: ItemList.Item[], selected: ItemList.Value) => JSX.Element | null;
    showTextBySelected: (items: ItemList.Item[], selected: ItemList.Value) => JSX.Element | null;
    width?: string;
    diff?: boolean;
    className?: string;
};
export declare const Component: React.NamedExoticComponent<Props>;
export {};
