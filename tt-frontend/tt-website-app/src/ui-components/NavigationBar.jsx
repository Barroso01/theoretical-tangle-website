/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import Iconmenu from "./Iconmenu";
import UserProfilePicture from "./UserProfilePicture";
import { Flex } from "@aws-amplify/ui-react";
export default function NavigationBar(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="285px"
      direction="row"
      width="355px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="5px 10px 5px 10px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "NavigationBar")}
      {...rest}
    >
      <Iconmenu
        display="flex"
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, '\uD83E\uDD86 icon "menu"')}
      ></Iconmenu>
      <UserProfilePicture
        width="unset"
        height="25px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "User Profile Picture")}
      ></UserProfilePicture>
    </Flex>
  );
}
