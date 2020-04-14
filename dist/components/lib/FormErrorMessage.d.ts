import * as React from 'react';
declare type Props = {
    errored?: boolean;
    message?: string;
};
export declare const Component: {
    (props: Props): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
    displayName: string;
};
export {};
