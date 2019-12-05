/// <reference types="react" />
import * as _Button from './components/Button/index';
import { Item as _DropdownSingleItem } from './components/DropdownSingle/index';
import { Item as _DropdownMultipleItem } from './components/DropdownMultiple/index';
import * as _MeatballMenu from './components/MeatballKebabMenu';
import { RequiredThemeProps as _RequiredThemeProps } from './modules/theme';
export declare const Text: import("react").FunctionComponent<{}>;
export declare const Icon: (props: {
    svg: string;
    size: string;
    color?: string | undefined;
    className?: string | undefined;
}) => JSX.Element;
export declare const Checkbox: import("react").NamedExoticComponent<{
    text?: string | undefined;
    onClick?: ((e: import("react").MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    checked?: boolean | undefined;
    indeterminate?: boolean | undefined;
}>;
export declare const Input: import("react").NamedExoticComponent<({
    type?: string | undefined;
    name?: string | undefined;
    onBlur?: ((e: import("react").FocusEvent<HTMLInputElement>) => void) | undefined;
    onChangeNative?: ((e: import("react").ChangeEvent<HTMLInputElement>) => void) | undefined;
    diff?: boolean | undefined;
    placeholder?: string | undefined;
    errored?: boolean | undefined;
    errorMessage?: string | undefined;
} & {
    format: "text";
    value: string;
    onChange: (value: string) => void;
}) | ({
    type?: string | undefined;
    name?: string | undefined;
    onBlur?: ((e: import("react").FocusEvent<HTMLInputElement>) => void) | undefined;
    onChangeNative?: ((e: import("react").ChangeEvent<HTMLInputElement>) => void) | undefined;
    diff?: boolean | undefined;
    placeholder?: string | undefined;
    errored?: boolean | undefined;
    errorMessage?: string | undefined;
} & {
    format: "number";
    value: number;
    onChange: (value: number) => void;
})>;
export declare const Button: import("react").FunctionComponent<_Button.Props>;
export declare const buttonShapeType: {
    box: "box";
    circle: "circle";
    text: "text";
};
export declare const Toast: import("react").NamedExoticComponent<{
    label: string;
    text?: string | undefined;
    type: "info" | "warning";
}>;
export declare const SegmentedControl: import("react").NamedExoticComponent<import("./components/SegmentedControl").Props>;
export declare const Tooltip: import("react").NamedExoticComponent<{
    text: string;
    direction?: "top" | "right" | "bottom" | "left" | undefined;
}>;
export declare const RadioButton: import("react").NamedExoticComponent<{
    text: string;
    onClick: (e: import("react").MouseEvent<HTMLDivElement, MouseEvent>) => void;
    checked?: boolean | undefined;
}>;
export declare const icons: {
    AddIcon: string;
    AnalyzeIcon: string;
    ArrowDown: string;
    Attachment: string;
    Avatar: string;
    BlackBoard: string;
    Calendar: string;
    CheckBoxAll: string;
    CheckBoxOn: string;
    CheckBoxOff: string;
    ChevronUp: string;
    ChevronDown: string;
    ChevronLeft: string;
    ChevronRight: string;
    Close: string;
    Company: string;
    Copy: string;
    Delete: string;
    Display: string;
    Download: string;
    Drag: string;
    Dragdrop: string;
    DropdownOff: string;
    DropdownOn: string;
    Edit: string;
    Event: string;
    Excel: string;
    FilterApply: string;
    Filters: string;
    GlobalMenu: string;
    Group: string;
    Hamburger: string;
    Home: string;
    Index: string;
    Information: string;
    Help: string;
    Key: string;
    Like: string;
    Link: string;
    List: string;
    Lock: string;
    MenuH: string;
    MenuV: string;
    MoveDown: string;
    MoveUp: string;
    Notifiacation: string;
    Phone: string;
    Pin: string;
    RadioOff: string;
    RadioOn: string;
    Redo: string;
    Refresh: string;
    Remove: string;
    Search: string;
    Settings: string;
    SingleCheck: string;
    Sort: string;
    SortList: string;
    SortUpDown: string;
    SortItems: string;
    Staff: string;
    Tag: string;
    Text: string;
    Time: string;
    Transition: string;
    TreeToggle: string;
    Undo: string;
    Url: string;
    Warning: string;
};
export declare const defaultTheme: _RequiredThemeProps;
export declare type RequiredThemeProps = _RequiredThemeProps;
export declare const Switch: import("react").NamedExoticComponent<{
    onClick: (e: import("react").MouseEvent<HTMLDivElement, MouseEvent>) => void;
    checked: boolean;
    text: {
        on: string;
        off: string;
    };
}>;
export declare const Textarea: import("react").NamedExoticComponent<{
    value?: string | undefined;
    placeholder?: string | undefined;
    minRows?: number | undefined;
    maxRows?: number | undefined;
    errored?: boolean | undefined;
    onChange?: ((e: import("react").ChangeEvent<HTMLTextAreaElement>) => void) | undefined;
    onFocus?: ((e: import("react").ChangeEvent<HTMLTextAreaElement>) => void) | undefined;
    onBlur?: ((e: import("react").ChangeEvent<HTMLTextAreaElement>) => void) | undefined;
}>;
export declare const DropdownSingle: import("react").NamedExoticComponent<{
    items: import("./components/DropdownSingle/ItemList").Item[];
    value: string;
    type: "default" | "borderless";
    onChange: (value: string) => void;
    placeholder?: string | undefined;
    isError?: boolean | undefined;
    width?: string | undefined;
    className?: string | undefined;
    defaultExpanded?: boolean | undefined;
}>;
export declare type DropdownSingleItem = _DropdownSingleItem;
export declare const DropdownMultiple: import("react").NamedExoticComponent<{
    items: import("./components/DropdownMultiple/itemList").Item[];
    values: string[];
    onChange: (value: string) => void;
    width?: string | undefined;
    placeholder?: string | undefined;
    isError?: boolean | undefined;
    defaultExpanded?: boolean | undefined;
    className?: string | undefined;
}>;
export declare type DropdownMultipleItem = _DropdownMultipleItem;
export declare const MeatballMenu: import("react").NamedExoticComponent<{
    type: "meatball" | "kebab";
    position: "top" | "bottom";
    listItems: _MeatballMenu.Item[];
    onClick: (e: import("react").MouseEvent<Element, MouseEvent>) => void;
}>;
export declare type MeatballMenuItem = _MeatballMenu.Item;
export declare const FileUploader: import("react").NamedExoticComponent<{
    onChange?: ((file: File) => void) | undefined;
    fileName: string | null;
    accept?: string | undefined;
    width?: string | undefined;
    className?: string | undefined;
}>;
export declare const DatePicker: import("react").NamedExoticComponent<{
    displayFormat?: string | undefined;
    monthFormat?: string | undefined;
    date: Date | null;
    onChange: (date: Date | null) => void;
    width: string;
}>;
export declare const DateRangePicker: import("react").NamedExoticComponent<{
    displayFormat?: string | undefined;
    monthFormat?: string | undefined;
    startDate: Date | null;
    endDate: Date | null;
    onChange: (startDate: Date | null, endDate: Date | null) => void;
    width: string;
}>;
export declare const Modal: import("react").FunctionComponent<{
    title: string;
    buttons?: (({
        onClick?: ((e: import("react").MouseEvent<HTMLButtonElement, MouseEvent>) => void | Promise<void>) | undefined;
    } & {
        type: "box";
        colorType?: "primary" | "primary ghost" | "secondary" | "secondary ghost" | "destructive" | "destructive ghost" | "disabled" | undefined;
        height?: string | undefined;
        width?: string | undefined;
    } & {
        text: string;
    }) | ({
        onClick?: ((e: import("react").MouseEvent<HTMLButtonElement, MouseEvent>) => void | Promise<void>) | undefined;
    } & {
        type: "circle";
        colorType?: "primary" | "secondary" | undefined;
        svg?: string | undefined;
    } & {
        text: string;
    }) | ({
        onClick?: ((e: import("react").MouseEvent<HTMLButtonElement, MouseEvent>) => void | Promise<void>) | undefined;
    } & {
        type: "text";
        colorType?: "primary" | "destructive" | undefined;
        svg?: string | undefined;
    } & {
        text: string;
    }))[] | undefined;
    onClose: () => void;
}>;
