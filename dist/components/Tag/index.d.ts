import * as React from 'react';
export declare type ColorTypeProp = 'primary' | 'secondary' | 'destructive';
declare type Props = {
    text: string;
    colorType?: ColorTypeProp;
    className?: string;
} & OuterProps;
export declare const Component: React.NamedExoticComponent<Props>;
declare type OuterProps = {
    colorType?: ColorTypeProp;
};
export {};
