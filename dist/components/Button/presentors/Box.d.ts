import * as React from 'react';
import * as Index from '../index';
/**
 * Component
 */
declare type Props = {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
} & OuterProps;
export declare const Component: React.FC<Props>;
/**
 * Styles
 */
declare type OuterProps = {
    height?: string;
    width?: string;
    colorType: Index.BoxColorTypeProp;
};
export {};
