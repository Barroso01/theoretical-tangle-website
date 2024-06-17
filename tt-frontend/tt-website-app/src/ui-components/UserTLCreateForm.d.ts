/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserTLCreateFormInputValues = {
    username?: string;
    email?: string;
    profilepicture?: string;
    bio?: string;
    cognitoid?: string;
    location?: string;
};
export declare type UserTLCreateFormValidationValues = {
    username?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    profilepicture?: ValidationFunction<string>;
    bio?: ValidationFunction<string>;
    cognitoid?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserTLCreateFormOverridesProps = {
    UserTLCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    profilepicture?: PrimitiveOverrideProps<TextFieldProps>;
    bio?: PrimitiveOverrideProps<TextFieldProps>;
    cognitoid?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserTLCreateFormProps = React.PropsWithChildren<{
    overrides?: UserTLCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserTLCreateFormInputValues) => UserTLCreateFormInputValues;
    onSuccess?: (fields: UserTLCreateFormInputValues) => void;
    onError?: (fields: UserTLCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserTLCreateFormInputValues) => UserTLCreateFormInputValues;
    onValidate?: UserTLCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserTLCreateForm(props: UserTLCreateFormProps): React.ReactElement;
