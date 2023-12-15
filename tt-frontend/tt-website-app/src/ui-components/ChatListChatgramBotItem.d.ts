/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type ChatListChatgramBotItemOverridesProps = {
    "1"?: PrimitiveOverrideProps<TextProps>;
    ChatListChatgramBotItem?: PrimitiveOverrideProps<FlexProps>;
    Avatar?: PrimitiveOverrideProps<ViewProps>;
    Texts?: PrimitiveOverrideProps<FlexProps>;
    Name?: PrimitiveOverrideProps<FlexProps>;
    "bot name"?: PrimitiveOverrideProps<FlexProps>;
    Chatgram?: PrimitiveOverrideProps<TextProps>;
    "verified bot"?: PrimitiveOverrideProps<ViewProps>;
    Vector15202?: PrimitiveOverrideProps<IconProps>;
    Vector15203?: PrimitiveOverrideProps<IconProps>;
    "19:48"?: PrimitiveOverrideProps<TextProps>;
    Message?: PrimitiveOverrideProps<FlexProps>;
    "Chatgram Web was updated."?: PrimitiveOverrideProps<TextProps>;
    "new message"?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type ChatListChatgramBotItemProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ChatListChatgramBotItemOverridesProps | undefined | null;
}>;
export default function ChatListChatgramBotItem(props: ChatListChatgramBotItemProps): React.ReactElement;
