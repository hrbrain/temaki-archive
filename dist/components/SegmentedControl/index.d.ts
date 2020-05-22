import * as React from 'react';
/**
 * Component
 */
export declare type Props = {
    items: Item[];
    selectedIndex: number;
    onClickTab: (index: number) => void;
    className: string;
    itemsWidth?: string;
};
export declare const Component: React.NamedExoticComponent<Props>;
export declare type Item = {
    text: string;
};
