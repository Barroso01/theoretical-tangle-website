/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import UserProfilePicture from "./UserProfilePicture";
import { Text, View } from "@aws-amplify/ui-react";
export default function ContactPPandName(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="50px"
      height="50px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "ContactPPandName")}
      {...rest}
    >
      <UserProfilePicture
        width="40px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="1px"
        left="5px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "User Profile Picture")}
      ></UserProfilePicture>
      <Text
        fontFamily="Inter"
        fontSize="8px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="12px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="50px"
        height="9px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="39px"
        left="0px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Username"
        {...getOverrideProps(overrides, "Username")}
      ></Text>
    </View>
  );
}
