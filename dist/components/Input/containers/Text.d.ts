import * as React from 'react';
import { ContainerType } from '~/types/utils';
import * as Input from '../index';
/**
 * Component
 */
declare type Props = {
    value?: Input.StringValue;
    name?: string;
    onChange?: (value: Input.StringValue) => void;
    onChangeNative?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
declare type InjectProps = {
    value?: Input.StringValue;
    prevValue?: Input.StringValue;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export declare const Container: ContainerType<Props, InjectProps>;
export {};
