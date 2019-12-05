import * as React from 'react';
import * as Button from '~/components/Button';
declare type Props = {
    title: string;
    buttons?: (Button.Props & {
        text: string;
    })[];
    onClose: () => void;
};
export declare const Component: React.FC<Props>;
export {};
