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
export declare type PredioUpdateFormInputValues = {
    name?: string;
    description?: string;
    address?: string;
    lat?: number;
    long?: number;
    coverimage?: string;
};
export declare type PredioUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    lat?: ValidationFunction<number>;
    long?: ValidationFunction<number>;
    coverimage?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PredioUpdateFormOverridesProps = {
    PredioUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    lat?: PrimitiveOverrideProps<TextFieldProps>;
    long?: PrimitiveOverrideProps<TextFieldProps>;
    coverimage?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PredioUpdateFormProps = React.PropsWithChildren<{
    overrides?: PredioUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    predio?: any;
    onSubmit?: (fields: PredioUpdateFormInputValues) => PredioUpdateFormInputValues;
    onSuccess?: (fields: PredioUpdateFormInputValues) => void;
    onError?: (fields: PredioUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PredioUpdateFormInputValues) => PredioUpdateFormInputValues;
    onValidate?: PredioUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PredioUpdateForm(props: PredioUpdateFormProps): React.ReactElement;
