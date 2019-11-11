import * as React from 'react';
/**
 * Component
 */
declare type Props = {
    type: 'meatball' | 'kebab';
    position: 'top' | 'bottom';
    listItems: Item[];
    onClick: (e: React.MouseEvent) => void;
};
export declare type Item = {
    item: string;
    onClick: (e: React.MouseEvent) => void;
};
export declare const Component: React.NamedExoticComponent<Props>;
export {};
