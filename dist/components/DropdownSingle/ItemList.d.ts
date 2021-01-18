import * as React from 'react';
/**
 * Component
 */
declare type Props = {
    items: Item[];
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
export declare type Item = {
    value: Value;
    text: string;
    remarks?: string;
    disabled?: boolean;
};
export declare type Value = string;
export {};
