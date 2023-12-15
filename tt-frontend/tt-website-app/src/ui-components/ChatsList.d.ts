/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
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
export declare type ChatsListOverridesProps = {
    ChatsList?: PrimitiveOverrideProps<FlexProps>;
    "Chat List (Chatgram Bot Item)"?: PrimitiveOverrideProps<FlexProps>;
    "Chat List (Item With New Icon)"?: PrimitiveOverrideProps<FlexProps>;
    "Chat List (Item Active)"?: PrimitiveOverrideProps<FlexProps>;
    "Chat List (Item 2)"?: PrimitiveOverrideProps<FlexProps>;
    "Chat List (Item 3)"?: PrimitiveOverrideProps<FlexProps>;
    "Group Chat List (Item)"?: PrimitiveOverrideProps<FlexProps>;
    "Channel Chat List (Item)"?: PrimitiveOverrideProps<FlexProps>;
    "Chat List (Item 4)"?: PrimitiveOverrideProps<FlexProps>;
    "Group Chat List 2 (Item)"?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type ChatsListProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ChatsListOverridesProps | undefined | null;
}>;
export default function ChatsList(props: ChatsListProps): React.ReactElement;
