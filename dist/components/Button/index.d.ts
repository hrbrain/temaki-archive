import * as React from 'react';
/**
 * Utils
 */
export declare type ColorTypeProp = 'primary' | 'primary ghost' | 'secondary' | 'secondary ghost' | 'destructive' | 'destructive ghost' | 'disabled';
export declare type BoxColorTypeProp = ColorTypeProp;
export declare type CircleColorTypeProp = Extract<ColorTypeProp, 'primary' | 'secondary'>;
export declare type TextColorTypeProp = Extract<ColorTypeProp, 'primary' | 'destructive'>;
export declare const buttonShapeType: {
    box: "box";
    circle: "circle";
    text: "text";
};
/**
 * Component
 */
export declare type Props = {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
} & ({
    type: typeof buttonShapeType.box;
    colorType?: BoxColorTypeProp;
    height?: string;
    width?: string;
} | {
    type: typeof buttonShapeType.circle;
    colorType?: CircleColorTypeProp;
    svg?: string;
} | {
    type: typeof buttonShapeType.text;
    colorType?: TextColorTypeProp;
    svg?: string;
});
export declare const Component: React.FC<Props>;
