import * as React from 'react';
import * as IconFiles from '~/lib/iconFiles';
declare type Props = {
    label: string;
    variant: 'info' | 'warning' | 'progress';
    color?: string;
    text?: string;
    icon?: IconFileKeys;
};
declare type IconFileKeys = keyof typeof IconFiles.icons;
export declare const Component: React.NamedExoticComponent<Props>;
export {};
