/// <reference types="react" />
/// <reference types="@emotion/core" />
/// <reference types="styled-components" />
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
    disabled?: boolean | undefined;
    indeterminate?: boolean | undefined;
}>;
export declare const Input: import("react").NamedExoticComponent<({
    type?: string | undefined;
    name?: string | undefined;
    unit?: string | undefined;
    onBlur?: ((e: import("react").FocusEvent<HTMLInputElement>) => void) | undefined;
    onChangeNative?: ((e: import("react").ChangeEvent<HTMLInputElement>) => void) | undefined;
    diff?: boolean | undefined;
    placeholder?: string | undefined;
    errored?: boolean | undefined;
    errorMessage?: string | undefined;
    onKeyUp?: ((e: import("react").KeyboardEvent<HTMLInputElement>) => void) | undefined;
    onKeyDown?: ((e: import("react").KeyboardEvent<HTMLInputElement>) => void) | undefined;
    className?: string | undefined;
    decimalPlace?: number | null | undefined;
} & {
    format: "text";
    value: string;
    onChange: (value: string) => void;
}) | ({
    type?: string | undefined;
    name?: string | undefined;
    unit?: string | undefined;
    onBlur?: ((e: import("react").FocusEvent<HTMLInputElement>) => void) | undefined;
    onChangeNative?: ((e: import("react").ChangeEvent<HTMLInputElement>) => void) | undefined;
    diff?: boolean | undefined;
    placeholder?: string | undefined;
    errored?: boolean | undefined;
    errorMessage?: string | undefined;
    onKeyUp?: ((e: import("react").KeyboardEvent<HTMLInputElement>) => void) | undefined;
    onKeyDown?: ((e: import("react").KeyboardEvent<HTMLInputElement>) => void) | undefined;
    className?: string | undefined;
    decimalPlace?: number | null | undefined;
} & {
    format: "number";
    value: number;
    onChange: (value: number) => void;
    type?: "number" | undefined;
})>;
export declare const Button: import("react").FunctionComponent<_Button.Props>;
export declare const buttonShapeType: {
    box: "box";
    circle: "circle";
    text: "text";
};
export declare const Toast: import("react").NamedExoticComponent<({
    label: string;
    text?: string | undefined;
    color?: string | undefined;
    icon?: string | undefined;
    variant: "progress" | "warning" | "info";
} & {
    type: "default";
    onClickClose: () => void;
}) | ({
    label: string;
    text?: string | undefined;
    color?: string | undefined;
    icon?: string | undefined;
    variant: "progress" | "warning" | "info";
} & {
    type: "buttonless";
})>;
export declare const SegmentedControl: import("react").NamedExoticComponent<import("./components/SegmentedControl").Props>;
export declare const Tooltip: import("react").NamedExoticComponent<{
    text: string;
    direction?: "left" | "right" | "top" | "bottom" | undefined;
}>;
export declare const RadioButton: import("react").ForwardRefExoticComponent<Pick<{
    text: string;
    onClick: (e: import("react").MouseEvent<HTMLDivElement, MouseEvent>) => void;
    disabled?: boolean | undefined;
    checked?: boolean | undefined;
    theme: _RequiredThemeProps;
}, "text" | "onClick" | "disabled" | "checked"> & {
    theme?: _RequiredThemeProps | undefined;
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
    CheckBoxDisabled: string;
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
    RadioDisabled: string;
    RadioOff: string;
    RadioOn: string;
    Redo: string;
    Refresh: string;
    Remove: string;
    Search: string;
    Settings: string;
    Share: string;
    SingleCheck: string;
    Sort: string;
    SortList: string;
    SortUpDown: string;
    SortItems: string;
    Subtract: string;
    Staff: string;
    Tag: string;
    Text: string;
    Time: string;
    Transition: string;
    TreeToggle: string;
    Undo: string;
    Union: string;
    Url: string;
    Warning: string;
    Loading: string;
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
    name?: string | undefined;
    placeholder?: string | undefined;
    minRows?: number | undefined;
    maxRows?: number | undefined;
    errored?: boolean | undefined;
    errorMessage?: string | undefined;
    onChange?: ((value: string) => void) | undefined;
    onChangeNative?: ((e: import("react").ChangeEvent<HTMLTextAreaElement>) => void) | undefined;
    onFocus?: ((e: import("react").ChangeEvent<HTMLTextAreaElement>) => void) | undefined;
    onBlur?: ((e: import("react").ChangeEvent<HTMLTextAreaElement>) => void) | undefined;
    diff?: boolean | undefined;
    className?: string | undefined;
}>;
export declare const DropdownSingle: import("react").NamedExoticComponent<{
    items: import("./components/DropdownSingle/ItemList").Item[];
    value: string;
    disabled?: boolean | undefined;
    type: "default" | "borderless";
    onChange: (value: string) => void;
    onClickBody?: ((event: import("react").MouseEvent<Element, MouseEvent>) => void) | undefined;
    placeholder?: string | undefined;
    isError?: boolean | undefined;
    width?: string | undefined;
    diff?: boolean | undefined;
    className?: string | undefined;
    defaultExpanded?: boolean | undefined;
    errorMessage?: string | undefined;
}>;
export declare type DropdownSingleItem = _DropdownSingleItem;
export declare const DropdownMultiple: import("react").NamedExoticComponent<{
    items: import("./components/DropdownMultiple/itemList").Item[];
    values: string[];
    onChange: (value: string[]) => void;
    onClickRemove?: ((index: number) => void) | undefined;
    width?: string | undefined;
    placeholder?: string | undefined;
    isError?: boolean | undefined;
    diff?: boolean | undefined;
    defaultExpanded?: boolean | undefined;
    className?: string | undefined;
    errorMessage?: string | undefined;
}>;
export declare type DropdownMultipleItem = _DropdownMultipleItem;
export declare const MeatballMenu: import("react").NamedExoticComponent<{
    type: "meatball" | "kebab";
    position: "left" | "right" | "top" | "bottom";
    size?: string | undefined;
    listItems: _MeatballMenu.Item[];
    onClick: (e: import("react").MouseEvent<HTMLElement, MouseEvent>) => void;
    color?: string | undefined;
}>;
export declare type MeatballMenuItem = _MeatballMenu.Item;
export declare const FileUploader: import("react").NamedExoticComponent<{
    onChange?: ((file: File | null) => void) | undefined;
    fileName: string | null;
    accept?: string | undefined;
    width?: string | undefined;
    className?: string | undefined;
    errored?: boolean | undefined;
    errorMessage?: string | undefined;
    borderColorType?: "primary" | "grayScaleS100" | undefined;
}>;
export declare const DatePicker: import("react").NamedExoticComponent<{
    displayFormat?: string | undefined;
    monthFormat?: string | undefined;
    date: Date | null;
    onChange: (date: Date | null) => void;
    width: string;
    errored?: boolean | undefined;
    errorMessage?: string | undefined;
    placeholderText?: string | undefined;
    selectedColor?: string | undefined;
    defaultHoverColor?: string | undefined;
}>;
export declare const DateRangePicker: import("react").NamedExoticComponent<{
    displayFormat?: string | undefined;
    monthFormat?: string | undefined;
    startDate: Date | null;
    endDate: Date | null;
    onChange: (startDate: Date | null, endDate: Date | null) => void;
    width: string;
    errored?: boolean | undefined;
    errorMessage?: string | undefined;
    startDatePlaceholderText?: string | undefined;
    endDatePlaceholderText?: string | undefined;
    selectedRangeColor?: string | undefined;
    selectedColor?: string | undefined;
    selectedHoverColor?: string | undefined;
    defaultHoverColor?: string | undefined;
}>;
export declare const Modal: import("react").FunctionComponent<{
    isOpen: boolean;
    title: string;
    buttons?: (({
        onClick?: ((e: import("react").MouseEvent<HTMLButtonElement, MouseEvent>) => void | Promise<void>) | undefined;
        type?: "button" | "submit" | "reset" | undefined;
        className?: string | undefined;
        dataTest?: string | undefined;
    } & {
        variant: "box";
        colorType?: "disabled" | "default" | "primary" | "primary ghost" | "secondary" | "secondary ghost" | "destructive" | "destructive ghost" | "grayScaleS100" | undefined;
        height?: string | undefined;
        width?: string | undefined;
    } & {
        text: string;
    }) | ({
        onClick?: ((e: import("react").MouseEvent<HTMLButtonElement, MouseEvent>) => void | Promise<void>) | undefined;
        type?: "button" | "submit" | "reset" | undefined;
        className?: string | undefined;
        dataTest?: string | undefined;
    } & {
        variant: "circle";
        colorType?: "default" | "primary" | "secondary" | undefined;
        svg?: string | undefined;
    } & {
        text: string;
    }) | ({
        onClick?: ((e: import("react").MouseEvent<HTMLButtonElement, MouseEvent>) => void | Promise<void>) | undefined;
        type?: "button" | "submit" | "reset" | undefined;
        className?: string | undefined;
        dataTest?: string | undefined;
    } & {
        variant: "text";
        colorType?: "default" | "primary" | "destructive" | "grayScaleS100" | undefined;
        svg?: string | undefined;
    } & {
        text: string;
    }))[] | undefined;
    onClose: () => void;
}>;
export declare const StepNumber: import("react").ForwardRefExoticComponent<Pick<{
    defaultValue: number;
    step: number;
    min: number;
    max: number;
    unit: string;
    rate: number;
    onChangeValue: (value: number) => void;
    theme: _RequiredThemeProps;
    className?: string | undefined;
}, "className" | "max" | "min" | "defaultValue" | "step" | "unit" | "rate" | "onChangeValue"> & {
    theme?: _RequiredThemeProps | undefined;
}>;
export declare const Loading: import("react").NamedExoticComponent<{
    visible?: boolean | undefined;
    text?: string | undefined;
    className?: string | undefined;
}>;
