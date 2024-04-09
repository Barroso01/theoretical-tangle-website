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
export declare type GoalsCreateFormInputValues = {
    Name?: string;
    Description?: string;
    image?: string;
    activeresearchers?: number;
};
export declare type GoalsCreateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Description?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    activeresearchers?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GoalsCreateFormOverridesProps = {
    GoalsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Description?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    activeresearchers?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GoalsCreateFormProps = React.PropsWithChildren<{
    overrides?: GoalsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: GoalsCreateFormInputValues) => GoalsCreateFormInputValues;
    onSuccess?: (fields: GoalsCreateFormInputValues) => void;
    onError?: (fields: GoalsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GoalsCreateFormInputValues) => GoalsCreateFormInputValues;
    onValidate?: GoalsCreateFormValidationValues;
} & React.CSSProperties>;
export default function GoalsCreateForm(props: GoalsCreateFormProps): React.ReactElement;
