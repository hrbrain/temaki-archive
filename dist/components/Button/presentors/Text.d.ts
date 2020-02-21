import * as React from 'react';
import * as Index from '../index';
/**
 * Component
 */
declare type Props = {
    svg: string | undefined;
    colorType: Index.TextColorTypeProp | undefined;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    nativeType: 'submit' | 'reset' | 'button';
    className: string | undefined;
};
export declare const Component: React.FC<Props>;
export {};
