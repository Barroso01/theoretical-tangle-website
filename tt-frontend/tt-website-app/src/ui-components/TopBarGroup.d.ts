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
export declare type TopBarGroupOverridesProps = {
    TopBarGroup?: PrimitiveOverrideProps<FlexProps>;
    "(Other User)"?: PrimitiveOverrideProps<FlexProps>;
    avatars?: PrimitiveOverrideProps<FlexProps>;
    Avatar15177?: PrimitiveOverrideProps<FlexProps>;
    Avatar15178?: PrimitiveOverrideProps<FlexProps>;
    Avatar15179?: PrimitiveOverrideProps<FlexProps>;
    Texts?: PrimitiveOverrideProps<FlexProps>;
    Name?: PrimitiveOverrideProps<FlexProps>;
    "Art Glass"?: PrimitiveOverrideProps<TextProps>;
    "Last Seen"?: PrimitiveOverrideProps<FlexProps>;
    "last message 12 mins ago"?: PrimitiveOverrideProps<TextProps>;
    "Search Messages"?: PrimitiveOverrideProps<ViewProps>;
    "search icon"?: PrimitiveOverrideProps<ViewProps>;
    Vector15187?: PrimitiveOverrideProps<IconProps>;
    "Call Icon"?: PrimitiveOverrideProps<ViewProps>;
    "call icon"?: PrimitiveOverrideProps<ViewProps>;
    Vector15190?: PrimitiveOverrideProps<IconProps>;
    "More Icon"?: PrimitiveOverrideProps<ViewProps>;
    "more icon"?: PrimitiveOverrideProps<ViewProps>;
    Vector15193?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type TopBarGroupProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: TopBarGroupOverridesProps | undefined | null;
}>;
export default function TopBarGroup(props: TopBarGroupProps): React.ReactElement;
