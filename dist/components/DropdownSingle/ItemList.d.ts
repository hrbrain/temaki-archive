import * as React from 'react';
import * as Icon from '~/components/Icon';
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
    icon?: Omit<Icon.Props, 'size'>;
    remarks?: string;
    disabled?: boolean;
};
export declare type Value = string;
export {};
