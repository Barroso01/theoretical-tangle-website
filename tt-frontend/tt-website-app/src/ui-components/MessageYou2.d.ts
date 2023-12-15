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
export declare type MessageYou2OverridesProps = {
    MessageYou2?: PrimitiveOverrideProps<FlexProps>;
    Message?: PrimitiveOverrideProps<FlexProps>;
    "no haha"?: PrimitiveOverrideProps<TextProps>;
    Time?: PrimitiveOverrideProps<FlexProps>;
    "18:16"?: PrimitiveOverrideProps<TextProps>;
    "Check Icon"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type MessageYou2Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: MessageYou2OverridesProps | undefined | null;
}>;
export default function MessageYou2(props: MessageYou2Props): React.ReactElement;
