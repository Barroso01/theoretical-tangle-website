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
export declare type TechUpdateFormInputValues = {
    Name?: string;
    Description?: string;
};
export declare type TechUpdateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TechUpdateFormOverridesProps = {
    TechUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TechUpdateFormProps = React.PropsWithChildren<{
    overrides?: TechUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    tech?: any;
    onSubmit?: (fields: TechUpdateFormInputValues) => TechUpdateFormInputValues;
    onSuccess?: (fields: TechUpdateFormInputValues) => void;
    onError?: (fields: TechUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TechUpdateFormInputValues) => TechUpdateFormInputValues;
    onValidate?: TechUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TechUpdateForm(props: TechUpdateFormProps): React.ReactElement;
