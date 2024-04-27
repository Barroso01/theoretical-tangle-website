/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { useState } from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import Logowithtexttl from "./Logowithtexttl";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function NavBarHeader(props) {
  const { user, click, overrides, ...rest } = props;
  const [homeBackgroundColor, setHomeBackgroundColor] = useState(undefined);
  const homeOnClick = useNavigateAction({ type: "url", url: "/" });
  const homeOnMouseEnter = () => {
    setHomeBackgroundColor('"blue"');
  };
  const projectsOnClick = useNavigateAction({ type: "url", url: "\\projects" });
  const imageOnClick = useNavigateAction({ type: "url", url: "/login" });
  return (
    <Flex
      gap="40px"
      direction="row"
      width="1440px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "NavBarHeader")}
      {...rest}
    >
      <Logowithtexttl
        width="162px"
        height="30px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        property1="colored"
        {...getOverrideProps(overrides, "Logo with text tl")}
      ></Logowithtexttl>
      <Flex
        gap="40px"
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
        {...getOverrideProps(overrides, "Frame 32129767076")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(92,102,112,1)"
          lineHeight="24px"
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
          children="Home"
          backgroundColor={homeBackgroundColor}
          onClick={() => {
            homeOnClick();
          }}
          onMouseEnter={() => {
            homeOnMouseEnter();
          }}
          {...getOverrideProps(overrides, "Home")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(92,102,112,1)"
          lineHeight="24px"
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
          children="Projects"
          onClick={() => {
            projectsOnClick();
          }}
          {...getOverrideProps(overrides, "Projects")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(92,102,112,1)"
          lineHeight="24px"
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
          children="Jobs"
          {...getOverrideProps(overrides, "Jobs")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(92,102,112,1)"
          lineHeight="24px"
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
          children="Company"
          {...getOverrideProps(overrides, "Company")}
        ></Text>
      </Flex>
      <Flex
        gap="32px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-end"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 32129767081")}
      >
        <MyIcon
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
          type="settings"
          {...getOverrideProps(overrides, "MyIcon")}
        ></MyIcon>
        <Image
          width="45px"
          height="45px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          borderRadius="160px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src="https://theoretical-tangle-storage-12103bfe191612-staging.s3.us-west-1.amazonaws.com/public/default-profilepicture.png?AWSAccessKeyId=ASIAXBEGI2DEI2MJLFEP&Expires=1714020912&Signature=QOCPFZhVwXghWrwZKYPqY%2BUZvbA%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMSJHMEUCIQDVHTP6wthCPvuMypHjwSJ5%2BDWG9DbHGY8utTmWTm4WowIgaSbNJ3fb3kNRmYD1OjELT6KanvKyR7pp9fbsO9%2BqDDEqzQQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARADGgw0ODM0NjU0MTY5MDQiDBsWvsaxSZ%2FFfcr%2FQyqhBHhluInoI439ANSwxzOtgC72pPkjHYE%2Blj11%2BLEFgiCNtwz3oDUhLl3ZMtzbyyATD6t4BvgKK2dzn7Yl86z98%2BA%2FzslDkwqu4Sn1Wp50A77eedOEfJKHgqiSrnCGN%2Fw3PrvJg5UknhD7eSExVgcOEIi235aNTiuBoojNSN8stJjIx%2Bf888lE%2BJibJumt3E0k%2BfEmYdk7DYp0Qk4uHosmmhWa4Z2lP3b3ztEbaFgJS03hA6Y%2B37gHTaJ6rWhGsX8X79FWwNXhATlvC4dE94ydy6V56bhSrVXhstMGbXgHchIi2mZT6RIx3XJooWpGDu7tcSJC3U1AYIpTu%2FEML5tkmDh8kZjqN68x0CdbG%2BWXXQhzXtKbf%2BsDkjxz4S8lnaJvskLfYDFOC2fdgXvWwm9obnbERPfq6Eo14Px1w5DcybpwPhlJgMRubDdKnlId%2B79BSjWxchUFIIqWYfrcvdckiuSHyam6yyH7Bz67IwqzwwF%2FWmPc%2FzntPHuYLf3vdwjo79bM65Y%2Fa5S3ufjN4wqtVykFVnMCrufsi07xgNJs10xpdwXupFCT4JZZXJWmbJpNDXbqk%2F%2F87XFAA%2FAntb5T6QejvyvObcj2kYnMrlmGvAl8EJnVZl7d1tmVg3pCLP2iqmhtnuBpXBhdTMbJ4nyoud4hmnr1u%2F6n7jJfKpwyB0Otpae9QZZeUMcHeO%2BtYPpYMhhUXN6czdyKsfb%2BryM79U2gMPjAp7EGOoUCEm%2FVv%2FFBQqtiJ7i7zvE%2FfASfSWf2LixNXG8ejWfaprANyUQ21mMNyhrWQyHWCHgywS%2BbnTafwbS5pWbsUW7%2FxYaM8LmgjqxgsD6RmFrZ4ieOSVYQVdpnzivnUe1CtOlQHNXw7KqeobbuUGF%2FcWNLB6Hh38RF5N3ReQuzPKLrKZtkdH%2BIPaJk3fH2zgVWBiJfJ0399dE6CpoC3e8ELMdp7%2FHBNIFqN3h1XovtzmN10pmCoIFksAutMncPfOJ%2BqY6UF2TIMjxl%2FOBIP9K8Q9f%2FMLJ%2BLQ6ym9792osuU8%2BNS%2B95QIkHut3mZhG5IuH7GLT8q3PsQFFAdcaYyZRT5fZ5uwnzqgkz"
          onClick={() => {
            imageOnClick();
          }}
          {...getOverrideProps(overrides, "image")}
        ></Image>
      </Flex>
    </Flex>
  );
}
