/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InputBarOverridesProps = {
    InputBar?: PrimitiveOverrideProps<FlexProps>;
    "Emoji Icon"?: PrimitiveOverrideProps<ViewProps>;
    Vector15147?: PrimitiveOverrideProps<IconProps>;
    Typing?: PrimitiveOverrideProps<TextProps>;
    "Send Icon"?: PrimitiveOverrideProps<ViewProps>;
    Vector15150?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type InputBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: InputBarOverridesProps | undefined | null;
}>;
export default function InputBar(props: InputBarProps): React.ReactElement;
