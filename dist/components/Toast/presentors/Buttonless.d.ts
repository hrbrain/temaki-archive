import * as React from 'react';
import * as IconFiles from '~/lib/iconFiles';
declare type Variant = 'warning' | 'info' | 'progress';
declare type Props = {
    label: string;
    variant: Variant;
    color?: string;
    text?: string;
    icon?: IconFileKeys;
};
declare type IconFileKeys = keyof typeof IconFiles.icons;
export declare const Component: React.NamedExoticComponent<Props>;
export {};
