import * as React from 'react';
import * as Menu from './Menu';
/**
 * Component
 */
declare type Props = {
    items: Menu.Item[];
    values: Menu.Value[];
    onClick: (e: React.MouseEvent) => void;
    onClickRemove?: (value: Menu.Value) => void;
    placeholder?: string;
    isError?: boolean;
    diff?: boolean;
    width?: string;
    isMenuVisible?: boolean;
    searchValue: string;
    onChangeSearchValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeydown: (event: React.KeyboardEvent) => void;
    onClickIcon: (event: React.MouseEvent) => void;
};
export declare const Component: React.NamedExoticComponent<Props>;
export {};
