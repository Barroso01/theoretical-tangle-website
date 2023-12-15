/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function TopBarGroup(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="8px"
      direction="row"
      width="916px"
      height="56px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      border="1px SOLID rgba(217,220,224,1)"
      padding="7px 15px 7px 15px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "TopBarGroup")}
      {...rest}
    >
      <Flex
        gap="16px"
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
        padding="8px 0px 8px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "(Other User)")}
      >
        <Flex
          gap="-8px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "avatars")}
        >
          <Flex
            gap="10px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
            shrink="0"
            position="relative"
            borderRadius="100px"
            padding="10px 10px 10px 10px"
            {...getOverrideProps(overrides, "Avatar15177")}
          ></Flex>
          <Flex
            gap="10px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
            shrink="0"
            position="relative"
            borderRadius="100px"
            padding="10px 10px 10px 10px"
            {...getOverrideProps(overrides, "Avatar15178")}
          ></Flex>
          <Flex
            gap="10px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
            shrink="0"
            position="relative"
            borderRadius="100px"
            padding="10px 10px 10px 10px"
            {...getOverrideProps(overrides, "Avatar15179")}
          ></Flex>
        </Flex>
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
              children="Art Glass"
              {...getOverrideProps(overrides, "Art Glass")}
            ></Text>
          </Flex>
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
            {...getOverrideProps(overrides, "Last Seen")}
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
              children="last message 12 mins ago"
              {...getOverrideProps(overrides, "last message 12 mins ago")}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
      <View
        width="40px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        borderRadius="100px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Search Messages")}
      >
        <View
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="20%"
          bottom="20%"
          left="20%"
          right="20%"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "search icon")}
        >
          <Icon
            width="18.5px"
            height="18.5px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 18.498291015625,
              height: 18.4989013671875,
            }}
            paths={[
              {
                d: "M7.49961 6.07538e-09C8.89758 -5.62529e-05 10.2678 0.390614 11.4555 1.12792C12.6432 1.86523 13.6012 2.91983 14.2214 4.1727C14.8416 5.42558 15.0993 6.82686 14.9654 8.21841C14.8315 9.60996 14.3113 10.9364 13.4636 12.048L18.2066 16.793C18.386 16.973 18.4901 17.2144 18.4978 17.4684C18.5056 17.7223 18.4164 17.9697 18.2484 18.1603C18.0803 18.3508 17.8461 18.4703 17.5931 18.4944C17.3402 18.5185 17.0876 18.4454 16.8866 18.29L16.7926 18.207L12.0476 13.464C11.1006 14.1861 9.99527 14.6723 8.82305 14.8824C7.65083 15.0925 6.44543 15.0204 5.30661 14.6721C4.16778 14.3238 3.12826 13.7094 2.27406 12.8795C1.41986 12.0497 0.775549 11.0285 0.394433 9.90019C0.0133168 8.77192 -0.0936444 7.56912 0.0823999 6.39131C0.258444 5.2135 0.712432 4.09454 1.4068 3.12703C2.10117 2.15951 3.01595 1.37126 4.07545 0.827486C5.13495 0.283715 6.30871 6.2855e-05 7.49961 6.07538e-09L7.49961 6.07538e-09ZM7.49961 2C6.04091 2 4.64197 2.57946 3.61052 3.61091C2.57907 4.64236 1.99961 6.04131 1.99961 7.5C1.99961 8.95869 2.57907 10.3576 3.61052 11.3891C4.64197 12.4205 6.04091 13 7.49961 13C8.9583 13 10.3572 12.4205 11.3887 11.3891C12.4201 10.3576 12.9996 8.95869 12.9996 7.5C12.9996 6.04131 12.4201 4.64236 11.3887 3.61091C10.3572 2.57946 8.9583 2 7.49961 2Z",
                fill: "rgba(112,121,145,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="10.42%"
            bottom="12.5%"
            left="10.42%"
            right="12.51%"
            {...getOverrideProps(overrides, "Vector15187")}
          ></Icon>
        </View>
      </View>
      <View
        width="40px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        borderRadius="100px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Call Icon")}
      >
        <View
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="20%"
          bottom="20%"
          left="20%"
          right="20%"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "call icon")}
        >
          <Icon
            width="14px"
            height="20px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 14.0001220703125,
              height: 19.999755859375,
            }}
            paths={[
              {
                d: "M2.3632 0.43881L3.4392 0.0948098C4.44919 -0.22719 5.5262 0.29381 5.9592 1.31181L6.8182 3.33981C7.1922 4.22281 6.9852 5.26181 6.3042 5.90781L4.4102 7.70581C4.5262 8.78181 4.8882 9.84081 5.4942 10.8828C6.06998 11.891 6.84222 12.7734 7.7652 13.4778L10.0402 12.7178C10.9032 12.4308 11.8422 12.7618 12.3702 13.5388L13.6032 15.3488C14.2182 16.2528 14.1082 17.4988 13.3452 18.2648L12.5272 19.0858C11.7132 19.9028 10.5502 20.1998 9.47519 19.8638C6.93619 19.0718 4.6022 16.7208 2.4722 12.8108C0.339196 8.89481 -0.413804 5.57081 0.214196 2.84281C0.478196 1.69481 1.2952 0.77981 2.3632 0.43881Z",
                fill: "rgba(112,121,145,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="8.33%"
            bottom="8.33%"
            left="22.54%"
            right="19.13%"
            {...getOverrideProps(overrides, "Vector15190")}
          ></Icon>
        </View>
      </View>
      <View
        width="40px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        borderRadius="100px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "More Icon")}
      >
        <View
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="20%"
          bottom="20%"
          left="20%"
          right="20%"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "more icon")}
        >
          <Icon
            width="4px"
            height="16px"
            viewBox={{ minX: 0, minY: 0, width: 4, height: 16 }}
            paths={[
              {
                d: "M2 4C1.46957 4 0.96086 3.78929 0.585787 3.41421C0.210714 3.03914 0 2.53043 0 2C0 1.46957 0.210714 0.960859 0.585787 0.585786C0.96086 0.210714 1.46957 8.88178e-16 2 0C2.53043 8.88178e-16 3.03914 0.210714 3.41421 0.585786C3.78929 0.960859 4 1.46957 4 2C4 2.53043 3.78929 3.03914 3.41421 3.41421C3.03914 3.78929 2.53043 4 2 4ZM2 10C1.46957 10 0.96086 9.78929 0.585787 9.41421C0.210714 9.03914 0 8.53043 0 8C0 7.46957 0.210714 6.96086 0.585787 6.58579C0.96086 6.21071 1.46957 6 2 6C2.53043 6 3.03914 6.21071 3.41421 6.58579C3.78929 6.96086 4 7.46957 4 8C4 8.53043 3.78929 9.03914 3.41421 9.41421C3.03914 9.78929 2.53043 10 2 10ZM0 14C0 14.5304 0.210714 15.0391 0.585787 15.4142C0.96086 15.7893 1.46957 16 2 16C2.53043 16 3.03914 15.7893 3.41421 15.4142C3.78929 15.0391 4 14.5304 4 14C4 13.4696 3.78929 12.9609 3.41421 12.5858C3.03914 12.2107 2.53043 12 2 12C1.46957 12 0.96086 12.2107 0.585787 12.5858C0.210714 12.9609 0 13.4696 0 14Z",
                fill: "rgba(112,121,145,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="16.67%"
            bottom="16.67%"
            left="41.67%"
            right="41.67%"
            {...getOverrideProps(overrides, "Vector15193")}
          ></Icon>
        </View>
      </View>
    </Flex>
  );
}
