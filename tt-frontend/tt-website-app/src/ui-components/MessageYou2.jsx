/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function MessageYou2(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="646px"
      height="unset"
      justifyContent="flex-end"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "MessageYou2")}
      {...rest}
    >
      <Flex
        gap="4px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="flex-end"
        shrink="0"
        position="relative"
        borderRadius="12px"
        padding="4px 12px 4px 12px"
        backgroundColor="rgba(120,227,120,1)"
        {...getOverrideProps(overrides, "Message")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(1,22,39,1)"
          lineHeight="20px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="no haha"
          {...getOverrideProps(overrides, "no haha")}
        ></Text>
        <Flex
          gap="4px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Time")}
        >
          <Text
            fontFamily="Inter"
            fontSize="12px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="16px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="18:16"
            {...getOverrideProps(overrides, "18:16")}
          ></Text>
          <View
            width="14px"
            height="14px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Check Icon")}
          >
            <Icon
              width="10.19px"
              height="7.58px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 10.1939697265625,
                height: 7.576042175292969,
              }}
              paths={[
                {
                  d: "M3.20117 6.168L0.988582 3.95542C0.878564 3.84916 0.731213 3.79036 0.578264 3.79169C0.425316 3.79302 0.279009 3.85437 0.170854 3.96252C0.0626997 4.07068 0.00135113 4.21698 2.20515e-05 4.36993C-0.00130703 4.52288 0.0574897 4.67023 0.163749 4.78025L2.78875 7.40525C2.89814 7.51461 3.04649 7.57604 3.20117 7.57604C3.35584 7.57604 3.50419 7.51461 3.61358 7.40525L10.0302 0.988582C10.1365 0.878564 10.1953 0.731213 10.194 0.578265C10.1926 0.425316 10.1313 0.279009 10.0231 0.170855C9.91499 0.0626998 9.76868 0.00135113 9.61573 2.20514e-05C9.46278 -0.00130703 9.31543 0.0574899 9.20541 0.163749L3.20117 6.168Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="25.05%"
              bottom="20.83%"
              left="12.55%"
              right="14.63%"
              {...getOverrideProps(overrides, "Vector")}
            ></Icon>
          </View>
        </Flex>
      </Flex>
    </Flex>
  );
}
