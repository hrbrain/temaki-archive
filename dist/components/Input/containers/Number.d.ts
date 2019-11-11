import * as React from 'react';
import { ContainerType } from '~/types/utils';
import * as Input from '../index';
/**
 * Component
 */
declare type Props = {
    value?: number | null;
    onChange?: (value: Input.NumberValue) => void;
    onChangeNative?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
declare type InjectProps = {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: Input.StringValue;
    prevValue?: Input.StringValue;
};
export declare const Container: ContainerType<Props, InjectProps>;
export {};
