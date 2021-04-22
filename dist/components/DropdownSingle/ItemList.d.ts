import * as React from 'react';
declare type Props = {
    items: Item[];
    value: Value;
    onClickItem: (value: Value) => void;
    className?: string;
    isVisible?: boolean;
    onBlurSearchValue?: () => void;
};
export declare const Component: React.MemoExoticComponent<(props: Props) => JSX.Element>;
export declare type Item = {
    value: Value;
    text: string;
    textColor?: string;
    icon?: string;
    remarks?: string;
    disabled?: boolean;
};
export declare type Value = string;
export {};
