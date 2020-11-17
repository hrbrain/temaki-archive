import * as React from 'react';
/**
 * Component
 */
declare type Props = {
    type: 'meatball' | 'kebab';
    position: 'top' | 'bottom';
    listItems: Item[];
    onClick: (e: React.MouseEvent<HTMLElement>) => void;
};
export declare type Item = {
    item: string;
    color?: 'default' | 'primary' | 'destructive';
    onClick: (e: React.MouseEvent<HTMLElement>) => void;
};
export declare const Component: React.NamedExoticComponent<Props>;
export {};
