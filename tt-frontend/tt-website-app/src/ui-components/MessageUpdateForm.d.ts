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
export declare type MessageUpdateFormInputValues = {
    content?: string;
    owner?: string;
    recipientId?: string;
    timestamp?: string;
};
export declare type MessageUpdateFormValidationValues = {
    content?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
    recipientId?: ValidationFunction<string>;
    timestamp?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MessageUpdateFormOverridesProps = {
    MessageUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
    recipientId?: PrimitiveOverrideProps<TextFieldProps>;
    timestamp?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MessageUpdateFormProps = React.PropsWithChildren<{
    overrides?: MessageUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    message?: any;
    onSubmit?: (fields: MessageUpdateFormInputValues) => MessageUpdateFormInputValues;
    onSuccess?: (fields: MessageUpdateFormInputValues) => void;
    onError?: (fields: MessageUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MessageUpdateFormInputValues) => MessageUpdateFormInputValues;
    onValidate?: MessageUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MessageUpdateForm(props: MessageUpdateFormProps): React.ReactElement;
