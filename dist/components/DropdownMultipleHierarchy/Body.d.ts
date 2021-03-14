import * as React from 'react';
import * as Menu from './Menu';
declare type Props = {
    items: Menu.Item[];
    values: Menu.Value[];
    onClick: (e: React.MouseEvent) => void;
    placeholder?: string;
    disabled?: boolean;
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
