import * as React from 'react';
import * as Index from '../index';
/**
 * Component
 */
declare type Props = {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    svg: string | undefined;
    colorType: string | undefined;
    isLoading: boolean | undefined;
    type: 'submit' | 'reset' | 'button';
    className: string | undefined;
    dataTest: string | undefined;
} & OuterProps;
export declare const Component: ({ svg, ...props }: Props) => JSX.Element;
/**
 * Styles
 */
declare type OuterProps = {
    colorType: Index.CircleColorTypeProp;
};
export {};
