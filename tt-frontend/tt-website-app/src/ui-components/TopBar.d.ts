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
export declare type TopBarOverridesProps = {
    TopBar?: PrimitiveOverrideProps<FlexProps>;
    "(Other User)"?: PrimitiveOverrideProps<FlexProps>;
    Avatar?: PrimitiveOverrideProps<ViewProps>;
    Texts?: PrimitiveOverrideProps<FlexProps>;
    Name?: PrimitiveOverrideProps<FlexProps>;
    "David Moore"?: PrimitiveOverrideProps<TextProps>;
    "Last Seen"?: PrimitiveOverrideProps<FlexProps>;
    "last seen 5 mins ago"?: PrimitiveOverrideProps<TextProps>;
    "Search Messages"?: PrimitiveOverrideProps<ViewProps>;
    "search icon"?: PrimitiveOverrideProps<ViewProps>;
    Vector15167?: PrimitiveOverrideProps<IconProps>;
    "Call Icon"?: PrimitiveOverrideProps<ViewProps>;
    "call icon"?: PrimitiveOverrideProps<ViewProps>;
    Vector15170?: PrimitiveOverrideProps<IconProps>;
    "More Icon"?: PrimitiveOverrideProps<ViewProps>;
    "more icon"?: PrimitiveOverrideProps<ViewProps>;
    Vector15173?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type TopBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: TopBarOverridesProps | undefined | null;
}>;
export default function TopBar(props: TopBarProps): React.ReactElement;
