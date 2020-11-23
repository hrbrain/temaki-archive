import * as React from 'react';
export declare type Value = string;
export declare type MenuItem = {
    label: string;
    value: Value;
    children?: MenuItem[];
};
export declare type Props = {
    className?: string;
    menuItems: MenuItem[];
    selectedValues: string[];
    width?: string;
    onClickItem: (value: Value) => void;
};
export declare const Component: React.NamedExoticComponent<Props>;
