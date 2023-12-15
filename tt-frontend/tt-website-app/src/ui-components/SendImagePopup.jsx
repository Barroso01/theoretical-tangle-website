/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function SendImagePopup(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="420px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      borderRadius="16px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "SendImagePopup")}
      {...rest}
    >
      <Flex
        gap="16px"
        direction="row"
        width="unset"
        height="52px"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        borderRadius="16px 16px 0px 0px"
        padding="8px 16px 8px 16px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Top")}
      >
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
          {...getOverrideProps(overrides, "Dismis")}
        >
          <Icon
            width="16.01px"
            height="16.01px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 16.01214599609375,
              height: 16.01220703125,
            }}
            paths={[
              {
                d: "M0.209861 0.399288L0.292861 0.305288C0.465054 0.133112 0.694154 0.0296803 0.93718 0.0143991C1.18021 -0.000882047 1.42046 0.0730369 1.61286 0.222288L1.70686 0.305288L7.99986 6.59729L14.2929 0.305288C14.3851 0.209778 14.4955 0.133596 14.6175 0.0811869C14.7395 0.0287779 14.8707 0.00119157 15.0035 3.77571e-05C15.1362 -0.00111606 15.2679 0.0241854 15.3908 0.0744663C15.5137 0.124747 15.6254 0.199 15.7193 0.292893C15.8131 0.386786 15.8874 0.498438 15.9377 0.621334C15.988 0.744231 16.0133 0.87591 16.0121 1.00869C16.011 1.14147 15.9834 1.27269 15.931 1.39469C15.8786 1.5167 15.8024 1.62704 15.7069 1.71929L9.41486 8.01229L15.7069 14.3053C15.879 14.4775 15.9825 14.7066 15.9978 14.9496C16.013 15.1926 15.9391 15.4329 15.7899 15.6253L15.7069 15.7193C15.5347 15.8915 15.3056 15.9949 15.0625 16.0102C14.8195 16.0255 14.5793 15.9515 14.3869 15.8023L14.2929 15.7193L7.99986 9.42729L1.70686 15.7193C1.51826 15.9014 1.26566 16.0022 1.00346 16C0.741263 15.9977 0.490451 15.8925 0.305043 15.7071C0.119635 15.5217 0.0144654 15.2709 0.012187 15.0087C0.00990859 14.7465 0.110703 14.4939 0.292861 14.3053L6.58486 8.01229L0.292861 1.71929C0.120685 1.5471 0.0172534 1.318 0.00197221 1.07497C-0.013309 0.831943 0.06061 0.591692 0.209861 0.399288L0.292861 0.305288L0.209861 0.399288Z",
                fill: "rgba(112,121,145,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="16.62%"
            bottom="16.67%"
            left="16.67%"
            right="16.62%"
            {...getOverrideProps(overrides, "Vector")}
          ></Icon>
        </View>
        <Flex
          gap="0"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Name")}
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
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Send Image"
            {...getOverrideProps(overrides, "Send Image")}
          ></Text>
        </Flex>
        <Flex
          gap="0"
          direction="row"
          width="unset"
          height="36px"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          position="relative"
          borderRadius="16px"
          padding="0px 16px 0px 16px"
          backgroundColor="rgba(120,227,120,1)"
          {...getOverrideProps(overrides, "Button")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="600"
            color="rgba(255,255,255,1)"
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
            children="SEND"
            {...getOverrideProps(overrides, "SEND")}
          ></Text>
        </Flex>
      </Flex>
      <Flex
        gap="16px"
        direction="row"
        width="unset"
        height="332px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="8px 16px 0px 16px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Image15232")}
      >
        <View
          width="unset"
          height="unset"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          borderRadius="16px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Image15233")}
        ></View>
      </Flex>
      <Flex
        gap="16px"
        direction="row"
        width="unset"
        height="84px"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="16px 16px 16px 16px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Input")}
      >
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="52px"
          justifyContent="flex-start"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          border="1px SOLID rgba(217,220,224,1)"
          borderRadius="16px"
          padding="7px 15px 7px 15px"
          {...getOverrideProps(overrides, "Caption Input")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(112,121,145,1)"
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
            children="Caption"
            {...getOverrideProps(overrides, "Caption")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
