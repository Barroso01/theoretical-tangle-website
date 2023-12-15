/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function ChatListChatgramBotItem(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="16px"
      direction="row"
      width="364px"
      height="72px"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="12px 16px 12px 16px"
      {...getOverrideProps(overrides, "ChatListChatgramBotItem")}
      {...rest}
    >
      <View
        width="48px"
        height="48px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        borderRadius="100px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(139,171,216,1)"
        {...getOverrideProps(overrides, "Avatar")}
      ></View>
      <Flex
        gap="4px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Texts")}
      >
        <Flex
          gap="0"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Name")}
        >
          <Flex
            gap="4px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "bot name")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="600"
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
              children="Chatgram"
              {...getOverrideProps(overrides, "Chatgram")}
            ></Text>
            <View
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "verified bot")}
            >
              <Icon
                width="18.39px"
                height="18.36px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 18.38885498046875,
                  height: 18.3642578125,
                }}
                paths={[
                  {
                    d: "M9.36383 0.0392305C9.46383 0.139231 9.56383 0.13923 9.66383 0.23923C10.3638 0.83923 10.9638 1.33923 11.6638 1.93923C11.9638 2.13923 12.2638 2.33923 12.5638 2.33923C13.4638 2.43923 14.2638 2.53923 15.1638 2.53923C15.6638 2.53923 15.7638 2.63923 15.8638 3.23923C15.9638 4.13923 15.9638 5.03923 16.0638 5.83923C16.0638 6.23923 16.2638 6.53923 16.4638 6.83923C17.0638 7.53923 17.5638 8.13923 18.1638 8.83923C18.4638 9.23923 18.4638 9.33923 18.1638 9.63923C17.6638 10.2392 17.0638 10.9392 16.5638 11.5392C16.2638 11.8392 16.0638 12.2392 16.0638 12.7392C15.9638 13.5392 15.8638 14.4392 15.8638 15.2392C15.8638 15.6392 15.6638 15.7392 15.2638 15.8392C14.4638 15.8392 13.6638 15.9392 12.7638 16.0392C12.2638 16.0392 11.7638 16.2392 11.3638 16.5392C10.7638 17.0392 10.0638 17.6392 9.46383 18.1392C9.16383 18.4392 8.96383 18.4392 8.66383 18.1392C7.96383 17.5392 7.26383 16.9392 6.66383 16.3392C6.36383 16.1392 6.06383 15.9392 5.76383 15.9392C4.86383 15.8392 3.96383 15.7392 3.06383 15.7392C2.66383 15.7392 2.56383 15.5392 2.46383 15.2392C2.46383 14.3392 2.36383 13.5392 2.26383 12.6392C2.26383 12.2392 2.06383 11.8392 1.86383 11.5392C1.26383 10.9392 0.763826 10.2392 0.263826 9.53923C-0.136174 9.13923 -0.0361741 9.03923 0.263826 8.53923C0.863826 7.93923 1.36383 7.23923 1.96383 6.63923C2.26383 6.33923 2.36383 6.03923 2.36383 5.63923C2.36383 4.83923 2.46383 4.03923 2.56383 3.13923C2.56383 2.63923 2.66383 2.53923 3.16383 2.53923C4.06383 2.43923 4.86383 2.43923 5.76383 2.33923C6.16383 2.33923 6.46383 2.13923 6.76383 1.93923C7.46383 1.33923 8.16383 0.73923 8.86383 0.23923C8.96383 0.0392303 9.16383 -0.0607695 9.36383 0.0392305L9.36383 0.0392305Z",
                    fill: "rgba(26,156,255,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="11.92%"
                bottom="11.56%"
                left="12.23%"
                right="11.15%"
                {...getOverrideProps(overrides, "Vector15202")}
              ></Icon>
              <Icon
                width="8.72px"
                height="6.5px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 8.7154541015625,
                  height: 6.50482177734375,
                }}
                paths={[
                  {
                    d: "M8.71547 0.789339L8.51547 0.989339L3.11547 6.38934C3.01547 6.48934 2.91547 6.58934 2.71547 6.38934L0.11547 3.78934C-0.0845299 3.58934 0.0154701 3.48934 0.11547 3.38934C0.31547 3.18934 0.61547 2.78934 0.81547 2.78934C1.11547 2.78934 1.31547 3.18934 1.51547 3.38934L2.61547 4.48934C2.81547 4.68934 2.91547 4.68934 3.11547 4.48934L7.41547 0.189339C7.61547 -0.0106609 7.81547 -0.110661 8.01547 0.189339C8.11547 0.389339 8.31547 0.489339 8.41547 0.689339C8.61547 0.689339 8.71547 0.789339 8.71547 0.789339Z",
                    fill: "rgba(255,255,255,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="38.79%"
                bottom="34.1%"
                left="32.02%"
                right="31.67%"
                {...getOverrideProps(overrides, "Vector15203")}
              ></Icon>
            </View>
          </Flex>
          <Text
            fontFamily="Inter"
            fontSize="12px"
            fontWeight="400"
            color="rgba(112,121,145,1)"
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
            children="19:48"
            {...getOverrideProps(overrides, "19:48")}
          ></Text>
        </Flex>
        <Flex
          gap="0"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="space-between"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Message")}
        >
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(112,121,145,1)"
            lineHeight="18px"
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
            children="Chatgram Web was updated."
            {...getOverrideProps(overrides, "Chatgram Web was updated.")}
          ></Text>
          <Flex
            gap="0"
            direction="column"
            width="18px"
            height="18px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            borderRadius="100px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(120,227,120,1)"
            {...getOverrideProps(overrides, "new message")}
          >
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="400"
              color="rgba(255,255,255,1)"
              lineHeight="16px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="16px"
              height="16px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="1"
              {...getOverrideProps(overrides, "1")}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
