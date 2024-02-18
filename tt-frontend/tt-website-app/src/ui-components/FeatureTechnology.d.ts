/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MyIconProps } from "./MyIcon";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type FeatureTechnologyOverridesProps = {
    FeatureTechnology?: PrimitiveOverrideProps<FlexProps>;
    "Frame 430"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: MyIconProps;
    "Feature A"?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FeatureTechnologyProps = React.PropsWithChildren<Partial<FlexProps> & {
    goals?: any;
} & {
    overrides?: FeatureTechnologyOverridesProps | undefined | null;
}>;
export default function FeatureTechnology(props: FeatureTechnologyProps): React.ReactElement;
