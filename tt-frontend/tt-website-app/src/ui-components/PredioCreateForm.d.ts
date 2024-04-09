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
export declare type PredioCreateFormInputValues = {
    name?: string;
    description?: string;
    address?: string;
    lat?: number;
    long?: number;
    coverimage?: string;
};
export declare type PredioCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    lat?: ValidationFunction<number>;
    long?: ValidationFunction<number>;
    coverimage?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PredioCreateFormOverridesProps = {
    PredioCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    lat?: PrimitiveOverrideProps<TextFieldProps>;
    long?: PrimitiveOverrideProps<TextFieldProps>;
    coverimage?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PredioCreateFormProps = React.PropsWithChildren<{
    overrides?: PredioCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PredioCreateFormInputValues) => PredioCreateFormInputValues;
    onSuccess?: (fields: PredioCreateFormInputValues) => void;
    onError?: (fields: PredioCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PredioCreateFormInputValues) => PredioCreateFormInputValues;
    onValidate?: PredioCreateFormValidationValues;
} & React.CSSProperties>;
export default function PredioCreateForm(props: PredioCreateFormProps): React.ReactElement;
