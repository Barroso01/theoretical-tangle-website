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
export declare type UserTLUpdateFormInputValues = {
    username?: string;
    email?: string;
    profilepicture?: string;
    bio?: string;
    cognitoid?: string;
    location?: string;
};
export declare type UserTLUpdateFormValidationValues = {
    username?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    profilepicture?: ValidationFunction<string>;
    bio?: ValidationFunction<string>;
    cognitoid?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserTLUpdateFormOverridesProps = {
    UserTLUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    profilepicture?: PrimitiveOverrideProps<TextFieldProps>;
    bio?: PrimitiveOverrideProps<TextFieldProps>;
    cognitoid?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserTLUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserTLUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userTL?: any;
    onSubmit?: (fields: UserTLUpdateFormInputValues) => UserTLUpdateFormInputValues;
    onSuccess?: (fields: UserTLUpdateFormInputValues) => void;
    onError?: (fields: UserTLUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserTLUpdateFormInputValues) => UserTLUpdateFormInputValues;
    onValidate?: UserTLUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserTLUpdateForm(props: UserTLUpdateFormProps): React.ReactElement;
