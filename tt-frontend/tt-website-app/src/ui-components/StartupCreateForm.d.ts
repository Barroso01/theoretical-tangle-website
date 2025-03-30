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
export declare type StartupCreateFormInputValues = {
    logo?: string;
    startupname?: string;
    coverimage?: string;
    verticals?: string;
    description?: string;
};
export declare type StartupCreateFormValidationValues = {
    logo?: ValidationFunction<string>;
    startupname?: ValidationFunction<string>;
    coverimage?: ValidationFunction<string>;
    verticals?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StartupCreateFormOverridesProps = {
    StartupCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    logo?: PrimitiveOverrideProps<TextFieldProps>;
    startupname?: PrimitiveOverrideProps<TextFieldProps>;
    coverimage?: PrimitiveOverrideProps<TextFieldProps>;
    verticals?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StartupCreateFormProps = React.PropsWithChildren<{
    overrides?: StartupCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: StartupCreateFormInputValues) => StartupCreateFormInputValues;
    onSuccess?: (fields: StartupCreateFormInputValues) => void;
    onError?: (fields: StartupCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StartupCreateFormInputValues) => StartupCreateFormInputValues;
    onValidate?: StartupCreateFormValidationValues;
} & React.CSSProperties>;
export default function StartupCreateForm(props: StartupCreateFormProps): React.ReactElement;
