import * as React from 'react';
import * as Index from '~/components/Button';
/**
 * Component
 */
export declare type ColorTypeProp = 'primary' | 'secondary' | 'destructive' | 'default';
declare type Props = {
    text: string;
    colorType: ColorTypeProp;
    className?: string;
} & OuterProps;
export declare const Component: React.NamedExoticComponent<Props>;
/**
 * Styles
 */
declare type OuterProps = {
    height?: string;
    width?: string;
    colorType: Index.BoxColorTypeProp;
};
export {};
