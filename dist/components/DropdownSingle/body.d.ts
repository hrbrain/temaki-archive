import * as React from 'react';
import * as ItemList from './ItemList';
/**
 * Component
 */
declare type Props = {
    items: ItemList.Item[];
<<<<<<< HEAD
    selected: ItemList.Value;
    isError: boolean;
    width: number;
    isVisible: boolean;
    handleClick?: () => void;
    type: 'borderless' | 'default';
=======
    value: ItemList.Value;
    onClick: () => void;
    placeholder?: string;
    isError?: boolean;
    isMenuVisible?: boolean;
>>>>>>> refactor: DropdownSingle
};
export declare const Component: React.NamedExoticComponent<Props>;
export {};
