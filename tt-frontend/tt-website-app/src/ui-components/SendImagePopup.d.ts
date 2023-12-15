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
export declare type SendImagePopupOverridesProps = {
    SendImagePopup?: PrimitiveOverrideProps<FlexProps>;
    Top?: PrimitiveOverrideProps<FlexProps>;
    Dismis?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    Name?: PrimitiveOverrideProps<FlexProps>;
    "Send Image"?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
    SEND?: PrimitiveOverrideProps<TextProps>;
    Image15232?: PrimitiveOverrideProps<FlexProps>;
    Image15233?: PrimitiveOverrideProps<ViewProps>;
    Input?: PrimitiveOverrideProps<FlexProps>;
    "Caption Input"?: PrimitiveOverrideProps<FlexProps>;
    Caption?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SendImagePopupProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SendImagePopupOverridesProps | undefined | null;
}>;
export default function SendImagePopup(props: SendImagePopupProps): React.ReactElement;
