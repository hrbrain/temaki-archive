import * as React from 'react';
/**
 * Component
 */
declare type Props = {
    items: ItemType[];
    value: Value;
    onClickItem: (value: Value) => void;
    className?: string;
    isVisible?: boolean;
    onBlurSearchValue?: () => void;
};
export declare const Component: React.MemoExoticComponent<(props: Props) => JSX.Element>;
/**
 * ItemComponent
 */
export declare type ItemType = {
    value: Value;
    text: string;
    remarks?: string;
    disabled?: boolean;
};
export declare type Value = string;
export {};
