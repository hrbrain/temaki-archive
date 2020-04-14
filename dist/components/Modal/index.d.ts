import * as React from 'react';
import * as Button from '~/components/Button';
declare type Props = {
    isOpen: boolean;
    title: string;
    buttons?: (Button.Props & {
        text: string;
    })[];
    onClose: () => void;
};
export declare const Component: React.FC<Props>;
export {};
