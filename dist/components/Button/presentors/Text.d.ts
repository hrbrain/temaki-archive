import * as React from 'react';
import * as Index from '../index';
/**
 * Component
 */
declare type Props = {
    svg?: string;
    colorType?: Index.TextColorTypeProp;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    nativeType?: 'submit' | 'reset' | 'button';
};
export declare const Component: React.FC<Props>;
export {};
