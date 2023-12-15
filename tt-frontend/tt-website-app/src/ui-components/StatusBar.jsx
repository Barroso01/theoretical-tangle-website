/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, View } from "@aws-amplify/ui-react";
export default function StatusBar(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="360px"
      height="20px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "StatusBar")}
      {...rest}
    >
      <View
        width="10px"
        height="10px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="5px"
        left="312px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        {...getOverrideProps(overrides, "Rectangle 1")}
      ></View>
      <Icon
        width="10px"
        height="10px"
        viewBox={{ minX: 0, minY: 0, width: 10, height: 10 }}
        paths={[
          {
            d: "M10 5C10 7.76142 7.76142 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.76142 0 10 2.23858 10 5Z",
            fill: "rgba(217,217,217,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="5px"
        left="328px"
        {...getOverrideProps(overrides, "Ellipse 1")}
      ></Icon>
      <Icon
        width="12px"
        height="13px"
        viewBox={{ minX: 0, minY: 0, width: 12, height: 13 }}
        paths={[
          {
            d: "M6 0L11.1962 9.75L0.803848 9.75L6 0Z",
            fill: "rgba(217,217,217,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="5px"
        left="296px"
        {...getOverrideProps(overrides, "Polygon 1")}
      ></Icon>
    </View>
  );
}
