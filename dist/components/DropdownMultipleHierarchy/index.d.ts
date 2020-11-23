import * as React from 'react';
import * as Menu from './Menu';
export declare type Item = Menu.Item;
export declare type Props = {
    className?: string;
    items: Menu.Item[];
    selectedValues: string[];
    width?: string;
    onClickItem: (value: Menu.Value) => void;
};
export declare const Component: React.NamedExoticComponent<Props>;
