/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconmenuProps } from "./Iconmenu";
import { UserProfilePictureProps } from "./UserProfilePicture";
import { FlexProps } from "@aws-amplify/ui-react";
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
export declare type NavigationBarOverridesProps = {
    NavigationBar?: PrimitiveOverrideProps<FlexProps>;
    "\uD83E\uDD86 icon \"menu\""?: IconmenuProps;
    "User Profile Picture"?: UserProfilePictureProps;
} & EscapeHatchProps;
export declare type NavigationBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NavigationBarOverridesProps | undefined | null;
}>;
export default function NavigationBar(props: NavigationBarProps): React.ReactElement;
