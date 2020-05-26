import * as React from 'react';
import * as ItemList from './itemList';
/**
 * Component
 */
declare type Props = {
    items: ItemList.Item[];
    values: ItemList.Value[];
    onClick: (e: React.MouseEvent) => void;
    placeholder?: string;
    isError?: boolean;
    diff?: boolean;
    width?: string;
    isMenuVisible?: boolean;
    searchValue: string;
    onChangeSearchValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeydown: (event: React.KeyboardEvent) => void;
    iconFile?: string;
    onClickIcon: (event: React.MouseEvent) => void;
};
export declare const Component: React.NamedExoticComponent<Props>;
export {};
