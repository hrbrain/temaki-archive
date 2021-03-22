import * as React from 'react';
import * as Menu from './Menu';
export declare type Item = Menu.Item;
export declare type Props = {
    items: Menu.Item[];
    values: Menu.Value[];
    onChange: (value: Menu.Value[]) => void;
    width?: string;
    placeholder?: string;
    disabled?: boolean;
    isError?: boolean;
    diff?: boolean;
    defaultExpanded?: boolean;
    className?: string;
    errorMessage?: string;
};
export declare const Component: React.NamedExoticComponent<Props>;
