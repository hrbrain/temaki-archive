import * as React from 'react';
import * as Index from '../index';
/**
 * Component
 */
declare type Props = {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    svg?: string;
    colorType?: string;
    isLoading?: boolean;
} & OuterProps;
export declare const Component: ({ svg, ...props }: Props) => JSX.Element;
/**
 * Styles
 */
declare type OuterProps = {
    colorType: Index.CircleColorTypeProp;
};
export {};
