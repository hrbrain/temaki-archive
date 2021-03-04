import * as React from 'react';
/**
 * Component
 */
export declare type ColorTypeProp = 'primary' | 'secondary' | 'destructive' | 'default';
declare type Props = {
    text: string;
    colorType: ColorTypeProp;
    height?: string;
    width?: string;
    className?: string;
} & OuterProps;
export declare const Component: React.NamedExoticComponent<Props>;
/**
 * Styles
 */
declare type OuterProps = {
    height?: string;
    width?: string;
    colorType: ColorTypeProp;
};
export {};
